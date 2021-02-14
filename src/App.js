import util from 'util';
import { useState }  from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import OutputDisplay from './components/OutputDisplay';
import Modal from "./components/Modal";
import useModal from './helpers/useModal';
import { handleCopy } from './helpers/handlers.js';
import languages from './characters.js';

function App() {

  const [currentLanguage, setCurrentLanguage] = useState(Object.keys(languages)[0]);
  const [userString, setUserString] = useState("");
  const {isShowing, toggleModal} = useModal();
  
  function handleLanguageChange(newValue) {
    setCurrentLanguage(newValue);
  }

  function handleInput(newValue) {
    console.log("handleInput - before: " + userString);
    setUserString(userString.concat(newValue));
    console.log("handleInput - after: " + userString);
  }

  function handleBackspace() {
    setUserString(userString.slice(0, -1));
  }

  function handleClear() {
    setUserString("");
  }

  return (
  <div id="keyboard-main-content" > 
  <h1> Virtual Keyboard </h1>
    
    <Modal isShowing={isShowing} toggleModal={toggleModal} userString={userString} handleCopy={handleCopy} />
    <OutputDisplay userString={userString} handleClear={handleClear} toggleModal={toggleModal} handleCopy={handleCopy} />
    <Keyboard id="keyboard_container" currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange} languages={languages} onClick={handleInput} handleBackspace={handleBackspace} />

  </div>
  );
}

export default App;
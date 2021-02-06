import util from 'util';
import { useState }  from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import LanguageSelector from './components/LanguageSelector';
import OutputDisplay from './components/OutputDisplay';
import characters from './characters';
import Modal from "./components/Modal";
import useModal from './helpers/useModal';
import { handleCopy } from './helpers/handlers.js'

function App() {

  const [language, setLanguage] = useState("english");
  const [userString, setUserString] = useState("");
  const {isShowing, toggleModal} = useModal();

  function handleLanguageChange(newValue) {
    setLanguage(newValue);
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
  <div id="app_container" > 
  <h1> App Container </h1>
    
    {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}
    <Modal isShowing={isShowing} toggleModal={toggleModal} userString={userString} handleCopy={handleCopy} />
    <OutputDisplay userString={userString} onClear={handleClear} toggleModal={toggleModal} handleCopy={handleCopy} />
    <LanguageSelector language={language} onChange={handleLanguageChange} />
    <Keyboard id="keyboard_container" language={language} characters={characters} onClick={handleInput} handleBackspace={handleBackspace} />

  </div>
  );
}

export default App;


  // window.addEventListener("keydown", function(event){
  //   // console.log(event);
  //   if (event.key.match(/[a-z]/i) || event.key.match(/[0-9]/i)) {
  //     console.log("typed " + event.key);
  //     handleInput(event.key);
  //   }
  //   if (event.which === 32) {
  //     console.log("typed SPACE");
  //     handleInput(event.key);
  //   }  
  //   }, false);

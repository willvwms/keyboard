import util from 'util';
import { useState }  from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import LanguageSelector from './components/LanguageSelector';
import OutputDisplay from './components/OutputDisplay';
import characters from './characters';
import Modal from "./components/Modal";
import useModal from './helpers/useModal';

function App() {

  const [language, setLanguage] = useState("english");
  const [userString, setUserString] = useState("");
  const {isShowing, toggle} = useModal();

  function handleLanguageChange(newValue) {
    setLanguage(newValue);
    // console.log(newValue);
  }

  function handleClear() {
    setUserString("");
    // console.log(newValue);
  }

  function handleInput(newValue) {
    setUserString(userString.concat(newValue));
    // console.log(newValue);
  }

  function handleFullScreen() {
    alert("full screen!");
  }

  function handleCopy() {
    console.log("fired");
    const temporaryElement = document.createElement('textarea');
    temporaryElement.value = userString;
    temporaryElement.setAttribute('aria-hidden', 'true');
    // temporaryElement.setAttribute('readonly', '');
    // temporaryElement.style.position = 'absolute';
    // temporaryElement.style.left = '-9999px';
    document.body.appendChild(temporaryElement);
    temporaryElement.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryElement);
    console.log(`'${userString}' was copied to the clipboard`);      
}

  return (
  <div id="app_container"> 
  <h1> App Container </h1>
    
    {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}
    <Modal isShowing={isShowing} hide={toggle} userString={userString} copy={handleCopy} />
    <OutputDisplay userString={userString} onClear={handleClear} onFullScreen={toggle} />
    <LanguageSelector language={language} onChange={handleLanguageChange} />
    <Keyboard id="keyboard_container" language={language} characters={characters} onClick={handleInput} />

  </div>
  );
}

export default App;

import util from 'util';
import { useState }  from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import LanguageSelector from './components/LanguageSelector';
import OutputDisplay from './components/OutputDisplay';
import characters from './characters';

function App() {

  const [language, setLanguage] = useState("english");
  const [userString, setUserString] = useState("");

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

  return (
  <div id="app_container"> 
  <h1> App Container </h1>    

    <OutputDisplay userString={userString} onClear={handleClear} onFullScreen={handleFullScreen} />
    <LanguageSelector language={language} onChange={handleLanguageChange} />
    <Keyboard id="keyboard_container" language={language} characters={characters} onClick={handleInput} />

  </div>
  );
}

export default App;

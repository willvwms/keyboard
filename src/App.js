import { useState }  from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import LanguageSelector from './components/LanguageSelector';
import OutputDisplay from './components/OutputDisplay';
import characters from './characters';

function App() {

  const [language, setLanguage] = useState("english");
  const [userString, setUserString] = useState("placeholder for user input");

  function handleLanguageChange(newValue) {
    setLanguage(newValue);
    console.log(newValue);
  }

  return (
  <div id="app_container"> 
  <h1> App Container </h1>    

    <OutputDisplay userString={userString} />
    <LanguageSelector language={language} onChange={handleLanguageChange} />
    <Keyboard id="keyboard_container" language={language} characters={characters} />

  </div>
  );
}

export default App;

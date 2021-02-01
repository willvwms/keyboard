import { useState }  from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import LanguageSelector from './components/LanguageSelector';
// import Display from 'components/Display';
import characters from './characters';

function App() {

  const [language, setLanguage] = useState("english");

  function handleLanguageChange(newValue) {
    setLanguage(newValue);
    console.log(newValue);
  }

  return (
  <div id="app_container"> 
  <h1> App Container </h1>    
    <div id="display_container">
    <h1> Display Container </h1>
      <div id="display_screen">
        <p>OUTPUT DISPLAY</p>
      </div>

      <button id="display_bttn1">clear/reset</button>
      <button id="display_bttn2"> copy</button>
      <button id="display_bttn3">view full screen</button>

    </div>

    <LanguageSelector language={language} onChange={handleLanguageChange} />
    <Keyboard id="keyboard_container" language={language} characters={characters} />

  </div>
  );
}

export default App;

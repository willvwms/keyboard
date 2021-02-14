import React from 'react';
import Button from './Button';
import LanguageSelector from './LanguageSelector';
import util from 'util';
// import { SpaceIcon } from '../assets/icons.js'

function Keyboard (props) {
    
    const currentLanguage = props.currentLanguage;
    const characters = props.languages[currentLanguage];

    const buttons = characters.map((item) => 
        <Button id={`${item.language_abbr}_${item.value}`} value={item.value} buttonType={item.type} onClick={props.onClick} />
    );

    buttons.push(<Button id="space" value=' ' buttonType="character" onClick={props.onClick} />)
    buttons.push(<Button id="backspace" value={null} buttonType="backspace" handleBackspace={props.handleBackspace} />)
    buttons.push(<Button id="enter" value={null} buttonType="enter" onClick={props.onClick} />)

    return (
    <div id="keyboard_container" >

        <h2> Input/Keyboard </h2>

        <LanguageSelector currentLanguage={currentLanguage} languages={props.languages} handleLanguageChange={props.handleLanguageChange} />
        {buttons}

    </div>
    );
}

export default Keyboard;
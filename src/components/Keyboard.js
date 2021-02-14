import React from 'react';
import Button from './Button';
import util from 'util';
// import { SpaceIcon } from '../assets/icons.js'

function Keyboard (props) {
    
    const language = props.language;
    const keys = props.characters[language];

    const buttons = keys.map((item) => 
        <Button id={`${item.language}_${item.value}`} value={item.value} buttonType={item.type} onClick={props.onClick} />
    );

    buttons.push(<Button id="space" value=' ' buttonType="character" onClick={props.onClick} />)
    buttons.push(<Button id="backspace" value={null} buttonType="backspace" handleBackspace={props.handleBackspace} />)
    buttons.push(<Button id="enter" value={null} buttonType="enter" onClick={props.onClick} />)

    return (
    <div id="keyboard_container" >

        {buttons}

    </div>
    );
}

export default Keyboard;
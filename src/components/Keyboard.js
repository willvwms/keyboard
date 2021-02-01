import React from 'react';
import Button from './Button';

function Keyboard (props) {
    
    const language = props.language;
    const keys = props.characters[language];

    const buttons = keys.map((item) => 
        <Button id={`${item.language}_${item.value}`} value={item.value} dataType={item.dataType} />
    );

    return (
    <div id="keyboard_container">

        {buttons}

    </div>
    );
}

export default Keyboard;
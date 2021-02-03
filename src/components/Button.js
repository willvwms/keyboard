import React from 'react';
import util from 'util';

function Button (props) {

    const value = props.value;
    const buttonType = props.buttonType;
    const id = props.id;

    const isKey = Boolean(buttonType === "letter" || buttonType === "number");

    function handleInput(event) {
        props.onClick(event.target.value);
        console.log(util.inspect(event.target.value));
    }

    function handleOther() {
        console.log("about to fire handle OTHER")
        props.onClick();
        console.log("fired handleOther");
    }

    return (
        <button 
            id={id} 
            buttonType={buttonType} 
            value={value} 
            onClick={isKey ? handleInput : handleOther} 
        >
            {value}
        </button>
        );
}

export default Button;
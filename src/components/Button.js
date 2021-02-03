import React from 'react';
import util from 'util';

function Button (props) {

    const value = props.value;
    const buttonType = props.buttonType;
    const id = props.id;
    const userString = props.userString;
    const element = props.screenElementRef;

    const isKey = Boolean(buttonType === "letter" || buttonType === "number");
    const isCopy = (Boolean(buttonType === "copy"));

    function handleInput(event) {
        props.onClick(event.target.value);
        console.log(util.inspect(event.target.value));
    }

    function handleOther() {
        console.log("about to fire handle OTHER")
        props.onClick();
        console.log("fired handleOther");
    }

    function handleCopy() {
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
        <button 
            id={id} 
            buttonType={buttonType} 
            value={value} 
            onClick={isKey ? handleInput : isCopy ? handleCopy : handleOther } 
        >
            {value}
        </button>
        );
}

export default Button;
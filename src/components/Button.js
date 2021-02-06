
import React from 'react';
import util from 'util';

function Button (props) {

    const value = props.value;
    const buttonType = props.buttonType;
    const id = props.id;
    const userString = props.userString;

    const isKey = Boolean(buttonType === "letter" || buttonType === "number");
    const isCopy = (Boolean(buttonType === "copy"));
    const isToggleModal = (Boolean(buttonType === "toggleModal"));
    const isBackspace = (Boolean(buttonType === "backspace"));
    const isEnter = (Boolean(buttonType === "enter"));

    function handleInput(event) {
        props.onClick(event.target.value);
    }
    
    function handleEnter() {
        props.onClick(`
`);
    }
    
    function handleBackspace () {
        console.log("fired handleBackspace")
        props.handleBackspace();
    }

    function handleCopy() {
        props.handleCopy(userString);
    }
    
    function handleToggleModal () {
        props.toggleModal();
    }

    function handleOther() {
        console.log("fired handleOther");
    }

    return (
        <input 
            type="button"
            id={id} 
            buttonType={buttonType} 
            value={value} 
            onClick={isKey ? handleInput : isCopy ? handleCopy : isToggleModal ? handleToggleModal : isBackspace ? handleBackspace : isEnter ? handleEnter : handleOther } 
        />
            
        );
}

export default Button;
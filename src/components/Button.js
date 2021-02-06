
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
    const isToggleModal = (Boolean(buttonType === "toggleModal"));
    const isBackspace = (Boolean(buttonType === "backspace"));

    function handleInput(event) {
        props.onClick(event.target.value);
        // console.log(util.inspect(event.target.value));
    }

    function handleOther() {
        console.log("about to fire handle OTHER")
        props.onClick();
        console.log("fired handleOther");
    }

    function handleOther() {
        console.log("about to fire handle OTHER")
        props.onClick();
        console.log("fired handleOther");
    }    

    function handleCopy() {
        props.handleCopy(userString);
    }
    function handleToggleModal () {
        props.toggleModal();
    }

    function handleBackspace () {
        console.log("fired handleBackspace")
        props.handleBackspace();
    }
    
    return (
        <input 
            type="button"
            id={id} 
            buttonType={buttonType} 
            value={value} 
            onClick={isKey ? handleInput : isCopy ? handleCopy : isToggleModal ? handleToggleModal : isBackspace ? handleBackspace : handleOther } 
        />
            
        );
}

export default Button;
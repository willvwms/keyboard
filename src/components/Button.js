
import React from 'react';
import util from 'util';
import { SpaceIcon, BackspaceIcon, EnterIcon, CopyIcon, ClearIcon, OpenFullScreenIcon, CloseFullScreenIcon } from '../assets/icons.js'

function Button (props) {

    const value = props.value;
    const buttonType = props.buttonType;
    const id = props.id;
    const userString = props.userString;

    const isSpace = Boolean(id === "space");
    const isCharacter = Boolean(buttonType === "character");
    const isCopy = (Boolean(buttonType === "copy"));
    const isClear = (Boolean(buttonType === "clear"));
    const isToggleModal = (Boolean(buttonType === "toggleModal"));
    const isOpenFullScreen = (Boolean(id === "openFullScreen"))
    const isCloseFullScreen = (Boolean(id === "closeFullScreen"))
    const isBackspace = (Boolean(buttonType === "backspace"));
    const isEnter = (Boolean(buttonType === "enter"));

    function handleInput(event) {
        props.onClick(event.target.value);
        // console.log(util.inspect(event.target.value));
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

    function handleClear() {
        props.handleClear();
    }

    function handleToggleModal () {
        props.toggleModal();
    }

    function handleOther() {
        console.log("fired handleOther");
    }

    return (
        <button 
            // type="button"
            id={id} 
            buttonType={buttonType} 
            value={value} 
            onClick={isCharacter ? handleInput : isClear ? handleClear : isCopy ? handleCopy : isToggleModal ? handleToggleModal : isBackspace ? handleBackspace : isEnter ? handleEnter : handleOther } 
        >
            { 
                isSpace ? <SpaceIcon /> :
                isBackspace ? <BackspaceIcon /> :
                isEnter ? <EnterIcon /> :
                isCopy ? <CopyIcon /> :
                isClear ? <ClearIcon /> :
                isCloseFullScreen ? <CloseFullScreenIcon />:
                isOpenFullScreen ? <OpenFullScreenIcon />:
                value
            }
        </button>
    );
}

export default Button;
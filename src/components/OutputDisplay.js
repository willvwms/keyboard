import React from 'react';
import Button from './Button';
import Screen from './Screen';

function OutputDisplay (props) {

    const userString = props.userString;

    return (
    <div id="output_display">

        <h2> Output/DisplayBox </h2>

        <Screen userString={userString} />
        <Button id="copy_btn" value="Copy" buttonType="copy" userString={props.userString} handleCopy={props.handleCopy}/>
        <Button id="clear_btn" value="Clear" buttonType="clear" handleClear={props.handleClear} />
        <Button id="openFullScreen" value="Full Screen" buttonType="toggleModal" toggleModal={props.toggleModal} />

    </div>
    );
}

export default OutputDisplay;
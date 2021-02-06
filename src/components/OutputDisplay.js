import React from 'react';
import Button from './Button';
import Screen from './Screen';

function OutputDisplay (props) {

    const userString = props.userString;

    return (
    <div id="output_display">

        <Screen userString={userString} />
        <Button id="copy_btn" value="Copy" buttonType="copy" userString={props.userString} handleCopy={props.handleCopy}/>
        <Button id="reset_btn" value="Clear" buttonType="clear" onClick={props.onClear} />
        <Button id="modal_toggle_IN_DISPLAY" value="Full Screen" buttonType="toggleModal" toggleModal={props.toggleModal} />

    </div>
    );
}

export default OutputDisplay;
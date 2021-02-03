import React from 'react';
import Button from './Button';
import Screen from './Screen';

function OutputDisplay (props) {

    const userString = props.userString;

    return (
    <div id="output_display">

        <Screen userString={userString} />
        <Button id="copy_btn" value="Copy" buttonType="copy" userString={props.userString} />
        <Button id="reset_btn" value="Clear" buttonType="clear" onClick={props.onClear} />
        <Button id="fullscreen_btn" value="Full" buttonType="fullScreen" onClick={props.onFullScreen} />

    </div>
    );
}

export default OutputDisplay;
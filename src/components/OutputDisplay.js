import React from 'react';
import Button from './Button';
import Screen from './Screen';

function OutputDisplay (props) {

    const userString = props.userString;

    return (
    <div id="output_display">

        <Screen userString={userString} />
        <Button id="copy_btn" value="Copy" dataType="n/a" />
        <Button id="reset_btn" value="Clear" dataType="n/a" />
        <Button id="fullscreen_btn" value="Full" dataType="n/a" />

    </div>
    );
}

export default OutputDisplay;
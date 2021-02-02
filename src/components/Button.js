import React from 'react';
import util from 'util';

function Button (props) {

    const value = props.value;
    const dataType = props.dataType;
    const id = props.id;

    function handleInput(event) {
        props.onClick(event.target.value);
        console.log(util.inspect(event.target.value));
    }
    
    return (
        <button id={id} dataType={dataType} value={value} onClick={handleInput} >
            {value}
        </button>
        );
}

export default Button;
import React from 'react';

function Button (props) {

    const value = props.value;
    const dataType = props.dataType;
    const id = props.id;

    return (
        <button id={id} data-type={dataType} >
            {value}
        </button>
        );
}

export default Button;
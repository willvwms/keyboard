import React from 'react';

function Screen (props) {

    const contents = props.userString;
    
    return (
    <div id="screen">

        <p ref={props.screenElementRef} >
            {contents}
        </p>

    </div>
    );
}

export default Screen;
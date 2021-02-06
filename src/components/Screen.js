import React from 'react';

function Screen (props) {

    const contents = props.userString;
    
    return (
    <div id="screen" style= {{ "white-space": "pre-line" }} >

        <p >
            {contents}
        </p>

    </div>
    );
}

export default Screen;
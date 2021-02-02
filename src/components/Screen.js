import React from 'react';

function Screen (props) {

    const contents = props.userString;
    
    return (
    <div id="screen">

        <text>
            {contents}
        </text>

    </div>
    );
}

export default Screen;
import React from 'react';

const Secret = (props) => {
    return (
        <div>
            <h1>This was redirected from {props.location.pathname} </h1>
            Hoho Secret
        </div>
    );
}

export default Secret;

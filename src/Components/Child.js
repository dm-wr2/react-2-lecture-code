import React from 'react';

const Child = props => {
    return (
        <div>
            <p>My name is {props.myName} and my favorite number is {props.faveNum}</p>
            <button onClick={props.nameFn}>Change Name</button>
        </div>
    )
}

export default Child; 

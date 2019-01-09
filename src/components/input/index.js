import React from 'react';

const Input = (props) => {

    let sendValue = (e) => {
        props.changed();
    }
    return (
        <input
        name = "input"
        onChange = {()=> sendValue()}
         />
    )
}

export default Input;
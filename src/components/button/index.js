import React from 'react';

const Button = (props) => {

  return (
    <button
      onClick={() => props.clicked} >
      {props.text}
    </button>
  )
}

export default Button;
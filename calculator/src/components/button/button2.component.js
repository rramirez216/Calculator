import React from 'react'

import './button.style.css'

export const Button2 = props => (
  <button className='button' onClick={() => props.handleOperatorButton(props.mathSign)}>
    {props.mathSign}
  </button>
)
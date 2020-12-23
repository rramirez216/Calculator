import React from 'react'

import './button.style.css'

export const Button = props => (
  
    props.buttonNumber.number === 0 ?
      <button className='zero' type='button'>{props.buttonNumber.number}</button>
    : <button className='button' type='button'>{props.buttonNumber.number}</button>
)
  
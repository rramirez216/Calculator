import React from 'react'
import './display.styles.css'

export const Display = props => (
  <div className='display' style={{fontSize: props.font}}>
    <p>{props.currentNumber}</p>
  </div>
)
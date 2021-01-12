import React from 'react'

import './numpad.styles.css'
import { Button } from '../button/button.component'

export const Numpad = props => (
  
  <div className='numbers-layout'>
    {props.numbers.map(value => (
      <Button 
        key={value.id} 
        buttonNumber={value}
        handleNumber={props.handleNumber}
      />
      ))}
  </div>
)
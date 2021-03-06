import React from 'react'
import { Button } from '../button/button.component'
import './numberpad.style.css'

export const NumberPad = props => (
  <div className= 'numpad'>
    {props.allButtons.map((value, index) => (
      <Button 
        key={value.id}
        buttonValue={value}
        handleClearButton={ props.handleClearButton }
        handleEqual={ props.handleEqual }
        handleNumber={ props.handleNumber }
        handleOperatorButton={ props.handleOperatorButton }
        mouseDown={ props.mouseDown }
        mouseUp={ props.mouseUp }
      />
      ))}
  </div>
)
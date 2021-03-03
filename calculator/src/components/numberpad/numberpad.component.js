import React from 'react'
import { Button } from '../button/button.component'

export const NumberPad = props => (
  <div>
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
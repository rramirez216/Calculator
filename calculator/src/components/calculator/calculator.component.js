import React from 'react'

import './calculator.styles.css'
import { Display } from '../display/display.component'
import { NumberPad } from '../numberpad/numberpad.component'

export const Calculator = props => (
  <main className='calculator-layout'>
    <Display
      currentNumber={ props.currentNumber }
    />
    <img 
      src={props.calculator}
      alt="calculator" className="retro"
    />
    {/* <img src={props.test.pic} alt="button" onMouseDown={props.test.down}
    onMouseUp={props.test.up}/> */}
    <NumberPad
      handleClearButton={ props.handleClearButton }
      handleEqual={ props.handleEqual }
      handleNumber={ props.handleNumber }
      handleOperatorButton={ props.handleOperatorButton }
      allButtons={ props.allButtons }
      mouseDown={ props.mouseDown }
      mouseUp={ props.mouseUp }
    />
  </main>
)
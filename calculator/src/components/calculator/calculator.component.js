import React from 'react'

import './calculator.styles.css'
import { Display } from '../display/display.component'
import { Numpad } from '../numpad/numpad.component'
import { Clear } from '../clear-button/clear-button.component'
import { Equal } from '../equals/equal.component'
import { Operators } from '../math-operators/math-operators.component'

export const Calculator = props => (
  <main className='calculator-layout'>
    <Display
      currentNumber={props.currentNumber}
    />

    <Clear

    />

    <Numpad
      numbers={props.buttonNumbers}
    />

    <Operators
      operators={props.operators}
    />

    <Equal 

    />
  </main>
)
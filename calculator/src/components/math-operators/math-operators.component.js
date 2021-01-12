import React from 'react'

import './math-operators.style.css'
import { Button2 } from '../button/button2.component'

export const Operators = props => (
  <div className='operators'>
    {props.operators.map((value, index) => (
      <Button2 key={index} mathSign={value} handleOperatorButton={props.handleOperatorButton}/>
    ))}
    
  </div>
)
import React from 'react'

import './button.style.css'

export const Button = props => {
  if(props.buttonValue.type === 'number') {
    return  <img 
              src={props.buttonValue.pic} 
              alt='number button'
              className= 'button'
              onClick={() => props.handleNumber(props.buttonValue.button)} 
              onMouseDown={() => props.mouseDown(props.buttonValue.button)}
              onMouseUp={() => props.mouseUp(props.buttonValue.button)}
            />
  } else if(props.buttonValue.type === 'operator') {
    return  <img 
              src={props.buttonValue.pic} 
              alt='operator button' 
              className= 'button'
              onClick={() => props.handleOperatorButton(props.buttonValue.button)} 
              onMouseDown={() => props.mouseDown(props.buttonValue.button)}
              onMouseUp={() => props.mouseUp(props.buttonValue.button)}
            />
  } else {
    return  <img 
              src={props.buttonValue.pic} 
              alt='other button'
              className= 'button'
              onClick={props.buttonValue.buttonFunction} 
              onMouseDown={() => props.mouseDown(props.buttonValue.button)}
              onMouseUp={() => props.mouseUp(props.buttonValue.button)}
            />
  }
}
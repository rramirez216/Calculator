import React, { Component } from 'react'
import './App.css';
import { Calculator } from './components/calculator/calculator.component'


class App extends Component {
  constructor() {
    super()
    this.state = {
      displayNumber: '0',
      previousInput: null,
      numberArray: [],
      operators: []
    }
  }
  
  handleNumber = (num) => {
    let { numberArray } = this.state
    numberArray.push(num)
    this.setState({ displayNumber: numberArray.join('') })
  }

  
  handleOperatorButton = (sign) => {
    let { displayNumber } = this.state
    let { numberArray } = this.state
    let { operators } = this.state
    let numbers = [...displayNumber]

    operators.push(sign)
    console.log(numbers.join(''));
    console.log(numberArray);
    this.setState({ previousInput: numbers.join(''), numberArray: [], operators: operators })
    console.log(numberArray)
  }
  
  handleEqual = () => {
    let { previousInput } = this.state
    let { numberArray } = this.state
    let { operators } = this.state
    let calculation = 0
    
    if(operators.includes('+')) {
        calculation = Number(previousInput) + Number(numberArray.join(''))
        this.setState({displayNumber: calculation})
      } else if(operators.includes('÷')) {
        calculation = Number(previousInput) / Number(numberArray.join(''))
        this.setState({displayNumber: calculation})
      } else if(operators.includes('x')) {
        calculation = Number(previousInput) * Number(numberArray.join(''))
        this.setState({displayNumber: calculation})
      } else if(operators.includes('-')) {
        calculation = Number(previousInput) - Number(numberArray.join(''))
        this.setState({displayNumber: calculation})
      }
      console.log(calculation);
    }

    handleClearButton = () => {
      this.setState({ displayNumber: '0', numberArray: [], operators: [] })
    }
    
  render() {
    const numbers = [{number: 7, id: 7}, {number: 8, id: 8}, {number: 9, id: 9}, {number: 4, id: 4}, {number: 5, id: 5}, {number: 6, id: 6}, {number: 1, id: 1}, {number: 2, id: 2}, {number: 3, id: 3}, {number: 0, id: 0}, {number: '.', id: 10}]
    const mathOperators = ['÷', 'x', '-', '+']
    return(
      <div className='App'>
        <Calculator
          currentNumber={ this.state.displayNumber }
          buttonNumbers= { numbers }
          operators={ mathOperators }
          handleNumber={ this.handleNumber }
          handleClearButton={ this.handleClearButton }
          handleOperatorButton={ this.handleOperatorButton }
          handleEqual={ this.handleEqual }
        />
      </div>
    )
  }
}

export default App;
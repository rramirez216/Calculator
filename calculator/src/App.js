import React, { Component } from 'react'
import './App.css';
import Zero1 from './Images/zero00.png'
import Zero2 from './Images/zero01.png'
import One1 from './Images/one00.png'
import One2 from './Images/one01.png'
import Two1 from './Images/two00.png'
import Two2 from './Images/two01.png'
import Three1 from './Images/three00.png'
import Three2 from './Images/three01.png'
import Four1 from './Images/four00.png'
import Four2 from './Images/four01.png'
import Five1 from './Images/five00.png'
import Five2 from './Images/five01.png'
import Six1 from './Images/six00.png'
import Six2 from './Images/six01.png'
import Seven1 from './Images/seven00.png'
import Seven2 from './Images/seven01.png'
import Eight1 from './Images/eight00.png'
import Eight2 from './Images/eight01.png'
import Nine1 from './Images/nine00.png'
import Nine2 from './Images/nine01.png'
import Divide1 from './Images/divide1.png'
import Divide2 from './Images/divide2.png'
import Multiply1 from './Images/multiply00.png'
import Multiply2 from './Images/multiply01.png'
import Subtract1 from './Images/minus00.png'
import Subtract2 from './Images/minus01.png'
import Add1 from './Images/plus00.png'
import Add2 from './Images/plus01.png'
import Equal1 from './Images/equal00.png'
import Equal2 from './Images/equal01.png'
import Clear1 from './Images/clear00.png'
import Clear2 from './Images/clear01.png'
import Dot1 from './Images/dot00.png'
import Dot2 from './Images/dot01.png'
import RetroCalculator from './Images/calculator.png'
import { Calculator } from './components/calculator/calculator.component'


class App extends Component {
  constructor() {
    super()
    this.state = {
      zero: Zero1,
      one: One1,
      two: Two1,
      three: Three1,
      four: Four1,
      five: Five1,
      six: Six1,
      seven: Seven1,
      eight: Eight1,
      nine: Nine1,
      divide: Divide1,
      multiply: Multiply1,
      subtract: Subtract1,
      add: Add1,
      equal: Equal1,
      clear: Clear1,
      dot: Dot1,
      displayNumber: '0',
      previousInput: null,
      numberArray: [],
      operators: [],
      displayFontSize: '5rem'
    }
  }
  
  handleNumber = (num) => {
    let { numberArray } = this.state
    let decimal = 0
    let decimalIndex;
    let filteredNumArr;
    numberArray.push(num)
    numberArray.map(num => {
      if(num === ".") {
        decimal++
        decimalIndex = numberArray.indexOf(".")
        return num
      } else {
        return num 
      }})
    if(decimal > 1 ) {
      filteredNumArr = numberArray.filter((num, index) => num !== '.' || (num === numberArray[decimalIndex] && index === decimalIndex))
      this.setState({ displayNumber: filteredNumArr.join('') })
    } else {
        this.setState({ displayNumber: numberArray.join('') })
    }
    this.displayLength()
  }

  displayLength = () => {
    let {displayNumber} = this.state
    if(displayNumber.length > 10 && displayNumber.length < 14) {
      this.setState({ displayFontSize: '4rem' })
    } else if(displayNumber.length > 13 && displayNumber.length < 18) {
      this.setState({ displayFontSize: '3rem' })
    } else if(displayNumber.length > 17) {
      this.setState({ displayFontSize: '2rem' })
    } else {
      this.setState({ displayFontSize: '5rem' })
    }
  }

  calculationLength = (calculation) => {
    if(calculation.length > 10 && calculation.length < 14) {
      this.setState({ displayFontSize: '4rem' })
    } else if(calculation.length > 13 && calculation.length < 18) {
      this.setState({ displayFontSize: '3rem' })
    } else if(calculation.length > 17) {
      this.setState({ displayFontSize: '2rem' })
    } else {
      this.setState({ displayFontSize: '5rem' })
    }
  }

  
  handleOperatorButton = (sign) => {
    let { displayNumber } = this.state
    let { operators } = this.state
    let numbers = displayNumber

    operators.push(sign)
    this.setState({ previousInput: numbers, numberArray: [], operators: operators })
  }
  
  handleEqual = () => {
    let { previousInput } = this.state
    let { numberArray } = this.state
    let { operators } = this.state
    let calculation = 0
    let calcString = '';
    
    if(operators.includes('+')) {
        calculation = Number(previousInput) + Number(numberArray.join(''))
        calcString = calculation.toString()
        this.calculationLength(calcString)
        this.setState({displayNumber: calculation, numberArray: calculation, operators: []})
      } else if(operators.includes('÷')) {
        calculation = Number(previousInput) / Number(numberArray.join(''))
        calcString = calculation.toString()
        this.calculationLength(calcString)
        this.setState({displayNumber: calculation, numberArray: calculation, operators: []})
      } else if(operators.includes('x')) {
        calculation = Number(previousInput) * Number(numberArray.join(''))
        calcString = calculation.toString()
        this.calculationLength(calcString)
        this.setState({displayNumber: calculation, numberArray: calculation, operators: []})
      } else if(operators.includes('-')) {
        calculation = Number(previousInput) - Number(numberArray.join(''))
        calcString = calculation.toString()
        this.calculationLength(calcString)
        this.setState({displayNumber: calculation, numberArray: calculation, operators: []})
      }
    }

    handleClearButton = () => {
      this.setState({ displayNumber: '0', numberArray: [], operators: [], displayFontSize: '5rem' })
    }

    handleImageMouseDown = (button) => {
      return  button === 'clear' ? this.setState({ clear: Clear2 })
            : button === '÷' ? this.setState({ divide: Divide2 })
            : button === 7 ? this.setState({ seven: Seven2 })
            : button === 8 ? this.setState({ eight: Eight2 })
            : button === 9 ? this.setState({ nine: Nine2 })
            : button === 'x' ? this.setState({ multiply: Multiply2 })
            : button === 4 ? this.setState({ four: Four2 })
            : button === 5 ? this.setState({ five: Five2 })
            : button === 6 ? this.setState({ six: Six2 })
            : button === '-' ? this.setState({ subtract: Subtract2 })
            : button === 1 ? this.setState({ one: One2 })
            : button === 2 ? this.setState({ two: Two2 })
            : button === 3 ? this.setState({ three: Three2 })
            : button === '+' ? this.setState({ add: Add2 })
            : button === 0 ? this.setState({ zero: Zero2 })
            : button === '.' ? this.setState({ dot: Dot2 })
            : this.setState({ equal: Equal2 })
    }
  
    handleImageMouseUp = (button) => {
      return  button === 'clear' ? this.setState({ clear: Clear1 })
            : button === '÷' ? this.setState({ divide: Divide1 })
            : button === 7 ? this.setState({ seven: Seven1 })
            : button === 8 ? this.setState({ eight: Eight1 })
            : button === 9 ? this.setState({ nine: Nine1 })
            : button === 'x' ? this.setState({ multiply: Multiply1 })
            : button === 4 ? this.setState({ four: Four1 })
            : button === 5 ? this.setState({ five: Five1 })
            : button === 6 ? this.setState({ six: Six1 })
            : button === '-' ? this.setState({ subtract: Subtract1 })
            : button === 1 ? this.setState({ one: One1 })
            : button === 2 ? this.setState({ two: Two1 })
            : button === 3 ? this.setState({ three: Three1 })
            : button === '+' ? this.setState({ add: Add1 })
            : button === 0 ? this.setState({ zero: Zero1 })
            : button === '.' ? this.setState({ dot: Dot1 })
            : this.setState({ equal: Equal1 })
    }
    
  render() {
    const allButtons = [
      {id: 0, button: "clear", pic: this.state.clear, buttonFunction: this.handleClearButton},
      {id: 1, button: '÷', pic: this.state.divide, type: 'operator'},
      {id: 2, button: 7, pic: this.state.seven, type: 'number'},
      {id: 3, button: 8, pic: this.state.eight, type: 'number'},
      {id: 4, button: 9, pic: this.state.nine, type: 'number'},
      {id: 5, button: 'x', pic: this.state.multiply, type: 'operator'},
      {id: 6, button: 4, pic: this.state.four, type: 'number'},
      {id: 7, button: 5, pic: this.state.five, type: 'number'},
      {id: 8, button: 6, pic: this.state.six, type: 'number'},
      {id: 9, button: '-', pic: this.state.subtract, type: 'operator'},
      {id: 10, button: 1, pic: this.state.one, type: 'number'},
      {id: 11, button: 2, pic: this.state.two, type: 'number'},
      {id: 12, button: 3, pic: this.state.three, type: 'number'},
      {id: 13, button: '+', pic: this.state.add, type: 'operator'},
      {id: 14, button: 0, pic: this.state.zero, type: 'number'},
      {id: 15, button: '.', pic: this.state.dot, type: 'number'},
      {id: 16, button: 'equal', pic: this.state.equal, buttonFunction: this.handleEqual}
    ]
    
    return(
      <div className='App'>
        <Calculator
          currentNumber={ this.state.displayNumber }
          handleNumber={ this.handleNumber }
          handleOperatorButton={ this.handleOperatorButton }
          calculator={ RetroCalculator }
          allButtons={ allButtons }
          mouseDown={ this.handleImageMouseDown }
          mouseUp= { this.handleImageMouseUp }
          font= { this.state.displayFontSize }
        />
      </div>
    )
  }
}

export default App
import React, { Component } from 'react'
import './App.css';
import { Calculator } from './components/calculator/calculator.component'


class App extends Component {
  constructor() {
    super()
    this.state = {
      displayNumber: 0
    }
  }

  render() {
    const numbers = [{number: 7, id: 1}, {number: 8, id: 2}, {number: 9, id: 3}, {number: 4, id: 4}, {number: 5, id: 5}, {number: 6, id: 6}, {number: 1, id: 7}, {number: 2, id: 8}, {number: 3, id: 9}, {number: 0, id: 10}, {number: '.', id: 11}]
    const mathOperators = ['÷', 'x', '-', '+']
    return(
      <div className='App'>
        <Calculator
          currentNumber={this.state.displayNumber}
          buttonNumbers= {numbers}
          operators={mathOperators}
        />
      </div>
    )
  }
}

export default App;
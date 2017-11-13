import React from 'react';

//can't find bug
class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      result: 0,
      num1: '',
      num2: ''
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(event) {
    const num1 = e.target.value ? parseInt(event.target.value);
    this.setState({num1});
  }

  setNum2(event) {
    const num2 = e.target.value ? parseInt(event.target.value);
    this.setState({num2});
  }

  add(event) {
    event.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(event) {
    event.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  multiply(event) {
    event.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(event) {
    event.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear(event) {
    event.preventDefault();
    this.setState({result: 0, num1: '', num2: ''});
  }

  render() {
    const {result, num1, num2} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} value={num1}>
        <input onChange={this.setNum2} value={num2}>
        <button onClick={this.clear}>Clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;

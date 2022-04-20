import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const btnFunc = btn.target.textContent;
    this.setState((event) => calculate(event, btnFunc));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="box-container">
        <div className="result-screen">
          { total}
          { operation}
          { next }
        </div>
        <button onClick={this.handleClick} type="button" className="btn">AC</button>
        <button onClick={this.handleClick} type="button" className="btn">+/-</button>
        <button onClick={this.handleClick} type="button" className="btn">%</button>
        <button onClick={this.handleClick} type="button" className="btn hover-btn">÷</button>
        <button onClick={this.handleClick} type="button" className="btn">7</button>
        <button onClick={this.handleClick} type="button" className="btn">8</button>
        <button onClick={this.handleClick} type="button" className="btn">9</button>
        <button onClick={this.handleClick} type="button" className="btn hover-btn">x</button>
        <button onClick={this.handleClick} type="button" className="btn">4</button>
        <button onClick={this.handleClick} type="button" className="btn">5</button>
        <button onClick={this.handleClick} type="button" className="btn">6</button>
        <button onClick={this.handleClick} type="button" className="btn hover-btn">-</button>
        <button onClick={this.handleClick} type="button" className="btn">1</button>
        <button onClick={this.handleClick} type="button" className="btn">2</button>
        <button onClick={this.handleClick} type="button" className="btn">3</button>
        <button onClick={this.handleClick} type="button" className="btn hover-btn">+</button>
        <button onClick={this.handleClick} type="button" className="btn screen-num">0</button>
        <button onClick={this.handleClick} type="button" className="btn">.</button>
        <button onClick={this.handleClick} type="button" className="btn hover-btn">=</button>
      </div>
    );
  }
}

export default Calculator;

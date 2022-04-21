import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const stateObject = {
    total: 0,
    next: null,
    operation: null,
  };

  const [properties, setProperties] = useState(stateObject);

  const handleClick = (btn) => {
    const btnFunc = btn.target.textContent;
    const newProps = { ...properties };
    setProperties(calculate(newProps, btnFunc));
  };

  return (
    <>
      <div className="box-container">
        <div className="result-screen">
          { properties.total}
          { properties.operation}
          { properties.next }
        </div>
        <button onClick={handleClick} type="button" className="btn">AC</button>
        <button onClick={handleClick} type="button" className="btn">+/-</button>
        <button onClick={handleClick} type="button" className="btn">%</button>
        <button onClick={handleClick} type="button" className="btn hover-btn">÷</button>
        <button onClick={handleClick} type="button" className="btn">7</button>
        <button onClick={handleClick} type="button" className="btn">8</button>
        <button onClick={handleClick} type="button" className="btn">9</button>
        <button onClick={handleClick} type="button" className="btn hover-btn">x</button>
        <button onClick={handleClick} type="button" className="btn">4</button>
        <button onClick={handleClick} type="button" className="btn">5</button>
        <button onClick={handleClick} type="button" className="btn">6</button>
        <button onClick={handleClick} type="button" className="btn hover-btn">-</button>
        <button onClick={handleClick} type="button" className="btn">1</button>
        <button onClick={handleClick} type="button" className="btn">2</button>
        <button onClick={handleClick} type="button" className="btn">3</button>
        <button onClick={handleClick} type="button" className="btn hover-btn">+</button>
        <button onClick={handleClick} type="button" className="btn screen-num">0</button>
        <button onClick={handleClick} type="button" className="btn">.</button>
        <button onClick={handleClick} type="button" className="btn hover-btn">=</button>
      </div>
    </>
  );
};

export default Calculator;

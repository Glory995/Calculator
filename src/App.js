import './App.css';

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClearClick = () => {
    setInput('');
  };

  const handleEqualClick = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClearOnce = () => {
    const newInput = input.slice(0, -1);
    setInput(newInput);
  };

  return (
    <div className='holding'>
      <input type="text" value={input} readOnly />
      <div className='holdeachline'>
        <div className='eachline'>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className='eachline'>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className='eachline'>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className='eachline'>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleEqualClick}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>

      <div className='buttons'>
        <button className='clear' onClick={handleClearClick}>Clear</button>
        <button className='clear' onClick={handleClearOnce}>AC</button>
      </div>

    </div>
  );
};

export default Calculator;

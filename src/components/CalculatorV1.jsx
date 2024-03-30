import React, { useState } from 'react';
import './tool.css';

const CalculatorV1 = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculate();
    } else if (result !== '') {
      setInput(result + value);
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div class='calculator-container'>
      <h2>Calculator</h2>
      <input
        class='calculator-input'
        type='text'
        value={result !== '' ? result : input}
        readOnly
      />
      <br />
      <button class='calculator-button' onClick={() => handleClick('1')}>
        1
      </button>
      <button class='calculator-button' onClick={() => handleClick('2')}>
        2
      </button>
      <button class='calculator-button' onClick={() => handleClick('3')}>
        3
      </button>
      <button class='calculator-button' onClick={() => handleClick('+')}>
        +
      </button>
      <br />
      <button class='calculator-button' onClick={() => handleClick('4')}>
        4
      </button>
      <button class='calculator-button' onClick={() => handleClick('5')}>
        5
      </button>
      <button class='calculator-button' onClick={() => handleClick('6')}>
        6
      </button>
      <button class='calculator-button' onClick={() => handleClick('-')}>
        -
      </button>
      <br />
      <button class='calculator-button' onClick={() => handleClick('7')}>
        7
      </button>
      <button class='calculator-button' onClick={() => handleClick('8')}>
        8
      </button>
      <button class='calculator-button' onClick={() => handleClick('9')}>
        9
      </button>
      <button class='calculator-button' onClick={() => handleClick('*')}>
        *
      </button>
      <br />
      <button class='calculator-button' onClick={() => handleClick('0')}>
        0
      </button>
      <button class='calculator-button' onClick={() => handleClick('.')}>
        .
      </button>
      <button class='calculator-button' onClick={() => handleClick('=')}>
        =
      </button>
      <button class='calculator-button' onClick={() => clear()}>
        C
      </button>
    </div>
  );
};

export default CalculatorV1;

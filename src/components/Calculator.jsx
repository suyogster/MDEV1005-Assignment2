import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const onClick = (button) => {
    if (button === '=') {
      calculate();
    } else if (button === 'C') {
      reset();
    } else if (button === 'CE') {
      backspace();
    } else {
      setResult((prevResult) => prevResult + button);
    }
  };

  const calculate = () => {
    let checkResult = '';
    if (result.includes('--')) {
      checkResult = result.replace('--', '+');
    } else {
      checkResult = result;
    }

    try {
      setResult((eval(checkResult) || '') + '');
    } catch (e) {
      setResult('error');
    }
  };

  const reset = () => {
    setResult('');
  };

  const backspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  return (
    <div>
      <div className='calculator-body'>
        <div className='result'>
          <p>{result}</p>
        </div>
        <div className='button'>
          <button name='(' onClick={(e) => onClick(e.target.name)}>
            (
          </button>
          <button name='CE' onClick={(e) => onClick(e.target.name)}>
            CE
          </button>
          <button name=')' onClick={(e) => onClick(e.target.name)}>
            )
          </button>
          <button name='C' onClick={(e) => onClick(e.target.name)}>
            C
          </button>
          <br />

          <button name='1' onClick={(e) => onClick(e.target.name)}>
            1
          </button>
          <button name='2' onClick={(e) => onClick(e.target.name)}>
            2
          </button>
          <button name='3' onClick={(e) => onClick(e.target.name)}>
            3
          </button>
          <button name='+' onClick={(e) => onClick(e.target.name)}>
            +
          </button>
          <br />

          <button name='4' onClick={(e) => onClick(e.target.name)}>
            4
          </button>
          <button name='5' onClick={(e) => onClick(e.target.name)}>
            5
          </button>
          <button name='6' onClick={(e) => onClick(e.target.name)}>
            6
          </button>
          <button name='-' onClick={(e) => onClick(e.target.name)}>
            -
          </button>
          <br />

          <button name='7' onClick={(e) => onClick(e.target.name)}>
            7
          </button>
          <button name='8' onClick={(e) => onClick(e.target.name)}>
            8
          </button>
          <button name='9' onClick={(e) => onClick(e.target.name)}>
            9
          </button>
          <button name='*' onClick={(e) => onClick(e.target.name)}>
            x
          </button>
          <br />

          <button name='.' onClick={(e) => onClick(e.target.name)}>
            .
          </button>
          <button name='0' onClick={(e) => onClick(e.target.name)}>
            0
          </button>
          <button name='=' onClick={(e) => onClick(e.target.name)}>
            =
          </button>
          <button name='/' onClick={(e) => onClick(e.target.name)}>
            ÷
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleNumChange = (e, num) => {
    const value = e.target.value;
    if (num === 1) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      switch (operation) {
        case '+':
          setResult(number1 + number2);
          break;
        case '-':
          setResult(number1 - number2);
          break;
        case '*':
          setResult(number1 * number2);
          break;
        case '/':
          setResult(number1 / number2);
          break;
        default:
          setResult('');
      }
    } else {
      setResult('');
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <div>
        <input type="number" value={num1} onChange={(e) => handleNumChange(e, 1)} />
        <select value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={(e) => handleNumChange(e, 2)} />
        <button onClick={calculateResult}>=</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
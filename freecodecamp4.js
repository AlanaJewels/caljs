// src/Calculator.js
import React, { useState } from "react";
import "./freecode.css"; // Optional CSS for styling

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleClick = (value) => {
    if (waitingForSecondOperand) {
      setDisplay(value);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const handleOperatorClick = (operator) => {
    if (firstOperand == null) {
      setFirstOperand(parseFloat(display));
      setOperator(operator);
      setWaitingForSecondOperand(true);
    } else {
      const currentValue = parseFloat(display);
      if (operator === "=") {
        const result = operate(firstOperand, currentValue, operator);
        setDisplay(result);
        setFirstOperand(null);
        setOperator(null);
      } else {
        setOperator(operator);
        setFirstOperand(currentValue);
        setWaitingForSecondOperand(true);
      }
    }
  };

  const operate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        if (secondOperand === 0) return "Error";
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="seven" onClick={() => handleClick("7")}>7</button>
      <button id="eight" onClick={() => handleClick("8")}>8</button>
      <button id="nine" onClick={() => handleClick("9")}>9</button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>/</button>
      <button id="four" onClick={() => handleClick("4")}>4</button>
      <button id="five" onClick={() => handleClick("5")}>5</button>
      <button id="six" onClick={() => handleClick("6")}>6</button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>*</button>
      <button id="one" onClick={() => handleClick("1")}>1</button>
      <button id="two" onClick={() => handleClick("2")}>2</button>
      <button id="three" onClick={() => handleClick("3")}>3</button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>-</button>
      <button id="zero" onClick={() => handleClick("0")}>0</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
      <button id="equals" onClick={() => handleOperatorClick("=")}>=</button>
      <button id="add" onClick={() => handleOperatorClick("+")}>+</button>
    </div>
  );
}

export default Calculator;

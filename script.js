const display = document.querySelector(".display");
const zeroButton = document.querySelector(".zero");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const clearButton = document.querySelector(".clear");
const signButton = document.querySelector(".sign");
const decimalButton = document.querySelector(".decimal");
const divisionButton = document.querySelector(".divide");
const multiplicationButton = document.querySelector(".multiply");
const subtractionButton = document.querySelector(".subtract");
const additionButton = document.querySelector(".add");
const equalsButton = document.querySelector(".equals");

let firstNumber = "";
let currentOperator = null;
let displayValue = display.textContent;
let displayIsStale = true;
const maxDisplayLength = 9;

zeroButton.addEventListener("click", digitInput);
oneButton.addEventListener("click", digitInput);
twoButton.addEventListener("click", digitInput);
threeButton.addEventListener("click", digitInput);
fourButton.addEventListener("click", digitInput);
fiveButton.addEventListener("click", digitInput);
sixButton.addEventListener("click", digitInput);
sevenButton.addEventListener("click", digitInput);
eightButton.addEventListener("click", digitInput);
nineButton.addEventListener("click", digitInput);
clearButton.addEventListener("click", clear);
signButton.addEventListener("click", changeSign);
decimalButton.addEventListener("click", decimal);
divisionButton.addEventListener("click", division);
multiplicationButton.addEventListener("click", multiplication);
subtractionButton.addEventListener("click", subtraction);
additionButton.addEventListener("click", addition);
equalsButton.addEventListener("click", equals);

// If the display is stale, entering a digit will clear the current display.
function digitInput() {
  if (displayIsStale) {
    displayValue = this.textContent;
    display.textContent = this.textContent;
    displayIsStale = false;
  }
  else if (displayValue.length < maxDisplayLength) {
    displayValue += this.textContent;
    display.textContent = displayValue;
  }
}

function clear() {
  firstNumber = "";
  currentOperator = null;
  displayValue = "0";
  display.textContent = displayValue;
  displayIsStale = true;
}

function changeSign() {
  let value = parseInt(displayValue);
  value *= -1;
  displayValue = value.toString();
  display.textContent = displayValue;
}

function decimal() {
  if (hasDecimal(displayValue)) return;
  displayValue += ".";
  display.textContent = displayValue;
  displayIsStale = false;
}

function hasDecimal(string) {
  return string.indexOf('.') !== -1;
}

function division() {
  if (firstNumber === "") {
    storeDisplay(divide);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function multiplication() {
  if (firstNumber === "") {
    storeDisplay(multiply);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function subtraction() {
  if (firstNumber === "") {
    storeDisplay(subtract);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function addition() {
  if (firstNumber === "") {
    storeDisplay(add);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function equals() {
  if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function storeDisplay(operator) {
  firstNumber = displayValue;
  currentOperator = operator;
  displayIsStale = true;
}

function calculateResult() {
  return operate(firstNumber, displayValue, currentOperator);
}

function updateDisplay(result) {
  // Convert large numbers to scientific notation to avoid overflow.
  if (result >= 1000000000) {
    result = result.toExponential(6);
  }
  // Round long decimals to avoid overflow.
  else if (result.toString().length > maxDisplayLength) {
    const decimalLength = (maxDisplayLength - Math.round(result).toString().length)
    result = result.toFixed(decimalLength);
  }
  displayValue = result;
  firstNumber = result;
  display.textContent = result;
  displayIsStale = true;
}

function operate(num1, num2, operation) {
  return operation(num1, num2);
}

function divide(a, b) {
  if (b === 0) { throw new Error("Division by zero"); }
  else return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

module.exports = {
  add, subtract, multiply, divide, operate
}
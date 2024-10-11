let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let displayValue = "0";
let displayIsStale = true;

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
divisionButton.addEventListener("click", division);
multiplicationButton.addEventListener("click", multiplication);
subtractionButton.addEventListener("click", subtraction);
additionButton.addEventListener("click", addition);
equalsButton.addEventListener("click", equals);

function digitInput() {
  if (displayIsStale) {
    displayValue = this.textContent;
    display.textContent = this.textContent;
    displayIsStale = false;
  }
  else if (displayValue.length < 9) {
    displayValue += this.textContent;
    display.textContent = displayValue;
  }
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
  displayValue = "0";
  display.textContent = displayValue;
  displayIsStale = true;
}

function division() {
  if (firstNumber === "") {
    store(divide);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function multiplication() {
  if (firstNumber === "") {
    store(multiply);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function subtraction() {
  if (firstNumber === "") {
    store(subtract);
  }
  else if (currentOperator !== null) {
    const result = calculateResult();
    updateDisplay(result);
  }
}

function addition() {
  if (firstNumber === "") {
    store(add);
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

function store(operator) {
  firstNumber = displayValue;
  currentOperator = operator;
  displayIsStale = true;
}

function calculateResult() {
  return operate(firstNumber, displayValue, currentOperator);
}

function updateDisplay(result) {
  displayValue = result;
  firstNumber = result;
  display.textContent = result;
  displayIsStale = true;
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

function operate(num1, num2, operation) {
  return operation(num1, num2);
}

module.exports = {
  add, subtract, multiply, divide, operate
}
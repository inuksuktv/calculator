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

zeroButton.addEventListener("click", digit);
oneButton.addEventListener("click", digit);
twoButton.addEventListener("click", digit);
threeButton.addEventListener("click", digit);
fourButton.addEventListener("click", digit);
fiveButton.addEventListener("click", digit);
sixButton.addEventListener("click", digit);
sevenButton.addEventListener("click", digit);
eightButton.addEventListener("click", digit);
nineButton.addEventListener("click", digit);
clearButton.addEventListener("click", clear);
divisionButton.addEventListener("click", division);
multiplicationButton.addEventListener("click", multiplication);
subtractionButton.addEventListener("click", subtraction);
additionButton.addEventListener("click", addition);
equalsButton.addEventListener("click", equals);

function digit() {
    if (displayIsStale) {
        displayValue = this.textContent;
        display.textContent = displayValue;
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
        firstNumber = displayValue;
        currentOperator = divide;
        displayIsStale = true;
    }
}

function multiplication() {
    if (firstNumber === "") {
        firstNumber = displayValue;
        currentOperator = multiply;
        displayIsStale = true;
    }
}

function subtraction() {
    if (firstNumber === "") {
        firstNumber = displayValue;
        currentOperator = subtract;
        displayIsStale = true;
    }
}

function addition() {
    if (firstNumber === "") {
        firstNumber = displayValue;
        currentOperator = add;
        displayIsStale = true;
    }
}

function equals() {
    if (firstNumber !== "" && currentOperator !== null) {
        secondNumber = displayValue;
        const result = operate(firstNumber, secondNumber, currentOperator);
        displayValue = result;
        display.textContent = displayValue;
        displayIsStale = true;
    }
}

function add(a, b) {
    // This is concatening the inputs rather than performing addition.
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) { throw new Error("Division by zero"); }
    else return a / b;
}

function operate(num1, num2, operation) {
    return operation(num1, num2);
}

module.exports = {
    add, subtract, multiply, divide, operate
}
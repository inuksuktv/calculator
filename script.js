let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let displayValue = "0";

function add(a, b) {
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
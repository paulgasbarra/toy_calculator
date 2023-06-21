const Calculator = require('./calculator.js');

const currentOperand = "";
const previousOperand = "";
const operation = "";

const currentOperandTextElement = document.getElementsByClassName('current-operand')[0];
const previousOperandTextElement = document.getElementsByClassName('previous-operand')[0];
const operationTextElement = document.getElementsByClassName('operation')[0];

const calculator = new Calculator(previousOperand, currentOperand);

const updateDisplay = (currentOperand, previousOperand, operation) => {
  currentOperandTextElement.innerText = currentOperand;
  previousOperandTextElement.innerText = previousOperand;
  operationTextElement.innerText = operation;
};

const numberButtons = document.getElementsByClassName('button digit');
Array.from(numberButtons).forEach((button) => {
  button.addEventListener('click', (event) => {
    calculator.appendNumber(event.target.innerText);
    updateDisplay(calculator.currentOperand, calculator.previousOperand, calculator.operation);
  });
});

const operatorButtons = document.getElementsByClassName('button operator');
Array.from(operatorButtons).forEach((button) => {
  button.addEventListener('click', (event) => {
    calculator.chooseOperation(event.target.innerText);
  });
});

const equalsButton = document.getElementsByClassName('button equals')[0];
equalsButton.addEventListener('click', (event) => {
    calculator.compute();
});

const deleteButton = document.getElementsByClassName('button del')[0];
deleteButton.addEventListener('click', (event) => {
  calculator.clear();
  currentOperandTextElement.innerText = calculator.currentOperand;
});

const clearButton = document.getElementsByClassName('button ac')[0];
clearButton.addEventListener('click', (event) => {
    calculator.clear();
    currentOperandTextElement.innerText = calculator.currentOperand;
});
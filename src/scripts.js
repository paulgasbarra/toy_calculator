const currentOperandTextElement = document.getElementsByClassName('current-operand')[0];
const previousOperandTextElement = document.getElementsByClassName('previous-operand')[0];
const operationTextElement = document.getElementsByClassName('operator')[0];

const calculator = new Calculator("", "");

const updateDisplay = () => {
  currentOperandTextElement.innerText = calculator.currentOperand;
  previousOperandTextElement.innerText = calculator.previousOperand;
  operationTextElement.innerText = calculator.operation;
};

const numberButtons = document.getElementsByClassName('button digit');
Array.from(numberButtons).forEach((button) => {
  button.addEventListener('click', (event) => {
    calculator.appendNumber(event.target.innerText);
    updateDisplay();
  });
});

const operatorButtons = document.getElementsByClassName('button operator');
Array.from(operatorButtons).forEach((button) => {
  button.addEventListener('click', (event) => {
    calculator.chooseOperation(event.target.innerText);
    updateDisplay();
  });
});

const equalsButton = document.getElementsByClassName('button equals')[0];
equalsButton.addEventListener('click', (event) => {
    calculator.compute();
    updateDisplay();
});

const deleteButton = document.getElementsByClassName('button del')[0];
deleteButton.addEventListener('click', (event) => {
  calculator.delete();
  updateDisplay();
});

const clearButton = document.getElementsByClassName('button ac')[0];
clearButton.addEventListener('click', (event) => {
    calculator.clear();
    updateDisplay();
});
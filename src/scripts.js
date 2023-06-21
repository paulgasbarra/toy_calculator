class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation) {

    }

    compute() {

    }
}

const currentOperand = "";
const previousOperand = "";
const operation = "";

const currentOperandTextElement = document.getElementsByClassName('current-operand')[0];
const previousOperandTextElement = document.getElementsByClassName('previous-operand')[0];
const operationTextElement = document.getElementsByClassName('operation')[0];

const calculator = new Calculator(previousOperand, currentOperand);

const numberButtons = document.getElementsByClassName('button digit');
Array.from(numberButtons).forEach((button) => {
  button.addEventListener('click', (event) => {
    calculator.appendNumber(event.target.innerText);
    currentOperandTextElement.innerText = calculator.currentOperand;
  });
});

const operatorButtons = document.getElementsByClassName('button operator');
Array.from(operatorButtons).forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  });
});

const equalsButton = document.getElementsByClassName('button equals')[0];
equalsButton.addEventListener('click', (event) => {
    console.log(event.target.innerText);
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
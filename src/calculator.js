class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.operation = "";
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }

    delete() {
        if (this.currentOperand){
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
        if (!this.currentOperand && this.operation) {
            this.operation = "";
        }
        if (!this.currentOperand && !this.operation && this.previousOperand) {
            this.previousOperand = this.previousOperand.slice(0, -1);
        }
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        if (this.currentOperand === undefined) {
            this.currentOperand = number;
            return;
        }
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation) {
        this.operation = operation;
    }

    compute() {

    }
}

module.exports = Calculator;
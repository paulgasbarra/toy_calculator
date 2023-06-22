class Calculator {
        constructor(previousOperand, currentOperand) {
            this.previousOperand = previousOperand;
            this.currentOperand = currentOperand;
            this.operation = "";
            this.calculated = false;
        }
      
        clear() {
            this.currentOperand = "";
            this.previousOperand = "";
            this.operation = "";
        }
      
        delete() {
          if (this.currentOperand){
              this.currentOperand = this.currentOperand.slice(0, -1);
              return;
          }
          if (this.currentOperand === undefined && this.operation) {
              this.operation = "";
              this.currentOperand = this.previousOperand;
              this.previousOperand = "";
              return;
          }
          if (!this.currentOperand && !this.operation && this.previousOperand) {
              this.previousOperand = this.previousOperand.slice(0, -1);
          }
        }
      
        appendNumber(number) {
            if (this.calculated === true) {
                this.currentOperand = "";
                this.previousOperand = "";
                this.operation = "";
                this.calculated = false;
            }
            if (number === "." && this.currentOperand.includes(".")) return;
            if (this.currentOperand === undefined) {
                this.currentOperand = number;
            } else {
                this.currentOperand = this.currentOperand + number;
            }
       
        }
      
        chooseOperation(operation) {
            if (this.previousOperand && this.currentOperand) {
                this.compute();
                this.calculated = false;
            };
            this.previousOperand = this.currentOperand;
            this.currentOperand = ""; 
            this.operation = operation;  
        }
      
        compute() { 
            let previousToFloat = parseFloat(this.previousOperand);
            let currentToFloat = parseFloat(this.currentOperand);
            let operation = this.operation;
            if (isNaN(previousToFloat) || isNaN(currentToFloat)){
                this.operation = "";
                this.calculated = true;
                return;
            };
            if (operation === "+") {
                this.currentOperand = this.add(previousToFloat, currentToFloat);
            }
            if (operation === "-") {
                this.currentOperand = this.subtract(previousToFloat, currentToFloat);
            }
            if (operation === "x") {
                this.currentOperand = this.multiply(previousToFloat, currentToFloat);
            }
            if (operation === "/") {
                this.currentOperand = this.divide(previousToFloat, currentToFloat);
            }
            this.previousOperand = "";
            this.operation = "";
            this.calculated = true;
        }
      
        add(a, b) {
            return (a + b).toString();
        }
      
        subtract(a, b) {
            return (a - b).toString();
        }
      
        multiply(a, b) {
            return (a * b).toString();
        }
      
        divide(a, b) {
            return (a / b).toString();
        }
}
  
if (typeof module !== 'undefined') {
    module.exports = Calculator;
}
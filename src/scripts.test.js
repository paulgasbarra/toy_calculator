const Calculator = require('./Calculator');

beforeEach(() => {
    calculator = new Calculator();
});

describe('Calculator', () => {
    describe('clear function', () => {
        test('it should clear everything', () => {
            calculator.currentOperand = "123";
            calculator.previousOperand = "123";
            calculator.operation = "+";
            calculator.clear();
            expect(calculator.currentOperand).toBe("");
            expect(calculator.previousOperand).toBe("");
            expect(calculator.operation).toBe("");
        });
    });

    describe('delete function', () => {
        test('it should delete the last digit of the current operand if no other items', () => {
            calculator.currentOperand = "123";
            calculator.delete();
            expect(calculator.currentOperand).toBe("12");
        })
        
        test('it should delete the current operation if no current opererand', () => {
            calculator.previousOperand = "123";
            calculator.operation = "+";
            calculator.delete();
            expect(calculator.operation).toBe("");
            expect(calculator.currentOperand).toBe("123");
            expect(calculator.previousOperand).toBe("");
        })
        
        test('it should delete last digit of previousOperand if no operation and no current operand', () => {
            calculator.previousOperand = "123";
            calculator.delete();
            expect(calculator.previousOperand).toBe("12");
        });
    });

    describe('compute function', () => {
        test('it should add two numbers', () => {
            calculator.previousOperand = "1";
            calculator.currentOperand = "2";
            calculator.operation = "+";
            calculator.compute();
            expect(calculator.currentOperand).toBe("3");
        });

        test('it should subtract two numbers', () => {
            calculator.previousOperand = "1";
            calculator.currentOperand = "2";
            calculator.operation = "-";
            calculator.compute();
            expect(calculator.currentOperand).toBe("-1");
        });

        test('it should multiply two numbers', () => {
            calculator.previousOperand = "2";
            calculator.currentOperand = "2";
            calculator.operation = "x";
            calculator.compute();
            expect(calculator.currentOperand).toBe("4");
        });

        test('it should divide two numbers', () => {
            calculator.previousOperand = "2";
            calculator.currentOperand = "2";
            calculator.operation = "/";
            calculator.compute();
            expect(calculator.currentOperand).toBe("1");
        });
    });

    describe('appendNumber function', () => {
        test('it should append a number to the current operand', () => {
            calculator.appendNumber("1");
            expect(calculator.currentOperand).toBe("1");
        });
        test('it should only have one decimal point in the current operand', () => {
            calculator.appendNumber("1");
            calculator.appendNumber(".");
            calculator.appendNumber(".");
            calculator.appendNumber("2");
            expect(calculator.currentOperand).toBe("1.2"); 
        });
    });

    describe('chooseOperation function', () => {
        test('it should choose an operation', () => {
            calculator.chooseOperation("+");
            expect(calculator.operation).toBe("+");
        });


        test('it should compute the previous operation if there is one', () => {
            calculator.currentOperand = "1";
            calculator.chooseOperation("+");
            calculator.currentOperand = "1";
            calculator.chooseOperation("+");
            expect(calculator.previousOperand).toBe("2");
        });

    });

});
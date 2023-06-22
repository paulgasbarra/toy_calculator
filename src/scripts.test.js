const Calculator = require('./Calculator.js');

beforeEach(() => {
    calculator = new Calculator();
});

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

test('should clear the current operand', () => {
        calculator.currentOperand = "123";
        calculator.clear();
        expect(calculator.currentOperand).toBe("");
    }
);

test('it should delete the last digit of the current operand', () => {
    calculator.currentOperand = "123";
    calculator.delete();
    expect(calculator.currentOperand).toBe("12");
})

test('it should delete the current operation if no current opererand', () => {
    calculator.operation = "+";
    calculator.delete();
    expect(calculator.operation).toBe("");
})

test('it should delete last digit of previousOperand if no operation and no current operand', () => {
    calculator.previousOperand = "123";
    calculator.delete();
    expect(calculator.previousOperand).toBe("12");
});
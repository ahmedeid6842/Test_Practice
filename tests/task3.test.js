const Calculator = require("../tasks/task3");

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds two negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });

        test('adds a positive and a negative number', () => {
            expect(calculator.add(2, -3)).toBe(-1);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(3, 2)).toBe(1);
        });

        test('subtracts two negative numbers', () => {
            expect(calculator.subtract(-3, -2)).toBe(-1);
        });

        test('subtracts a positive and a negative number', () => {
            expect(calculator.subtract(3, -2)).toBe(5);
        });
    });

    describe('divide', () => {
        test('divides a positive number by a positive number', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });

        test('divides a negative number by a negative number', () => {
            expect(calculator.divide(-6, -2)).toBe(3);
        });

        test('divides a positive number by a negative number', () => {
            expect(calculator.divide(6, -2)).toBe(-3);
        });

        test('throws an error when dividing by zero', () => {
            expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero.');
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        });

        test('multiplies a positive and a negative number', () => {
            expect(calculator.multiply(2, -3)).toBe(-6);
        });
    });
});
const stringLength = require("../tasks/task1");

test('stringLength throws an error if the input string is empty', () => {
    expect(() => stringLength('')).toThrow('String must not be empty.');
});

test('stringLength throws an error if the input string is longer than 10 characters', () => {
    expect(() => stringLength('12345678901')).toThrow('String must not exceed 10 characters.');
});

test('stringLength returns the correct length of the input string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('12345')).toBe(5);
});
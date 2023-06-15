const reverseString = require("../tasks/task2");

test('reverseString returns the input string reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('')).toBe('');
});
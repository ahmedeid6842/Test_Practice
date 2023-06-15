const capitalize = require("../tasks/task4");

test('capitalize capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('12345')).toBe('12345');
    expect(capitalize('')).toBe('');
});
function stringLength(string) {
    const length = string.length;
    if (length === 0) {
        throw new Error('String must not be empty.');
    }
    if (length > 10) {
        throw new Error('String must not exceed 10 characters.');
    }
    return length;
}

module.exports = stringLength;
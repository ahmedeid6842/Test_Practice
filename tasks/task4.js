function capitalize(string) {
    if (string.length === 0) {
        return '';
    }
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;
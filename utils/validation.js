/* Helper functions to validate user input. */

// checks if input is non-null and returns true or console logs. (falsy)
const ask = function (input, inputName) {
    return (input) ? true : `Please enter a ${inputName}!`;
};

// checks if num is non-null or non-NaN, and returns true or console logs.
const askN = function (input, num) {
    return (input && !isNaN(input)) ? true : `Please enter a valid ${num}!`;
};

// filter non-numbers from input
const cleanNum = function (input) {
    return (input && !isNaN(input)) ? input : "";
}

// checks if the email is non-null and properly formatted: string@string.string
const askE = function (email) {
    if (email && /\S+@\S+\.\S+/.test(email)) {
        return true;
    }
    return `Please enter a valid email address!`;
};

module.exports = [ ask, askN, askE, cleanNum ];
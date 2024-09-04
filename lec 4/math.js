const sum = (num1, num2) => {
    return Number(num1) + Number(num2);
};

const subtract = (num1, num2) => {
    return Number(num1) - Number(num2);
};

const multiply = (num1, num2) => {
    return Number(num1) * Number(num2);
};

const division = (num1, num2) => {
    if (num2 == 0) {
        return "Error: Division by zero is not allowed";
    } else {
        return Number(num1) / Number(num2);
    }
};

module.exports = { sum, subtract, multiply, division };

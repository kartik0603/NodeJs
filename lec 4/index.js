const prompt = require("prompt-sync")();
const maths = require("./math");

console.log("1. for Sum\n 2. for Subtract\n 3. for Multiplication\n 4. for Division");

const operation = parseInt(prompt("Choose an operation (1-4): "), 10);

console.log("Enter Number 1:");
const num1 = prompt();
console.log("Enter Number 2:");
const num2 = prompt();

switch (operation) {
    case 1:
        console.log(maths.sum(num1, num2));
        break;
    case 2:
        console.log(maths.subtract(num1, num2));
        break;
    case 3:
        console.log(maths.multiply(num1, num2));
        break;
    case 4:
        console.log(maths.division(num1, num2));
        break;
    default:
        console.log("Invalid operation");
}

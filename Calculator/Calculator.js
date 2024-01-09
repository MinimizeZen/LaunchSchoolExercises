//Import readline-sync
let readline = require('readline-sync');

//Welcome message
console.log("Welcome to Calculator");
// Ask the user for the first number.
console.log("What's the first number?");
let num1 = Number(readline.question())
// Ask the user for the second number.
console.log("What's the second number?");
let num2 = Number(readline.question())
// Ask the user for an operation to perform.
console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question()
// Perform the operation on the two numbers.
let output;
switch (operation) {
  case "1":
    output = num1 + num2
    break;
  case "2":
    output = num1 - num2
    break;
  case "3":
    output = num1 * num2
    break;
  case "4":
    output = num1 / num2
    break;
}
// Print the result to the terminal.
console.log(output);

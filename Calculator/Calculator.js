//Import readline-sync
let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`)
}
function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num))
}
//Welcome message
prompt("Welcome to Calculator");
// Ask the user for the first number.
prompt("What's the first number?");
let num1 = readline.question()
while (invalidNumber(num1)) {
  prompt("That's not a number")
  num1 = readline.question()
}
num1 = Number(num1)
// Ask the user for the second number.
prompt("What's the second number?");
let num2 = readline.question()

while (invalidNumber(num2)) {
  prompt("That's not a number")
  num2 = readline.question()
}
num2 = Number(num2)
// Ask the user for an operation to perform.
prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question()
while (!["1", "2", "3", "4"].includes(operation)) {
  prompt("That's not a valid operation enter 1, 2, 3, or 4.")
  operation = readline.question()
}
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

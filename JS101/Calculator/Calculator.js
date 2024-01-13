//Import readline-sync
let readline = require('readline-sync');
let messages = require('./message_config.json');
function prompt(msg) {
  console.log(`=> ${msg}`)
}
function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}
//let messages = JSON.parse(config);
//Welcome message
prompt(messages.welcome);
// Ask the user for the first number.
while (true) {
  prompt(messages.num1Msg);
  let num1 = readline.question()
  while (invalidNumber(num1)) {
    prompt(messages.invalidNumberMsg)
    num1 = readline.question()
  }
  num1 = Number(num1)
  // Ask the user for the second number.
  prompt(messages.num2Msg);
  let num2 = readline.question()

  while (invalidNumber(num2)) {
    prompt(messages.invalidNumberMsg)
    num2 = readline.question()
  }
  num2 = Number(num2)
  // Ask the user for an operation to perform.
  prompt(messages.operationMsg);
  let operation = readline.question()
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages.operationInvalidMsg)
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
  prompt(`${messages.resultMsg}${output}`);
  console.log();
  prompt(messages.continueMsg);
  if (readline.question().toLowerCase() !== "yes") {
    break;
  }
}

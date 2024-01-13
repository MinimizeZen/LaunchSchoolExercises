let readline = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg}`);
}
function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num)) || Number(num) < 0;
}
prompt("Welcome to Loan Calculator!");
while (true) {
  console.log("-----------------------------------------------\n");
  prompt("What is the loan amount?");
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt("Please enter an actual positive number");
    loanAmount = readline.question();
  }
  loanAmount = Number(loanAmount);
  prompt("What is your interest rate(as a percentage)?");
  let loanInterest = readline.question().replace("%", "");
  while (invalidNumber(loanInterest)) {
    prompt("Please enter an actual positive number");
    loanInterest = readline.question().replace("%", "");
  }
  loanInterest = Number(loanInterest) / 100;
  prompt("What is the loan duration(in months)?");
  let loanDuration = readline.question();
  while (invalidNumber(loanDuration)) {
    prompt("Please enter an actual positive number");
    loanDuration = readline.question();
  }
  loanDuration = Number(loanDuration);
  let monthlyLoanInterest = loanInterest / 12;
  let monthlyPayment = loanAmount *
    (monthlyLoanInterest /
      (1 - Math.pow(1 +
        monthlyLoanInterest, loanDuration * -1)));
  prompt(`Your monthlyPayment is $${monthlyPayment.toFixed(2)}`);
  prompt("Continue? y|n ");
  if (readline.question()
    .toLowerCase() !== 'y') {
    break;
  }
}

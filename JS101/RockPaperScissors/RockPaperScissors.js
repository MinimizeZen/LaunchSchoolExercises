let readLine = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors']
function prompt(message) {
  console.log(`=> ${message}`);
}
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let computerChoice = VALID_CHOICES[Math.floor
    (Math.random() * VALID_CHOICES.length)];
  let choice = readLine.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readLine.question().toLowerCase();
  }
  let resultMessage = `You picked ${choice}, while the computer picked ${computerChoice}`
  switch (VALID_CHOICES.indexOf(choice) - VALID_CHOICES.indexOf(computerChoice)) {
    case -2: prompt(`${resultMessage}. You win!`)
      break;
    case -1: prompt(`${resultMessage}. You lose.`)
      break;
    case 0: prompt(`You both picked ${computerChoice}, it's a tie`)
      break;
    case 1: prompt(`${resultMessage}. You win!`)
      break;
    case 2: prompt(`${resultMessage}. You lose!`)
      break;
  }
  prompt("Would you like to continue? y/N")
  if (readLine.question()
    .toLowerCase() !== "y") {
    break;
  }
}


const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const readline = require("readline-sync");
const game = {
  human: createHuman(),
  computer: createComputer(),
  play() {
    this.introMessage();
    while (true) {
      this.human.chooseMove();
      console.log(this.computer);
      this.computer.chooseMove();
      this.displayWinner();
      if (!this.playAgain()) { break; };
    }
    this.goodbyeMessage();
  },
  displayWinner() {
    console.log(`You chose: ${VALID_CHOICES[this.human.move]}`);
    console.log(`The computer chose: ${VALID_CHOICES[this.computer.move]}`);
  },
  playAgain() {
    this.prompt('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y' ? true : false;
  },
  introMessage() {
    this.prompt("Welcome to Rock, Paper, Scissors");
  },
  goodbyeMessage() {
    this.prompt("Thanks for playing!");
  },
  prompt(message) {
    console.log(`=> ${message}`)
  },
}
game.play();

function createPlayer() {
  let player = {
    move: null,
    chooseMove: () => console.log("you should not be running this"),
  };
  return player;
}
function createHuman() {
  let player = createPlayer();
  let humanPlayer = {
    chooseMove() {
      let choice;
      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question().toLowerCase();
        if (VALID_CHOICES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = VALID_CHOICES.indexOf(choice);
      //this.move = VALID_CHOICES[Math.random()*VALID_CHOICES.length];
    }
  }
  return Object.assign(player, humanPlayer);
}
function createComputer() {
  let player = createPlayer();
  let computerPlayer = {
    chooseMove() {
      let choice = Math.floor(Math.random() * VALID_CHOICES.length);
      console.log(choice)
      this.move = choice;
    }
  }
  return Object.assign(player, computerPlayer);
}

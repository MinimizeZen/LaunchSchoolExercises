let readline = require("readline-sync");
let playerPiece = "";
let computerPiece = "";
let computerTurn = aiTurn;
let board = {
  1: " ", // top left
  2: " ", // top center
  3: "X", // top right
  4: " ", // middle left
  5: " ", // center
  6: " ", // middle right
  7: " ", // bottom left
  8: "X", // bottom center
  9: "X", // bottom right
  winner: " ",
  winprint: [],
};
const PIECERECTIFY = {
  x: "X",
  X: "O",
  o: "O",
  O: "X",
};
main();
function main() {
  greeting();
  resetBoard();
  setPlayer();
  initializeGame();
  while (board["winner"] === " ") {
    displayBoard(board);
    playerTurn();
    if (board["winner"] !== " ") {
      break;
    }
    displayBoard(board);
    computerTurn(computerPiece);
  }
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}
function resetBoard() {
  for (key of Object.keys(board)) {
    board[key] = " ";
  }
}
function greeting() {
  prompt(`Welcome to TicTacToe`);
}
function setPlayer() {
  prompt(`Choose X or O`);
  while (true) {
    let playerResponse = readline.question().toLowerCase();
    if (playerResponse === "x" || playerResponse === "o") {
      playerPiece = PIECERECTIFY[playerResponse];
      computerPiece = PIECERECTIFY[playerPiece];
      break;
    }
    prompt(`Please enter a valid character`);
  }
  prompt(`your piece is now ${playerPiece}`);
  console.log();
}
function initializeGame() {
  while (true) {
    prompt(`What would you like to do? (start setPlayer AIOff AIOn)`);
    switch (readline.question()) {
      case "start":
        return;
      case "setPlayer":
        setPlayer();
        break;
      case "AIOff":
        computerTurn = playerTurn;
        break;
      case "AIOn":
        computerTurn = aiTurn;
        break;
    }
  }
}
function placeAndCheck(piece, square) {
  board[square] = piece;
  let counter = 0;
  for (
    let a = Math.floor((square - 1) / 3) * 3 + 1;
    a <= Math.ceil(square / 3) * 3;
    a++
  ) {
    if (board[a] === piece) {
      counter++;
    }
  }
  if (counter === 3) {
    board["winner"] = piece;
  }
  counter = 0;
  for (let a = square % 3; a <= 9; a += 3) {
    if (board[a] === piece) {
      counter++;
    }
  }
  if (counter === 3) {
    board["winner"] = piece;
  }
  if (board[1] === piece && board[5] === piece && board[9] === piece) {
    board["winner"] = piece;
  }
  if (board[3] === piece && board[5] === piece && board[7] === piece) {
    board["winner"] = piece;
  }
}

function playerTurn(maskedPiece) {
  prompt(
    `${maskedPiece ? "(AI) " : ""}Where would you like to place your ${maskedPiece || playerPiece} 1-9`,
  );
  while (true) {
    let square = Number(readline.question());
    if (square > 0 && square < 10 && board[square] === " ") {
      placeAndCheck(maskedPiece || playerPiece, square);
      console.log(global.playerPiece);
      return;
    }
  }
}
function aiTurn() {
  while (Object.values(board).includes(" ")) {
    let square = Math.floor(Math.random() * 9) + 1;
    if (square > 0 && square < 10 && board[square] === " ") {
      placeAndCheck(computerPiece, square);
      return;
    }
  }
}

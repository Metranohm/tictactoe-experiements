// keep track of whose turn it is
let currentPlayer = "X";

// keep track of the state of the game
let gameState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// get a reference to the tic-tac-toe element
let ticTacToe = document.getElementById("tic-tac-toe");

// add a click listener to the tic-tac-toe element
ticTacToe.addEventListener("click", handleCellClick);

function handleCellClick(event)
const TicTacToe = {
  // Define the game board as a 2D array of cells
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],

  // Define the players as an array of objects
  players: [
    {
      id: 1,
      name: 'Player 1',
      symbol: 'X'
    },
    {
      id: 2,
      name: 'Player 2',
      symbol: 'O'
    }
  ],

  // Define the current player as the first player in the array
  currentPlayer: 0,

  // Define a method to switch the current player
  switchPlayer() {
    this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
  },

  // Define a method to place a symbol on the board
  placeSymbol(row, col) {
    // If the cell is already occupied, do nothing
    if (this.board[row][col] !== '') return;

    // Get the current player
    const player = this.players[this.currentPlayer];

    // Place the player's symbol on the board
    this.board[row][col] = player.symbol;

    // Check if the player has won the game
    if (this.checkWin(player)) {
      // If the player has won, announce the winner
      console.log(`${player.name} wins!`);
    } else {
      // If the game is not over, switch to the next player
      this.switchPlayer();
    }
  },

  // Define a method to check if a player has won the game
  checkWin(player) {
    // Check the rows for a win
    for (let row = 0; row < this.board.length; row++) {
      if (this.board[row].every(cell => cell === player.symbol)) {
        return true;
      }
    }

    // Check the columns for a win
    for (let col = 0; col < this.board[0].length; col++) {
      if (this.board.every(row => row[col] === player.symbol)) {
        return true;
      }
    }

    // Check the diagonals for a win
    const topLeft = this.board[0][0];
    const topRight = this.board[0][this.board[0].length - 1];
    const center = this.board[1][1];
    const bottomLeft = this.board[this.board.length - 1][0];
    const bottomRight = this.board[this.board.length - 1][this.board[0].length - 1];

    if (topLeft === player.symbol && center === player.symbol && bottomRight === player.symbol) {
      return true;
    }

    if (topRight === player.symbol && center === player.symbol && bottomLeft === player.symbol) {
      return true;
    }

    // If none of the checks have returned true, the player has not won
    return false;
  }
};

//

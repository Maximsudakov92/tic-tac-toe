let firstPlayer = 'x';
let secondPlayer = 'o';

class TicTacToe {
  constructor (firstPlayer, secondPlayer) {  
    this.firstPlayer = firstPlayer || "x";
    this.secondPlayer = secondPlayer || "o";
    this.currentPlayer = this.firstPlayer;
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  }
    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.gameField[rowIndex][columnIndex] !== null) {
        return ;
      }
      this.gameField[rowIndex][columnIndex] = this.currentPlayer;
      if(this.currentPlayer === this.firstPlayer) {
        this.currentPlayer = this.secondPlayer;
      } else {
        this.currentPlayer = this.firstPlayer;
      }
    }

    isFinished() {
      return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
      let diagonalRight = this.gameField.length -1;
      let diagonalLeftO = 0;
      let diagonalRightO = 0;
      let diagonalLeftX = 0;
      let diagonalRightX = 0;

      for(let i = 0; i < this.gameField.length; i++) {
        let verticalX = 0;
        let horizontalX = 0;
        let verticalO = 0;
        let horizontalO = 0;

        if(this.gameField[i][diagonalRight] === 'x') {
          diagonalRightX++
        }
        if(this.gameField[i][diagonalRight] === 'o') {
          diagonalRightO++;
        }
        diagonalRight--;

        for(let j = 0; j < this.gameField.length; j++) {
          if(this.gameField[i][j] === 'x') {
            verticalX++;
          }
          if(this.gameField[i][j] === 'o'){
            verticalO++;
          }
          if(this.gameField[j][i] === 'x') {
            horizontalX++;
          }
          if (this.gameField[j][i] === 'o') {
            horizontalO++;
          }
          if(i === j) {
            if(this.gameField[i][j] === 'x') {
              diagonalLeftX++;
            }
            if (this.gameField[i][j] === 'o') {
              diagonalLeftO++;
            }
          }
        }
        if(verticalX === 3 || horizontalX === 3 || diagonalLeftX === 3 || diagonalRightX === 3) {
          return this.firstPlayer;
        }
        if(verticalO === 3 || horizontalO === 3 || diagonalLeftO === 3 || diagonalRightO === 3) {
          return this.secondPlayer;
        }      
      }
      return null;
    }

    noMoreTurns() {
      return !this.gameField.some( row => row.some( elem => elem === null))
    }

    isDraw() {
      return this.noMoreTurns() && this.getWinner() === null
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;


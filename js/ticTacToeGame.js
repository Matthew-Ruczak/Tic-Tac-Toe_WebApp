class TicTacToeGame {

    ticTacToeBoard; //Tic Tac Toe Board
    numOfEmptySquares;   //Total number of empty squares on the board
    playersTurn;    //Holds who turn it is (Player 1 = 1, Player 2 = 2)


    constructor(){
        //Setting up Tic Tac Toe Game
        this.ticTacToeBoard = [[null, null, null],[null, null, null],[null, null, null]];
        this.numberOfEmptySquares = 9;
        this.playersTurn = this.getStartingPlayer();
    }

    //Place a symbol on the board
    placeAt(x, y){
        x = parseInt(x);
        y = parseInt(y);
        console.log("Game: " + this.getPlayersTurn());
        let symbol = this.getPlayersTurn() == 1 ? "X" : "O";
        //Checking if spot has already been taken
        if (this.getAt(x, y) === null){
            this.ticTacToeBoard[x][y] = symbol;
            this.numberOfEmptySquares--;
            //Switching players turns
            if (this.playersTurn == 1)
                this.playersTurn = 2;
            else
                this.playersTurn = 1;
            return true;    //Success
        }else{
            return false;   //Failed
        }   
    }

    //Get the current symbol on the board at a certain location
    getAt(x, y){ return this.ticTacToeBoard[x][y]; }

    //Check if all squares are full (Return's a boolean)
    get allSquaresFull(){
        return this.numOfEmptySquares === 0 ? true : false;
    }

    //Get's the current empty squares (Return's an array of Objects containing the square's x and y index's)
    get getCurrEmptySquares(){
        if (!this.allSquaresFull()){
            let listOfEmptySquaresIndexs = [];

            for (let x = 0; x < this.ticTacToeBoard.length; x++){
                for (let y = 0; y < this.ticTacToeBoard[x].length; y++){
                    //Checking if square is empty
                    if (this.ticTacToeBoard[x][y] === null){
                        listOfEmptySquaresIndexs.push({x : x, y : y});
                    }
                }
            }
            return listOfEmptySquaresIndexs;
        }
        else{
            return 0;
        }   
    }

    get getCurrTicTacToeBoard(){
        return this.ticTacToeBoard;
    }

    /**
     * Check if there is a winner or if it is a draw
     * 
     *  Return's
     *      - the appropriate symbol if a player won
     *      - returns "DRAW", if there was a draw
     *      - returns false, if no winner was found and the game is not a draw
     */
    checkForWinner(){
        //Checking horizontally
        for (let y = 0; y < this.ticTacToeBoard.length; y++){
            if (this.ticTacToeBoard[0][y] === this.ticTacToeBoard[1][y] && this.ticTacToeBoard[0][y] === this.ticTacToeBoard[2][y])
                return this.ticTacToeBoard[0][y];
        }
        //Checking Vertically
        for (let x = 0; x < this.ticTacToeBoard.length; x++){
            if (this.ticTacToeBoard[x][0] === this.ticTacToeBoard[x][1] && this.ticTacToeBoard[x][0] === this.ticTacToeBoard[x][2])
                return this.ticTacToeBoard[x][0];
        }
        //Checking diagonally (Top Left to Bottom Right)
        if (this.ticTacToeBoard[0,0] === this.ticTacToeBoard[1,1] && this.ticTacToeBoard[0,0] === this.ticTacToeBoard[2,2])
            return this.ticTacToeBoard[0,0];
        //Checking diagonally (Bottom Left to Top Right)
        if (this.ticTacToeBoard[2,2] === this.ticTacToeBoard[1,1] && this.ticTacToeBoard[2,2] === this.ticTacToeBoard[2,0])
            return this.ticTacToeBoard[2,2];
        //Checking if the game is a Draw
        if (this.numberOfEmptySquares <= 0){
            return "D";
        }
        return false;
    }

    restartRound(){
        this.ticTacToeBoard = [[null, null, null],[null, null, null],[null, null, null]];
        this.numberOfEmptySquares = 9;
    }

    getPlayersTurn(){
        return this.playersTurn;
    }

    getStartingPlayer(){
        return Math.floor(Math.random() * 2) + 1;
    }
}
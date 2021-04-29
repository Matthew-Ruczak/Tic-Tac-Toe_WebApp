export class TicTacToe {
    ticTacToeGameBoard; //Holds the current Tic Tac Toe Board
    numOfTurnsCompleted; //Hold's the number of Turns Completed
    playerTurn; //Holds which players turn it is (Either 1 or 2)

    constructor(){
        //Creating a 3 by 3 to reprent the Tic Tac Toe Board
        this.ticTacToeGameBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.playerTurn = startingPlayer;
        this.numOfTurnsCompleted = 0;
    }

    //Returns the Current Tic Tac Toe Board
    get currGameBoard(){
        return this.ticTacToeGameBoard;
    }

    //Returns the value at a certain position in the Tic Tac Toe Board
    valueAt(x, y){
        return this.ticTacToeGameBoard[x][y];
    }

    /*
        Place the value of the current player at the provided location

        Returns:
            True, if the symbol could be placed successfully
            False, if the symbol could not be place (Spot has already has a non-null value)
            1, if player 1 Won the game
            2, if player 2 Won the game
            "D", if the Game is a Draw
            
    */
    placeAt(x, y){
        //Checking if the if the spot already has a value
        if (this.valueAt(x, y) === null){
            //Setting the spot on the Game Board to the current Players value
            this.ticTacToeGameBoard[x][y] = this.currPlayerTurn;

            this.numOfTurnsCompleted++;

            //Checking if the game has been won
            let result = this.isGameOver()
            if (!result){
                this.switchPlayersTurn();
            }
            return result;
        }
        else{
            return false;
        }
    }

    //Returns the Starting Player
    get startingPlayer(){
        return Math.floor(Math.random() * 2) + 1;
    }

    //Returns the Current Players Turn
    get currPlayerTurn(){
        return playerTurn;
    }

    //Switchs who turn it is
    switchPlayersTurn(){
        if (this.currPlayerTurn === 1)
            playerTurn = 2;
        else
            playerTurn = 1;
    }

    isGameOver(){
        //Checking if a player has won Horizontally
        for (let y = 0; y < 3; y++){
            if (this.valueAt(0,y) !== null && this.valueAt(0,y) === this.valueAt(1,y) && this.valueAt(0,y) === this.valueAt(2, y))
                return this.valueAt(0,y);
        }
        //Checking if a player has won Vertically
        for (let x = 0; x < 3; x++){
            if (this.valueAt(x,0) !== null && this.valueAt(x,0) === this.valueAt(x, 1) && this.valueAt(x, 0) === this.valueAt(x, 2))
                return this.valueAt(x,0);
        }
        //Checking if the a player has won Diagonally (Top Left to Bottom Right)
        if (this.valueAt(0,0) !== null && this.valueAt(0,0) === this.valueAt(1,1) && this.valueAt(0,0) === this.valueAt(2,2))
            return this.valueAt(0,0);
        //Checking if the a player has won Diagonally (Bottom Left to Top Right)
        if (this.valueAt(0,2) !== null && this.valueAt(0,2) === this.valueAt(1,1) && this.valueAt(0,2) === this.valueAt(2,0))
            return this.valueAt(0,2);
        //Checking if the game is a Draw
        if (this.numOfTurnsCompleted >= 9)
            return "D";
        
        //Game is not over
        return false;
    }
}
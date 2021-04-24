export class TicTacToeGame{
    playerOneScore;
    playerTwoScore;
    currTicTacToeRound;

    constructor(){
        playerOneScore = 0;
        playerTwoScore = 0;
        currTicTacToeRound = startNewTicTacToeRound();
    }

    startNewTicTacToeRound(){
        currTicTacToeRound = new TicTacToeRound();
    }

    onTicTacToeSquareClick(x,y){
        this.currTicTacToeRound.placeAt(x,y);
    }

    get PlayersTurn(){
        this.currTicTacToeRound.getPlayersTurn();
    }
}
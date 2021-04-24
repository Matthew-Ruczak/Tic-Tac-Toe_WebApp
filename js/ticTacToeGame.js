const playersTurnElement = $("#playersTurn"); //Holding reference to the GUI text to show who's turn it is
const playerOneScoreElement = $('#playerOneScore'); //Holding reference to the GUI text for player 1's score
const playerTwoScoreElement = $('#playerTwoScore'); //Holding reference to the GUI text for player 2's score
const notificationOuterBox = $('#notificationOuterBox');
const notificationMessage = $('#notificationMessage');
const ticTacToeSquareElements = $(".ticTacToeSquares"); //Getting reference to all tic tac toe squares

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
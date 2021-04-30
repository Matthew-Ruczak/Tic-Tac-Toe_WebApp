import { TicTacToe } from "./tic-tac-toe";

//Setting up variables
let playerOneScore = 0;
let playerTwoScore = 0;
let currTicTacToeRound;

//Setting up References to HTML Elements
let playersTurnElement = $("#playersTurn");
let playerOneScoreElement = $('#playerOneScore');
let playerTwoScoreElement = $('#playerTwoScore'); 
let notificationOuterBox = $('#notificationOuterBox');
let notificationMessage = $('#notificationMessage');
let allSquareElementRef = $(".ticTacToeSquares");

//Setting up HTML buttons
$('#restartGameBtn').on('click', restartGame);
$('#closeNotificationBox').on('click', closeNotificationBox);

//Making Squares Clickable
allSquareElementRef.on('click', onTicTacToeSquareClick);

//Starting the Tic Tac Toe Game
startNewTicTacToeRound();

function startNewTicTacToeRound(){
    currTicTacToeRound = new TicTacToe();
    //Clearing all Square HTML Elements
    allSquareElementRef.html('');
    updateHTMLGUI();
}

function restartGame(){
    //Zeroing Scores
    playerOneScore = 0;
    playerTwoScore = 0;
    currTicTacToeRound = new TicTacToe();
    //Clearing all Square HTML Elements
    allSquareElementRef.html('');
    updateHTMLGUI()
}

function updateHTMLGUI(){
    playersTurnElement.html(currTicTacToeRound.currPlayerTurn);
    playerOneScoreElement.html(playerOneScore);
    playerTwoScoreElement.html(playerTwoScore);
}

function onTicTacToeSquareClick(){
    let result = currTicTacToeRound.placeAt(parseInt($(this).attr('data-pos-x')), parseInt($(this).attr('data-pos-y')));
    if (result){
        //Updating HTML Square with the Players Symbol
        $(this).html(currTicTacToeRound.currPlayerTurn === 1 ? 'O' : 'X');
        
        //Checking if the game is over
        if (result === 1){
            openNotificationBox("Player 1 Win's this Round!");
            playerOneScore++;
            startNewTicTacToeRound();
        }
        else if (result === 2){
            openNotificationBox("Player 2 Win's this Round!");
            playerTwoScore++;
            startNewTicTacToeRound();
        }
        else if (result === "D"){
            openNotificationBox("This Round is a Draw!");
            playerOneScore++;
            playerTwoScore++;
            startNewTicTacToeRound();
        }
        updateHTMLGUI();
    }
    else{
        openNotificationBox("This square has been played!");
    }
}

function openNotificationBox(message){
    notificationMessage.html(message); //Display the given message in the notification box
    notificationOuterBox.show();
}

function closeNotificationBox(){
    notificationMessage.html(""); //Removing text from notification box
    notificationOuterBox.hide();
}
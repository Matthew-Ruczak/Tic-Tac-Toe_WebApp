//          *** Start of Fields *** 
let playerOneScore = 0;
let playerTwoScore = 0;
let playersTurnElement = $("#playersTurn"); //Holding reference to the GUI text to show who's turn it is
let playerOneScoreElement = $('#playerOneScore'); //Holding reference to the GUI text for player 1's score
let playerTwoScoreElement = $('#playerTwoScore'); //Holding reference to the GUI text for player 2's score
let notificationOuterBox = $('#notificationOuterBox');
let notificationMessage = $('#notificationMessage');
let ticTacToeSquareRef; //Holds reference to all of the tic tac toe squares from JQuery
let ticTacToeGame; //Instance of the TicTacToeGame Class
//          *** End of Fields ***


/**
 * 
 * Runs once the page is finished loading
 */
$(function(){
    //Creating an a Tic Tac Toe Game
    ticTacToeGame = new TicTacToeGame();
    //Making it so the user can click on the squares by setting up the on click event listener
    ticTacToeSquareRef = $(".ticTacToeSquares");
    ticTacToeSquareRef.on('click', function(){
        //Getting the square that was clicked ID
        let squareClickedID = $(this).attr('id');
        //Getting the square position that was clicked
        let squareClicked_posX = squareClickedID.split('_')[1].split('-')[0];
        let squareClicked_posY = squareClickedID.split('_')[1].split('-')[1];

        if (ticTacToeGame.onTicTacToeSquareClick(squareClicked_posX, squareClicked_posY)){

        }else{
            alert("This square has already been played!");
        }        
    });

    //Setting up restart game button
    $('#restartGameBtn').on('click', restartGame);

    //Setting up close notification box
    $('#closeNotificationBox').on('click', closeNotificationBox);

    //Getting and setting which player will go first
    updatePlayersTurnGUI();
});

function restartGame(){
    ticTacToeGame = new TicTacToeGame();
    clearAllTicTacToeSquaresGUI();
    updatePlayersScoreGUI();
    updatePlayersTurnGUI();
}

//Clears all Tic Tac Toe Squares in the GUI
function clearAllTicTacToeSquaresGUI(){
    ticTacToeSquareRef.html("");    //Making all the squares blank
}

//Updates players turn GUI to reflect the current players turn
function updatePlayersTurnGUI(){
    playersTurnElement.html(ticTacToeGame.getPlayersTurn());
}

function updatePlayersScoreGUI(){
    playerOneScoreElement.html(playerOneScore);
    playerTwoScoreElement.html(playerTwoScore);
}

function openNotificationBox(message){
    notificationMessage.html(message); //Display the given message in the notification box
    notificationOuterBox.show();
}

function closeNotificationBox(){
    notificationMessage.html(""); //Removing text from notification box
    notificationOuterBox.hide();
}
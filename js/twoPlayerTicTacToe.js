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
        //Checking if the square is blank (It has not already been used)
        let squareClickedID = $(this).get(0).id;
        console.log(squareClickedID);
        let squareClicked_posX = squareClickedID.split('_')[1].split('-')[0];
        let squareClicked_posY = squareClickedID.split('_')[1].split('-')[1];

        let symbolToPlace = ticTacToeGame.getPlayersTurn() == 1 ? "X" : "O";
        if (ticTacToeGame.placeAt(squareClicked_posX, squareClicked_posY)){
            //Displaying Players Turn on GUI
            console.log("Two: " + ticTacToeGame.getPlayersTurn());
            $(this).html(symbolToPlace);
            
            updatePlayersTurnGUI();

            //Checking for a Winner or if it is a Draw
            let checkForWinnerResult = ticTacToeGame.checkForWinner();
            if (checkForWinnerResult){
                let message;
                if (checkForWinnerResult === "X"){
                    message = "Player 1 Won! Restarting Game.";
                    playerOneScore++;
                }else if (checkForWinnerResult === "O"){
                    message = "Player 2 Won! Restarting Game.";
                    playerTwoScore++;
                }else if (checkForWinnerResult === "D"){
                    message = "It's a Draw! Restarting Game."
                }
                openNotificationBox(message);

                startNewRound();
            }
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

function startNewRound(){
    updatePlayersScoreGUI();
    clearAllTicTacToeSquaresGUI();
    ticTacToeGame.restartRound();
}

function restartGame(){
    //Clearing players scores
    playerOneScore = 0;
    playerTwoScore = 0;
    updatePlayersScoreGUI();
    clearAllTicTacToeSquaresGUI();

    ticTacToeGame = new TicTacToeGame();
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
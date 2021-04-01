//          *** Start of Fields ***
let playersTurn = 0;    //Holds who turn it is (Player 1 = 1, Player 2 = 2)
let numberOfTurnsCompleted = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let playersTurnElement = $("#playersTurn"); //Holding reference to the GUI text to show who's turn it is
let playerOneScoreElement = $('#playerOneScore'); //Holding reference to the GUI text for player 1's score
let playerTwoScoreElement = $('#playerTwoScore'); //Holding reference to the GUI text for player 2's score
let notificationOuterBox = $('#notificationOuterBox');
let notificationMessage = $('#notificationMessage');
let ticTacToeSquareRef; //Holds reference to all of the tic tac toe squares from JQuery
let ticTacToeAreaGridRef;   //Holds reference to all of the tic tac toe squares in a 2D array
let computerDifficulty = 0;     //Holds the computers difficulty level (0 = Easy, 2 = Medium, 3 = Hard)
//          *** End of Fields ***


/**
 * 
 * Runs once page is finished loading
 */
$(function(){
    //Getting reference to all ticTacToe Squares
    ticTacToeAreaGridRef = [
        [$("#square_0-0"),$("#square_1-0"), $("#square_2-0")],
        [$("#square_0-1"), $("#square_1-1"), $("#square_2-1")],
        [$("#square_0-2"), $("#square_1-2"), $("#square_2-2")]
    ];
    //Making it so the user can click on the squares by setting up the on click event listener
    ticTacToeSquareRef = $(".ticTacToeSquares");
    ticTacToeSquareRef.on('click', ticTacToeSquare_onClick);

    //Setting up restart game button
    $('#restartGameBtn').on('click', restartGame);

    //Setting up close notification box
    $('#closeNotificationBox').on('click', closeNotificationBox);

    //Getting and setting which player will go first
    getStartingPlayer();
});

function ticTacToeSquare_onClick(){
    //Getting the id of the playe



    //Checking if the square is blank (It has not already been used)
    if ($(this).html() == ""){
        if (playersTurn == 1){
            $(this).html('X');
            //Checking if player won
            if (checkIfPlayerWon("X")){
                openNotificationBox("Player 1 Won! Restarting Game.")
                playerOneScore++;
            }else{
                //Incrementing the number of turns that have occurred
                numberOfTurnsCompleted++;
                computersTurn();
            }
        }else{  //Must be player 2's turn

        }
        
        //Checking to see if their is a draw (all players win!)
        if (checkIfDraw()){
            openNotificationBox("It is a draw! \n Game will restart.");
        }

    }else{
        alert("This square has already been played!");
    }
}

/**
 * 
 * Getting and setting (variable and GUI) which player will go first
 */
function getStartingPlayer(){
    playersTurn = Math.floor(Math.random() * 2) + 1;
    updatePlayersTurnGUI();

    //Since the computer is starting, letting it have its turn
    if (playersTurn === 2){
        computersTurn();
    }
}

function computersTurn(){
    //Player 2's Turn (Computers Turn)
    emptyTicTacToeSquares = getEmptySquares();  //Getting all all possible moves for computer
    squareToSelectIndex = Math.round(Math.random() * (emptyTicTacToeSquares.length - 1));   //Random selecting a square
    emptyTicTacToeSquares[squareToSelectIndex].html('O');   //Updating GUI to show the computers move
    numberOfTurnsCompleted++;
    //Updating Players Turn GUI, since who's turn it is has changed
    playersTurn = 1;
    updatePlayersTurnGUI();
    //Checking if the computer won
    if (checkIfPlayerWon("O")){
        openNotificationBox("Player 2 Won! Restarting Game.")
        playerTwoScore++;
    }
}

function checkIfPlayerWon(pSymbol){
    //Checking if there is three of the same symbol going horizontally (left to right) for all three rows
    for (let y = 0; y < 3; y++){    //Going through each row
        if (ticTacToeAreaGridRef[0][y].html() === pSymbol && ticTacToeAreaGridRef[1][y].html() === pSymbol && ticTacToeAreaGridRef[2][y].html() === pSymbol){
            return true;
        }
    }
    //Checking if there is three of the same symbol going vertically (top to bottom) for all three columns
    for (let x = 0; x < 3; x++){
        if (ticTacToeAreaGridRef[x][0].html() === pSymbol && ticTacToeAreaGridRef[x][1].html() === pSymbol && ticTacToeAreaGridRef[x][2].html() === pSymbol){
            return true;
        }
    }
    //Checking if there is three of the same symbol going diagonally (top left to bottom right)
    if (ticTacToeAreaGridRef[0][0].html() === pSymbol && ticTacToeAreaGridRef[1][1].html() === pSymbol && ticTacToeAreaGridRef[2][2].html() === pSymbol){
        return true;
    }
    //Checking if there is three of the same symbol going diagonally (bottom left to top right)
    if (ticTacToeAreaGridRef[0][2].html() === pSymbol && ticTacToeAreaGridRef[1][1].html() === pSymbol && ticTacToeAreaGridRef[2][0].html() === pSymbol){
        return true;
    }

    //Since the current grid did not match any winnining patterns, return false
    return false;
}

function checkIfDraw(){
    if (numberOfTurnsCompleted >= 9){
        return true;
    }else{
        return false;
    }
}

function getEmptySquares(){
    let listOfEmptySquares = [];
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++){
            if (ticTacToeAreaGridRef[x][y].html() == ""){
                listOfEmptySquares.push(ticTacToeAreaGridRef[x][y]);
            }
        }
    }
    return listOfEmptySquares;
}

/**
 * 
 * Restarts the Game, for the next round
 */
function clearPlayArea(){
    //Updating players scores (GUI)
    updatePlayersScoreGUI();
    
    numberOfTurnsCompleted = 0; //Setting number of turns that have occurred to zero
    clearAllTicTacToeSquaresGUI();  //Clear the Tic Tac Toe GUI squares
}
function restartGame(){
    //Clearing players scores
    playerOneScore = 0;
    playerTwoScore = 0;
    updatePlayersScoreGUI()

    clearPlayArea()
    getStartingPlayer();    //Getting a new starting player
}

//Clears all Tic Tac Toe Squares in the GUI
function clearAllTicTacToeSquaresGUI(){
    ticTacToeSquareRef.html("");    //Making all the squares blank
}

//Updates players turn GUI to reflect the current players turn
function updatePlayersTurnGUI(){
    playersTurnElement.html(playersTurn);
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
    clearPlayArea();
}
<!DOCTYPE html>
<html>
    <head>
        <!-- Meta Data -->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- This tells the browser not to zoom out (this is done by scaling to the device) (important for mobile)-->

        <title>Tic Tac Toe Online | Single Player</title>

        <link rel="stylesheet" type="text/css" href="css/main.css">
    </head>
    <body>
        <main>
            <?php include 'header.php'; ?>
            <div id="playArea">
                <ul id="gameInfoArea">
                    <li class="gameInfoAreaElement">
                        <strong>Score</strong> <br>
                        <span>Player 1:<span id="playerOneScore">0</span></span>&nbsp;&nbsp;<span>Player 2:<span id="playerTwoScore">0</span></span>
                    </li>
                    <li class="gameInfoAreaElement">
                        <strong>Player 1 = X, Computer = O</strong><br>
                        It is Player <span id="playersTurn"></span>'s turn.
                    </li>
                    <li class="gameInfoAreaElement">
                        <button id="restartGameBtn" class="btn btn-dark">Restart Game</button>
                    </li>
                </ul>
                <table id="ticTacToeSquaresArea">
                    <tr style="width: 100%; height: 15%;">
                        <td id="square_0-0" class="ticTacToeSquares"></td>
                        <td id="square_1-0"class="ticTacToeSquares"></td>
                        <td id="square_2-0" class="ticTacToeSquares"></td>
                    </tr>
                    <tr>
                        <td id="square_0-1" class="ticTacToeSquares"></td>
                        <td id="square_1-1"class="ticTacToeSquares"></td>
                        <td id="square_2-1" class="ticTacToeSquares"></td>
                    </tr>
                    <tr>
                        <td id="square_0-2" class="ticTacToeSquares"></td>
                        <td id="square_1-2"class="ticTacToeSquares"></td>
                        <td id="square_2-2" class="ticTacToeSquares"></td>
                    </tr>
                </table>
            </div>
        </main>
        <div id="notificationOuterBox">
            <div id="notificationInnerBox">
                <span id="notificationMessage"></span> <br>
                <button id="closeNotificationBox" class="btn btn-dark">Close</button>
            </div>
        </div>
        <!-- External JavaScript -->
        <script src="js/jQuery.js"></script>    <!-- JQuery Library-->
        <script src="js/singlePlayerTicTacToe.js"></script>
    </body>
</html>
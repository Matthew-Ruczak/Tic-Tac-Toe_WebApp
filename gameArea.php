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
    <div id="ticTacToeSquaresArea">
        <div id="notificationOuterBox">
            <div id="notificationInnerBox">
                <span id="notificationMessage"></span> <br>
                <button id="closeNotificationBox" class="btn btn-dark">Close</button>
            </div>
        </div>
        <table id="ticTacToeSquaresArea_table">
            <tr class="ticTacToeSquareRows">
                <td id="square_0-0" data-pos-x="0" data-pos-y="0" class="ticTacToeSquares"></td>
                <td id="square_1-0" data-pos-x="1" data-pos-y="0" class="ticTacToeSquares"></td>
                <td id="square_2-0" data-pos-x="2" data-pos-y="0" class="ticTacToeSquares"></td>
            </tr>
            <tr class="ticTacToeSquareRows">
                <td id="square_0-1" data-pos-x="0" data-pos-y="1" class="ticTacToeSquares"></td>
                <td id="square_1-1" data-pos-x="1" data-pos-y="1" class="ticTacToeSquares"></td>
                <td id="square_2-1" data-pos-x="2" data-pos-y="1" class="ticTacToeSquares"></td>
            </tr>
            <tr class="ticTacToeSquareRows">
                <td id="square_0-2" data-pos-x="0" data-pos-y="2" class="ticTacToeSquares"></td>
                <td id="square_1-2" data-pos-x="1" data-pos-y="2" class="ticTacToeSquares"></td>
                <td id="square_2-2" data-pos-x="2" data-pos-y="2" class="ticTacToeSquares"></td>
            </tr>
        </table>
    </div>
</div>
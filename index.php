<!DOCTYPE html>
<html>
    <head>
        <!-- Meta Data -->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- This tells the browser not to zoom out (this is done by scaling to the device) (important for mobile)-->

        <!-- This is where you put the title of your current page-->
        <title>Tic Tac Toe Online | Home</title>

        <!-- Internal CSS-->
        <style>
        </style>

        <!-- Internal JavaScript -->
        <script>
        </script>
    </head>
    <body>
        <main>
            <?php include 'header.php'; ?>
            <p>
                Welcome to Tic Tac Toe Online!
                
                <br> <br>
                <!-- Sorry, but the game is currently down for maintenance. Please check back later. -->
                
                Which game mode would you like to play?
                <br>
                <ol>
                    <li><a href="singlePlayer.php">Single Player</a></li>
                    <li><a href="twoPlayer.php">Two Player</a></li>
                    <li><a href="#">Online Multiplayer (Coming Soon!)</a></li>
                </ol>
            </p>
            <p style="text-align: center;"> Please note this game is still in development. <a href="updateLog.php">View Update Log</a></p>
        </main>
    </body>
</html>
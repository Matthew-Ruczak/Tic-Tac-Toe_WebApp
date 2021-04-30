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
            <?php include 'gameArea.php'; ?>
        </main>
        <!-- Internal JS -->
        <script>
            var gameMode = 0;
        </script>
        <!-- External JavaScript -->
        <script src="js/jQuery.js"></script>    <!-- JQuery Library-->
        <script src="js/game.js"></script>
    </body>
</html>
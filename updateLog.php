<!DOCTYPE html>
<html>
    <head>
        <!-- Meta Data -->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- This tells the browser not to zoom out (this is done by scaling to the device) (important for mobile)-->
        
        
        <title> Trapped In A Box | Update Log</title>

        <!-- External CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="./css/CSS.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <main>
            <?php include 'header.php'; ?>
            <h4>Currently working on:</h4>
            <ul>
                <li>Scaling for all devices</li>
                <li>Adding Single Player Mode (available but in testing)</li>
            </ul>
            <h4>Future tasks</h4>
            <ul>
                <li>Adding online multiplayer</li>
                <li>Creating a mobile application version (Android & IOS)</li>
            </ul>
            <p><a href="index.php">Back to Game</a></p>
        </main>

        <!-- External JS -->
        <script src="./js/main.js" type="module"></script>
        <script src="./js/LevelStaticObject.js" type="module"></script>
        <script src="./js/Level.js" type="module"></script>
        <script src="./js/Level_Creation.js" type="module"></script>
        <script src="jQuery.js"></script> <!-- JQuery Import-->

        <!-- BootStrap 4 Import -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
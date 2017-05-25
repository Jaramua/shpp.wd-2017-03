<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="media\style\index_style.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body onload="clientLogs()">
<div class="container">
    <form action="login.php" method="post">
        <p>Easy Chat</p>
        <label><b>Enter your name</b></label><br>
        <input type="text" name="name"><br>
        <label><b>Enter your password</b></label><br>
        <div class="heal"></div>
        <input type="password" name="password"><br>
        <div class="field">
            <input type="submit" name="submit" value="Submit">
        </div>
        <span class="error"><?php if (isset($_SESSION['error'])) {
                echo $_SESSION['error'];
                unset($_SESSION['error']);
            } ?>
			</span>
    </form>
</div>
</body>
</html>

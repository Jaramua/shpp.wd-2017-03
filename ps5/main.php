<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main_style.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Pacifico">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <title>Chat</title>
</head>
<body>
<div class="logaut">
    <form name="form1" method="post" action="logout.php">
        <input name="logout" type="submit" id="submit2" value="log out">
    </form>
</div>
<div class="container">
    <div class="welcome">
        <div class="logo">Easy Chat</div>
        <div class="welc-name">Welcome <?php if (!empty($_SESSION['username'])) {
                echo $_SESSION['username'];
            } ?></div>
    </div>
    <div class="chat-window" id="chat"></div>
    <div class="input-window">
        <form action="main_getting_data.php" method="post">
            <input type="text" id="message" name="message" placeholder="Type your message here...">
            <input type="submit" id="send" name="submit" value="Sent">
        </form>
    </div>
</div>
<script type="text/javascript" src="script.js"></script>
</body>
</html>

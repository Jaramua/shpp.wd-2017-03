<?php

session_start();
//include("main.php");

?>

<!DOCTYPE html>
<html lang="en">
<title></title>
<link rel="stylesheet" type="text/css" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
<body>
<div class="container" >
    <form action="main.php" method="post" name="form" class="form" >
        <span class="error"><?php if(isset($_SESSION['ip_err'])){
                echo $_SESSION['ip_err'];
                unset($_SESSION['ip_err']);
            }?></span>
        IP address: <input  id="ip" name="ip"><br>
        <span class="error"><?php if(isset($_SESSION['email_err'])){
                echo $_SESSION['email_err'];
                unset($_SESSION['email_err']);
            }?></span>
        E-mail: <input id="email" type="text" name="email"><br>
        <span class="error"><?php if(isset($_SESSION['url_err'])){
                echo $_SESSION['url_err'];
                unset($_SESSION['url_err']);
            }?></span>
        URL: <input id="url" type="text" name="url"><br>
        <span class="error"><?php if(isset($_SESSION['date_err'])){
                echo $_SESSION['date_err'];
                unset($_SESSION['date_err']);
            }?></span>
        Date(format: MM/DD/YYYY): <input id="date" type="text" name="date"><br>
        <span class="error"><?php if(isset($_SESSION['time_err'])){
                echo $_SESSION['time_err'];
                unset($_SESSION['time_err']);
            }?></span>
        Time(format: HH:MM:SS): <input id="time" type="text" name="time"><br>


        <input type="submit" value="Submit">
        <span class="error"><?php if(isset($_SESSION['error'])){
                echo $_SESSION['error'];
                unset($_SESSION['error']);
            }?></span>
    </form>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>

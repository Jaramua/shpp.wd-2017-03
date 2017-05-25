<?php

session_start();
include 'log.php';
require 'connect_db.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: index.php');
}


$name = $password = "";
$err = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ((empty($_POST['name'])) || (empty($_POST['password']))) {
        $err = 'Please, provide your name and password';
        $_SESSION['error'] = $err;
        $emptyData = 'User' . ' ' . 'with ip' . ' ' . $_SERVER['REMOTE_ADDR']
            . ' ' . 'did not provide required data for registration or authorization '.PHP_EOL;
        error_handler($emptyData);
        header('Location: index.php');
    } else {
        $name = test_input($_POST["name"]);
        $password = test_input($_POST["password"]);
        $_SESSION['username'] = $name;

        $select = "SELECT * FROM users WHERE name = '$name' OR password = '$password'";
        $result = mysqli_query($conn, $select);


        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                if ($row['name'] == $name && $row['password'] == $password) {
                    $_SESSION['id'] = $row['id'];
                    $logInLog = 'User' . ' ' . $name . ' '
                        . 'with ip' . ' ' . $_SERVER['REMOTE_ADDR']
                        . ' ' . 'logged in'.PHP_EOL;
                    error_handler($logInLog);
                    header('Location: main.php');
                } else if ($row['name'] == $name && $row['password'] != $password) {
                    $err = 'Wrong password';
                    $_SESSION['error'] = $err;
                    $wrongPassword = 'User' . ' ' . $name . ' '
                        . 'with ip' . ' ' . $_SERVER['REMOTE_ADDR']
                        . ' ' . 'entered wrong password'.PHP_EOL;
                    error_handler($wrongPassword);
                    header('Location: index.php');
                }
            }
        } else {

            $sql = mysqli_prepare($conn, "INSERT INTO users (name, password) VALUES (?, ?)");
            mysqli_stmt_bind_param($sql, 'ss', $name, $password);
            mysqli_stmt_execute($sql);
            mysqli_stmt_close($sql);
            $newUser = 'User' . ' ' . $name . ' '
                . 'with ip' . ' ' . $_SERVER['REMOTE_ADDR']
                . ' ' . 'registered'.PHP_EOL;
            error_handler($newUser);
            header('Location: main.php');
        }
    }
}
function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

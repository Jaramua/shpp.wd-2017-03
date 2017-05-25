<?php

session_start();
include 'log.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: index.php');
}

require 'connect_db.php';
$name = $_SESSION['username'];

$select = "SELECT id FROM users WHERE name = '$name'";
$result = mysqli_query($conn, $select);
$row = mysqli_fetch_assoc($result);
$_SESSION['id'] = $row['id'];
$id = $_SESSION['id'];


if(isset($_POST['msg'])) {

    $message = $_POST['msg'];

    $sql = mysqli_prepare($conn, "INSERT INTO messages (message, user_id) VALUES (?, ?)");
    mysqli_stmt_bind_param($sql, 'si', $message, $id);
    mysqli_stmt_execute($sql);
    mysqli_stmt_close($sql);
    $insertMessageLog = 'User' . ' ' . $name . ' ' . 'with ip'
        . ' ' . $_SERVER['REMOTE_ADDR'] . ' ' . 'wrote a message:' . $message.PHP_EOL;
    error_handler($insertMessageLog);
    header('Location: main.php');

}
mysqli_close($conn);

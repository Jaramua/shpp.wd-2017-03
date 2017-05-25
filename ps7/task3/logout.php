<?php
session_start();
include 'log.php';

$logOutLog = 'User' . ' ' . $_SESSION['username'] . ' '
    . 'with ip' . ' ' . $_SERVER['REMOTE_ADDR']
    . ' ' . 'logged out'.PHP_EOL;
error_handler($logOutLog);
session_unset();
session_destroy();
header("location:index.php");


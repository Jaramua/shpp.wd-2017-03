<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: index.php');
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chat";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} 

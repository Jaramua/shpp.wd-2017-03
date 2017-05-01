<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: login.php');
}

$name = $password = "";
$err = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (empty($_POST['name'])) {
        $err = 'Please, provide your name';
        $_SESSION['error'] = $err;
        header('Location: index.php');
    } else if (empty($_POST['password'])) {
        $err = 'Please, provide your password';
        $_SESSION['error'] = $err;
        header('Location: index.php');
    } else if ((empty($_POST['name'])) && (empty($_POST['password']))) {
        $err = 'Please, provide your name and password';
        $_SESSION['error'] = $err;
        header('Location: index.php');
    } else {

        // $name = test_input($_POST["name"]);
        // $password = test_input($_POST["password"]);
        $name = ($_POST["name"]);
        $password = ($_POST["password"]);

        $arr = array();
        $jsonFile = 'users.json';

        if (file_exists($jsonFile)) {
            $users = file_get_contents($jsonFile);
            $arr = json_decode($users, true);
        }

        if (isset($arr[$name]) && $arr[$name] == $password) {
            $_SESSION['username'] = $name;
            header('Location: main.php');
        } else if (isset($arr[$name]) && $arr[$name] != $password) {
            $err = 'WRONG!!!!!WRONG PASWWORDDDDDDDD!!!!!!!';
            $_SESSION['error'] = $err;
            header('Location: index.php');
        } else {
            $arr[$name] = $password;
            header('Location: main.php');
        }

        $data = json_encode($arr);
        file_put_contents($jsonFile, $data);
        // header('Content-Type: application/json');
        // echo $data;
    }
}

// function test_input($data)
// {
//     $data = trim($data);
//     $data = stripslashes($data);
//     $data = htmlspecialchars($data);
//     return $data;
// }

?>


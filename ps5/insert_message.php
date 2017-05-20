<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: index.php');
}

$jsonFile = 'messages.json';

$time = time();
if (!empty($_POST['msg'])) {
    $message = $_POST['msg'];
    $userName = $_SESSION['username'];
    $arr_msg = array('time' => $time, 'user' => $userName, 'message' => $message);

    if (file_exists($jsonFile)) {
        $data = file_get_contents($jsonFile);
        $arr_data = json_decode($data, true);
    }

    $arr_data[] = $arr_msg;
    $data = json_encode($arr_data);
    file_put_contents($jsonFile, $data);
}

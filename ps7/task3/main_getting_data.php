<?php

session_start();

require 'connect_db.php';

date_default_timezone_set("Europe/Kiev");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: index.php');
}

if (isset($_POST['id'])) {
    $indicator = $_POST['id'];

    $select = "SELECT messages.id as message_id, 
               TIME(time) as time, name, message FROM messages
               JOIN users ON messages.user_id = users.id 
               WHERE messages.id > '$indicator'
               AND time >= DATE_SUB(NOW(), interval 1 hour);";
    $result = mysqli_query($conn, $select);
    $arr = array();
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = array(
                'time' => $row['time'],
                'user' => $row['name'],
                'text' => $row['message'],
                'message_id' => $row['message_id']
            );
        }
    }
    header('Content-Type: application/json');
    echo json_encode($arr);
}
mysqli_close($conn);


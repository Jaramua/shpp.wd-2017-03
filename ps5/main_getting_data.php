<?php

session_start();
date_default_timezone_set("Europe/Kiev");

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: login.php');
}

$jsonFile = 'messages.json';

$time = time();
if(isset($_POST)) {
    $output = array();
    $data = file_get_contents($jsonFile);
    $decode = json_decode($data, true);
    foreach ($decode as $key) {
        if (time() - $key['time'] < 3600) {
            $happy = ":)";
            $sad = ":(";
            $key['message'] = str_replace($happy, '<img src="emoticons/happy.png">', $key['message']);
            $key['message'] = str_replace($sad, '<img src="emoticons/sad.png">', $key['message']);
            $output[] = array('['.date("H:i:s", $key['time']).'] ',
                               '<b>'.$key['name'].'<b>'.': ',
                                $key['message'] . '<br>' . '<br>'
                             );
        }
    }
    header('Content-Type: application/json');
    echo json_encode($output);
}






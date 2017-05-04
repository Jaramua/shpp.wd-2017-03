<?php

session_start();
date_default_timezone_set("Europe/Kiev");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: login.php');
}

$jsonFile = 'messages.json';

$time = time();
if (isset($_POST)) {
    $output = array();

    $data = file_get_contents($jsonFile);
    $decode = json_decode($data, true);


    $secondArr[] = end($decode);

    if ($_POST['timestamp']) {

        foreach ($decode as $key) {
            if ($key['time'] > $_POST['timestamp']) {
                $happy = ":)";
                $sad = ":(";
                $key['message'] = str_replace($happy, '<img src="emoticons/happy.png">', $key['message']);
                $key['message'] = str_replace($sad, '<img src="emoticons/sad.png">', $key['message']);
                $message = '[' . date("H:i:s", $key['time']) . '] ' . '<b>' . $key['name'] . '<b>' . ': ' . $key['message'] . '<br>' . '<br>';

                $output[] = array(
                    'time' => $key['time'],
                    'message' => $message
                );
            }
        }
        header('Content-Type: application/json');
        echo json_encode($output);
        die();
    }

    foreach ($decode as $key) {
        if (time() - $key['time'] < 3600) {
            $happy = ":)";
            $sad = ":(";
            $key['message'] = str_replace($happy, '<img src="emoticons/happy.png">', $key['message']);
            $key['message'] = str_replace($sad, '<img src="emoticons/sad.png">', $key['message']);

            $message = '[' . date("H:i:s", $key['time']) . '] ' . '<b>' . $key['name'] . '<b>' . ': ' . $key['message'] . '<br>' . '<br>';

            $output[] = array(
                'time' => $key['time'],
                'message' => $message
            );

        } else {
            if (end($decode) == $key) {
                foreach ($secondArr as $keys) {
                    $happy = ":)";
                    $sad = ":(";
                    $key['message'] = str_replace($happy, '<img src="emoticons/happy.png">', $key['message']);
                    $key['message'] = str_replace($sad, '<img src="emoticons/sad.png">', $key['message']);
                    $message = '[' . date("H:i:s", $key['time']) . '] ' . '<b>' . $key['name'] . '<b>' . ': ' . $key['message'] . '<br>' . '<br>';

                    $output[] = array(
                        'message' => $message,
                        'time' => $keys['time']
                    );
                }

            }

        }
    }

    header('Content-Type: application/json');
    echo json_encode($output);

}






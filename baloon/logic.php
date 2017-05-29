<?php

session_start();

$arr = array();
$jsonFile = 'messages.json';

if(isset($_POST['data'])){

    $data = $_POST['data'];
    $jsonData = file_get_contents($jsonFile);
    $arr = json_decode($jsonData, true);

    $bool = false;
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i]['id'] == $data['id']) {
            $bool = true;
            $arr[$i]['text'] = $data['text'];
            $arr[$i]['left'] = $data['left'];
            $arr[$i]['top'] = $data['top'];
        }
    }

    $jsonData = json_encode($arr, JSON_PRETTY_PRINT);
    file_put_contents($jsonFile, $jsonData);

    if(!$bool) {
        $arr[] = $data;
        $jsonData = json_encode($arr, JSON_PRETTY_PRINT);
        file_put_contents($jsonFile, $jsonData);
    }

} else {

    if (file_exists($jsonFile )) {
        $jsonData = file_get_contents($jsonFile);
    }

    header('Content-Type: application/json');
    echo $jsonData;
}
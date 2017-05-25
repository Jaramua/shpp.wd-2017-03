<?php
date_default_timezone_set("Europe/Kiev");
function error_handler($info) {
    $date = date(' Y-m-d H:i:s');
    $errors_txt = 'errors.txt';
    $output = '[' . $date .']' . $info;
    file_put_contents($errors_txt, $output, FILE_APPEND);
}
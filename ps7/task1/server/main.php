<?php

session_start();
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Location: index.php');
}

$err = '';
$valid_ip = $valid_email = $valid_url = $valid_date = $valid_time = '';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $ip = $_POST['ip'];
        $email = $_POST['email'];
        $url = $_POST['url'];
        $date = $_POST['date'];
        $time = $_POST['time'];

        if (preg_match('/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/', $ip)) {
            $valid_ip = $ip;
        } else {
            $ip_err = 'invalid ip';
            $_SESSION['ip_err'] = $ip_err;
            header('Location: index.php');
        }

        if (preg_match('/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i',
            $email)) {

            $valid_email = $email;
        } else {
            $email_err = 'invalid email';
            $_SESSION['email_err'] = $email_err;
            header('Location: index.php');
        }

        if (preg_match('/\b(?:(?:https?):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*'.
            '[-a-z0-9+&@#\/%=~_|]/i', $url)){
            $valid_url = $url;
        } else {
            $url_err = 'invalid url';
            $_SESSION['url_err'] = $url_err;
            header('Location: index.php');
        }
        if (preg_match('/^(\d{2})(\/|-)(\d{2})(\/|-)(\d{4})$/', $date)) {
            $valid_date = $date;
        } else {
            $date_err = 'invalid date';
            $_SESSION['date_err'] = $date_err;
            header('Location: index.php');
        }
        if (preg_match('/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/', $time)) {
            $valid_time = $time;
        } else {
            $time_err = 'invalid time';
            $_SESSION['time_err'] = $time_err;
            header('Location: index.php');
        }

        if ((strlen($valid_ip)>0)&&(strlen($valid_email)>0)
            &&(strlen($valid_url)>0)&&(strlen($valid_date)>0) && $valid_time>0 ) {
            header("Location: welcome.php");
        } else {}
}
?>
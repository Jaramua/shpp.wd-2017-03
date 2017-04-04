<?php

function task1()
{
    $count = 0;
    for ($i = -1000; $i <= 1000; ++$i) {
        $count += $i;
    }
    echo $count;
}

function task2()
{
    $count = 0;
    $a = range(-1000, 1000);
    foreach ($a as $x) {
        if ($x % 2 == 0 ||
            $x % 3 == 0 ||
            $x % 7 == 0) {
            $count = $count + $x;
        }
    }
    echo $count;
}


function task3()
{

    $num = "";
    for ($i = 0; $i <= 10; $i++) {
        for ($x = 0; $x <= $i; $x++) {
            $num .= "*";
        }
        $num .= "<br/>";
    }
    echo $num;
}    



function task4()
{
   if (isset($_POST['task4'])) {
        if (!empty($_POST['row']) && !empty($_POST['col'])) {
            $n1 = $_POST['row'];
            $n2 = $_POST['col'];
        } else {
            echo "You entered nothing";
            return;
        }
        for ($row = 1; $row <= $n1; $row++) {
            echo "<tr>";
            for ($col = 1; $col <= $n2; $col++) {
                if (($row + $col) % 2 == 0) {
                    echo "<td height=20px width=20px bgcolor=#FFFFFF></td>";
                } else {
                    echo "<td height=20px width=w0px bgcolor=#000000></td>";
                }
            }
            echo "</tr>";
        }
    }
}

function task5()
{
    if (isset($_POST['task5'])) {
        if (!empty($_POST['number'])) {
            $num = $_POST['number'];
        } else {
            echo "Make your input!!!";
            return false;
        }
        $sum = array_sum(str_split($num));
        return $sum;
    }
}    

include "index.html";

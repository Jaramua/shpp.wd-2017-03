<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <title>Task 1</title>
    <style>
        table {
            border-collapse: collapse;
            table-layout: fixed;
        }
        td {
            min-width: 20px;
            min-height: 20px;
        }

    </style>
</head>
<body>
    <div>
        <h1>Task 1</h1>
        <p><?php task1(); ?></p>
    </div>
    <div>
        <h1>Task 2</h1>
        <p><?php task2(); ?></p>
    </div>
    <div>
        <h1>Task 3</h1>
        <p><?php task3(); ?></p>
    </div>
    <div>
        <h1>Task 4</h1>
        <form action="" method="post">
            <p>First number:</p>
            <input name="row" type="number"
            min="1" max="50">
            <p>Second number:</p>
            <input name="col" type="number"
            min="1" max="50"><br><br>
            <input name="task4" type="submit" value="Submit">
        </form><br>
        <table  cellspacing="0px" cellpadding="0px" border="1px">
            <?php task4();?>
        </table>
    </div>
    <div>
        <h1>Task 5</h1>
        <form action="main.php" method="post">
            <p>Enter your number:</p>
            <input name="number" type="number" min="1">
            <p><?php echo task5(); ?></p> 
            <input name="task5" type="submit" value="Click!">
        </form>
    </div>
</body>
</html>

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
    for ($i = 0; $i <= 50; $i++) {
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
                echo "<td height=20px width=20px bgcolor=#000000></td>";
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



<?php 

session_start();

$race = "";
$err = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["race"])) {
		$err = "Choose your race or die!!!!";
		$_SESSION['error'] = $err;
		header('Location: index.php');
	} else {
		$race = ($_POST["race"]);


	$arr = array();
	$jsonFile = "data.json";

	$data = file_get_contents($jsonFile);
	$arr = json_decode($data, true);

	if (isset($arr[$race])) {
		$arr[$race]++;
	} else {
		$arr[$race] = 1;
	}

	$data = json_encode($arr);
	file_put_contents($jsonFile, $data);

	header('Content-Type: application/json');
	echo $_SESSION[$data];

	if ((isset($_POST['submit'])) && (!empty($_POST["race"]))) {

		header('Location: output.php');
		
	}
}
}
?>

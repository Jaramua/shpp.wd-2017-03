<?php  
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pset4</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Marcellus+SC" rel="stylesheet">
</head>
<body>
<div class="container">
	<form action="main.php" method="post">
		<h3>Choose your race</h3><br>
		<label for="human"><input type="radio" id="human" name="race" value="human">Human</label><br>
		<label for="orc"><input type="radio" id="orc" name="race" value="orc">Orc</label><br>
		<label for="elf"><input type="radio" id="elf" name="race" value="elf">Elf</label><br>
		<label for="troll"><input type="radio" id="troll" name="race" value="troll">Troll</label><br>
		<label for="dwarf"><input type="radio" id="cobol" name="race" value="dwarf">Dwarf</label><br><br>
		<span class="error"><?php if(isset($_SESSION['error'])){
			echo $_SESSION['error'];
			unset($_SESSION['error']);   
		}?></span>
		<input type="submit" name="submit" value="Submit"><br>
	</form>
</div>
</body>
</html>
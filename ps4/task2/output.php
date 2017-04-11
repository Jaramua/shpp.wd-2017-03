<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Statictics</title>
</head>

<body style="height: auto">

	<div id="chartDiv"></div>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript">
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
			$.get('data.json', "",
				function(data){
					var i;
					var arr = [];
					for (i in data) {
						arr.push([i, data[i]]);
					}
					    output(arr);
					}).fail(function(data){
						$('#chartDiv').text('Sorry, but you have to vote first');
					});
		}
		function output(info) {

				var data = new google.visualization.DataTable();
				data.addColumn('string', 'Race');
				data.addColumn('number', 'Votes');
				data.addRows(info);
				var options = {
				    title: 'Race popularity',
					width: 1100,
					height: 800
				};
				var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
				chart.draw(data, options);
		}
		</script>

</body>
</html>

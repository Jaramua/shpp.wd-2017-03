function sum()
{
    var count = 0;
    for (var i = -1000; i <= 1000; i++)
    {
        count = count + i;
    }
    return count;
}

function sum1()
{
    var count = 0;
    for (var i = -1000; i <= 1000; i++)
    {
    	if (i % 2 == 0 ||
    		i % 3 == 0 ||
    		i % 7 == 0 )
    	{
    		count = count + i;
    	}
    }
    return count;
}

function pyramid()
{
	var num = "";
    for (var i = 0; i <= 10; i++)
    {
      for(var x = 0; x <= i; x++) {
        num += "*";
    }
    num += "<br/>";
    }
    document.getElementById("task3").innerHTML = num;
}

function converter()
{
	var a = Number(document.getElementById("seconds").value);

	var hour = Math.floor(a / 3600);
	var sec = a - (hour * 3600);
	var min = Math.floor(sec / 60);
	var sec = sec - (min * 60);

	if (hour < 10) {
    hour = "0" + hour;
    }

    if (min < 10) {
    min = "0" + min;
    }

    if (sec < 10) {
    sec = "0" + sec;
    }
	document.getElementById("task4").innerHTML = hour + ":" + min + ":" + sec;
}

function age()
{
	var n = Number(document.getElementById("age").value);
	//ternary operator
    document.getElementById("task5").innerHTML = "Мне " + n + (n % 10 > 4 || n % 10 < 1 || n % 100 / 10 == 1 ? " лет":( n % 10 > 1 ? " года":" год"));
}

function time()
{
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);

  var interval = date2 - date1;

  if (!date1.getTime() || !date2.getTime()) {

    document.getElementById("task6").innerHTML = "Please, fill in all fields!";
    return false;
  } else if (interval < 0) {

    document.getElementById("task6").innerHTML = "Wrong input! First date should be initial!";
    return false;
  }

  var milsecPerMinute = 1000 * 60;
  var milsecPerHour = milsecPerMinute * 60;
  var milsecPerDay = milsecPerHour * 24;
  var milsecPerMonth = milsecPerDay * 30;
  var milsecPerYear = milsecPerDay * 365;

  var years = Math.floor(interval / milsecPerYear);
  interval = interval - (years * milsecPerYear);

  var months = Math.floor(interval / milsecPerMonth);
  interval = interval - (months * milsecPerMonth);

  var days = Math.floor(interval / milsecPerDay);
  interval = interval - (days * milsecPerDay);

  var hours = Math.floor(interval / milsecPerHour);
  interval = interval - (hours * milsecPerHour);

  var minutes = Math.floor(interval / milsecPerMinute);
  interval = interval - (minutes * milsecPerMinute);

  var seconds = Math.floor(interval / 1000);

  document.getElementById("task6").innerHTML = "Между датами прошло: "+ years + " лет, " +
                                                months + " месяцев, " + days + " дней, "
                                                + hours + " часов, " + seconds + " секунд, ";
}

function zodiac()
{
	var date = document.znak_zodiac.your_date.value;
	var month = document.znak_zodiac.your_month.selectedIndex;

		if (month==1 && date>=20 || month==2 && date<=18)
			document.getElementById("task7").innerHTML = "Aquarius";
		else if (month==2 && date>=19 || month==3 && date<=20)
			document.getElementById("task7").innerHTML = "Pisces";
		else if (month==3 && date>=21 || month==4 && date<=19)
			document.getElementById("task7").innerHTML = "Aries";
		else if (month==4 && date>=20 || month==5 && date<=20)
			document.getElementById("task7").innerHTML = "Taurus";
		else if (month==5 && date>=21 || month==6 && date<=21)
			document.getElementById("task7").innerHTML = "Gemini";
		else if (month==6 && date>=22 || month==7 && date<=22)
			document.getElementById("task7").innerHTML = "Cancer";
		else if (month==7 && date>=23 || month==8 && date<=22)
			document.getElementById("task7").innerHTML = "Leo";
		else if (month==8 && date>=23 || month==9 && date<=22)
			document.getElementById("task7").innerHTML = "Virgo";
		else if (month==9 && date>=23 || month==10 && date<=22)
			document.getElementById("task7").innerHTML = "Libra";
		else if (month==10 && date>=23 || month==11 && date<=21)
			document.getElementById("task7").innerHTML = "Scorpio";
		else if (month==11 && date>=22 || month==12 && date<=21)
			document.getElementById("task7").innerHTML = "Sagittarius";
		else if (month==12 && date>=22 || month==1 && date<=19)
			document.getElementById("task7").innerHTML = "Capricorn";
		else console.log("Wrong input!");
}

function board()
{
	var n1 = Number(document.getElementById("n1").value);
  	var n2 = Number(document.getElementById("n2").value);

  	elements = "<table border='1'>";

	for (var i = 1; i <= n1; i++) {
	    elements +="<tr>";
	      for (var j = 1; j <= n2; j++) {
	        if ((i + j) % 2 != 0) {
	          elements += "<td bgcolor='white' width='20' height='20'></td>";
	        } else {
	          elements += "<td bgcolor='black' width='20' height='20'></td>";
	        }
	      }
	      elements += "</tr>";
	    }

	    elements += "</table>";
    document.getElementById("task8").innerHTML = elements;

}

function flat()
{
  var flat = Number(document.getElementById("flat").value);
  var enter = Number(document.getElementById("enter").value);
  var flat_amount = Number(document.getElementById("flat_amount").value);
  var floors = Number(document.getElementById("floors").value);

  var total_flat = flat_amount * floors;
  var res_enter = (((flat - 1) / total_flat + 1) | 0);
  var dec_portion = ((flat - 1) / total_flat + 1) - Math.floor((flat - 1) / total_flat + 1);
  var res_floors = ((dec_portion * floors + 1) | 0);

  document.getElementById("task9").innerHTML = "Floor: " + res_floors + " Section: " + res_enter;
}

function num_sum()
{
	var n = Number(document.getElementById("n").value);
	var sum = 0;

	while (n) {
	   sum += n % 10;
	   n = Math.floor(n / 10);
	}

  document.getElementById("task10").innerHTML = sum;
}

function txtArea()
{
  var link = document.getElementById("txt_area").value;
  var array = link.split(',');

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/^https?\:\/\//i, "");
}

  array.sort();

  var list = '<ul>';

  for (var j = 0; j < array.length; j++)
  {
    list += '<li>'+ array[j] + '</li>';
  }

  list +='</ul>';
  document.getElementById("task11").innerHTML = list;
}

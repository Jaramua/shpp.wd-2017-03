function sum() {
    var count = 0;
    for (var i = -1000; i <= 1000; i++) {
        count = count + i;
    }
    return count;
}

function sum1() {
    var count = 0;
    for (var i = -1000; i <= 1000; i++) {
        if (i % 2 == 0 ||
            i % 3 == 0 ||
            i % 7 == 0) {
            count = count + i;
        }
    }
    return count;
}

function pyramid() {
    var num = "";
    for (var i = 0; i <= 10; i++) {
        for (var x = 0; x <= i; x++) {
            num += "*";
        }
        num += "<br/>";
    }
    document.getElementById("task3").innerHTML = num;
}

function converter() {
    var a = Number(document.getElementById("seconds").value);

    var hour = Math.floor(a / 3600);
    var min = Math.floor((a - (hour * 3600)) / 60);
    var sec = Math.floor(a - (hour * 3600) - (min * 60));

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById("task4").innerText = hour + ":" + min + ":" + sec;
}

function age() {
    var n = Number(document.getElementById("age").value);
    //ternary operator
    var a = n % 10;
    var b = n % 100 / 10;
    document.getElementById("task5").innerText = "Мне " + n + (a > 4 || a < 1
        || b == 1 ? " лет" :
            ( a > 1 ? " года" : " год"));
}

function time() {
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);

    var interval = date2 - date1;

    if (!date1.getTime() || !date2.getTime()) {

        document.getElementById("task6").innerText = "Пожалуйсте, будьте так добры и заполните все поля";
        return false;
    } else if (interval < 0) {

        document.getElementById("task6").innerText = "Первая дата должна быть меньше второй";
        return false;
    }

    var seconds = interval / 1000;
    var secondsInOneDay = 86400;
    var years = Math.floor(seconds / secondsInOneDay / 365);
    seconds %= secondsInOneDay * 365;
    var months = Math.floor(seconds / secondsInOneDay / 30);
    seconds %= secondsInOneDay * 30;
    var days = Math.floor(seconds / secondsInOneDay);
    seconds %= secondsInOneDay;
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    var arr = [];
    arr.push(years, months, days, hours, minutes, seconds);

    document.getElementById("task6").innerText = "Между датами прошло: " + years + " год(лет), " +
        months + " месяц(ев), " + days + " день(дней), "
        + hours + " час(ов), " + minutes + " минут(а), "
        + seconds + " секунд(а), ";
}

function zodiac() {
    var today = new Date(document.getElementById("date_zod").value);
    var day = today.getDate();
    var month = today.getMonth();
    var signs = ["Козерог", "Водолей", "Рыбы", "Овен",
        "Телец", "Близнецы", "Рак", "Лев", "Дева",
        "Весы", "Скорпион", "Стрилец"];
    var result = "";

    switch (month) {
        case 0: {
            if (day < 20) {
                result = signs[0] + '<img src="images/Capricorn.jpg" alt="Capricorn">';
            } else {
                result = signs[1] + '<img src="images/Aquarius.jpg" alt="Aquarius">';
            }
        }
            break;

        case 1: {
            if (day < 19) {
                result = signs[1] + '<img src="images/Aquarius.jpg" alt="Aquarius">';
            } else {
                result = signs[2] + '<img src="images/Pisces.jpg" alt="Pisces">';
            }
        }
            break;

        case 2: {
            if (day < 21) {
                result = signs[2] + '<img src="images/Pisces.jpg" alt="Pisces">';
            } else {
                result = signs[3] + '<img src="images/Aries.jpg" alt="Aries">';
            }
        }
            break;

        case 3: {
            if (day < 20) {
                result = signs[3] + '<img src="images/Aries.jpg" alt="Aries">';
            } else {
                result = signs[4] + +'<img src="images/Taurus.jpg" alt="Taurus">';
            }
        }
            break;

        case 4: {
            if (day < 21) {
                result = signs[4] + '<img src="images/Taurus.jpg" alt="Taurus">';
            } else {
                result = signs[5] + '<img src="images/Gemini.jpg" alt="Gemini">';
            }
        }
            break;

        case 5: {
            if (day < 21) {
                result = signs[5] + '<img src="images/Gemini.jpg" alt="Gemini">';
            } else {
                result = signs[6] + '<img src="images/Cancer.jpg" alt="Cancer">';
            }
        }
            break;

        case 6: {
            if (day < 23) {
                result = signs[6] + '<img src="images/Cancer.jpg" alt="Cancer">';
            } else {
                result = signs[7] + '<img src="images/Leo.jpg" alt="Leo">';
            }
        }
            break;

        case 7: {
            if (day < 23) {
                result = signs[7] + '<img src="images/Leo.jpg" alt="Leo">';
            } else {
                result = signs[8] + '<img src="images/Virgo.jpg" alt="Virgo">';
            }
        }
            break;

        case 8: {
            if (day < 23) {
                result = signs[8] + '<img src="images/Virgo.jpg" alt="Virgo">';
            } else {
                result = signs[9] + '<img src="images/Libra.jpg" alt="Libra">';
            }
        }
            break;

        case 9: {
            if (day < 23) {
                result = signs[9] + '<img src="images/Libra.jpg" alt="Libra">';
            } else {
                result = signs[10] + '<img src="images/Scorpio.jpg" alt="Scorpio">';
            }
        }
            break;

        case 10: {
            if (day < 22) {
                result = signs[10] + '<img src="images/Scorpio.jpg" alt="Scorpio">';
            } else {
                result = signs[11] + '<img src="images/Sagittarius.jpg" alt="Sagittarius">';
            }
        }
            break;

        case 11: {
            if (day < 22) {
                result = signs[11] + '<img src="images/Sagittarius.jpg" alt="Sagittarius">';
            } else {
                result = signs[0] + '<img src="images/Capricorn.jpg" alt="Capricorn">';
            }
        }
            break;
    }
    document.getElementById("task7").innerHTML = result;
}

function board() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    if (n1 < 0 || n2 < 0 || n1 > 50 || n2 > 50 || isNaN(n1) || isNaN(n2)) {
        document.getElementById("task8").innerText = "Пожалуйста, введите числа больше 0 и меньше 50";
        return false;
    } else if (!n1 || !n2) {
        document.getElementById("task8").innerText = "Пожалуйста, заполните оба поля";
        return false;
    }

    var elements = "<table border='1'>";

    for (var i = 1; i <= n1; i++) {
        elements += "<tr>";
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

function flat() {
    var number = Number(document.getElementById("number").value);
    var entrances = Number(document.getElementById("entrances").value);
    var flatsPerFloors = Number(document.getElementById("flatsPerFloors").value);
    var floors = Number(document.getElementById("floors").value);
    var big = floors * flatsPerFloors * entrances;

    if (number <= 0 || number > big) {
        document.getElementById("task9").innerText = "Некорректный номер квартиры";
        return false;
    } else if (isNaN(number) || isNaN(entrances) || isNaN(flatsPerFloors) || isNaN(floors)) {
        document.getElementById("task9").innerText = "Введены некорректные данные";
        return false;
    }

    var floor = Math.ceil(number / flatsPerFloors);
    var entrance = Math.ceil(floor / floors);
    floor -= (entrance - 1) * floors;

    document.getElementById("task9").innerText = "Этаж: " + floor + "Номер парадной: " + entrance;
}

function num_sum() {
    var n = Math.abs(Number(document.getElementById("n").value));
    var sum = 0;

    if (isNaN(n)) {
        document.getElementById("task10").innerText = "Введено некоректное число";
        return false;
    }

    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    document.getElementById("task10").innerText = "Сумма: " + sum;
}

function txtArea() {
    var input = document.getElementById("inputData").value;
    var links = input.split(',');

    for (var i in links) {
        links[i] = links[i].replace(/^https?\:\/\//i, "");
        links = links.sort();
    }
    var linkList = "<ul>";
    for (var j = 0; j < links.length; j++) {
        linkList += "<li>" + links[j] + "</li>";
    }
    linkList += "</ul>";
    document.getElementById("task11").innerHTML = linkList;
}

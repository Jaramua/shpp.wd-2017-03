indicator = 0;

$(document).ready(function () {

    setInterval(getMsg, 1000);

    $("#send").click(function (e) {
        e.preventDefault();
        $.post('insert_message.php', {msg: $("#message").val()});
        $("#message").val("");
        $(".chat-window").stop().animate({ scrollTop: $(".chat-window")[0].scrollHeight}, 1000);
    });

    function getMsg() {
        $.post("main_getting_data.php", {id: indicator}, function (data) {
            var key;
            var table = [];
            for (key in data) {
                table.push([data[key].time, data[key].user, data[key].text]);
                indicator = parseInt(data[key].message_id);
            }
            for (var i = 0; i < table.length; i++) {

                table[i][0] = '[' + table[i][0] + ']';
                table[i][1] = '<b>' + table[i][1] + '</b>' + ": ";
                table[i] = table[i].join(" ") + '<br /><br />';
                table[i] = table[i].replace(/:\)/g, '<img src="media/emoticons/happy.png">');
                table[i] = table[i].replace(/:\(/g, '<img src="media/emoticons/sad.png">');
            }
            var chat = $(".chat-window");
            chat.append(table);

        });
        if ($(".chat-window").length){
            $(".chat-window").stop().animate({ scrollTop: $(".chat-window")[0].scrollHeight}, 1000);
        }
    }
});

function clientLogs() {
    console.group('Browser information');
    console.log('code name of the browser:' + navigator.appCodeName);
    console.log('name of the browser:' + navigator.appName);
    console.log('version information of the browser:' + navigator.appVersion);
    console.log('whether cookies are enabled in the browser:' + navigator.cookieEnabled);
    console.log('language of the browser:' + navigator.language);
    console.log('whether the browser is online:' + navigator.onLine);
    console.log('language of the browser:' + navigator.language);
    console.log('whether the browser is online:' + navigator.onLine);
    console.log('which platform the browser is compiled:' + navigator.platform);
    console.log('engine name of the browser:' + navigator.product);
    console.log('user-agent header sent by the browser to the server:' + navigator.userAgent);
    console.groupEnd();
    console.group('Screen information');
    console.log("Screen Width:" + screen.width);
    console.log('Screen Height:' + screen.height);
    console.log('Available Screen Width:' + screen.availWidth);
    console.log('Available Screen Height:'+ screen.availHeight);
    console.log('Screen Color Depth:' + screen.colorDepth);
    console.log('Screen Pixel Depth:'+ screen.pixelDepth);
    console.groupEnd();

    console.group('time information');
    var offset = new Date();
    console.log("user time:" + offset);
    console.groupEnd();

    console.group('geolocation information');
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");;
        }
    }
    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);;
    }
        getLocation();
    console.groupEnd();
}
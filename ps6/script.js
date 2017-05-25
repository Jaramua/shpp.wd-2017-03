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
            console.log(data);
        });
        $(".chat-window").stop().animate({ scrollTop: $(".chat-window")[0].scrollHeight}, 1000);
    }

});

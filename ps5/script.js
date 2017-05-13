var messages = [];

$(document).ready(function () {

    setInterval(getMsg, 1000);

    $("#send").click(function (e) {
        e.preventDefault();
        $.post('insert_message.php', {msg: $("#message").val()});
        $("#message").val("");
        $(".chat-window").stop().animate({ scrollTop: $(".chat-window")[0].scrollHeight}, 1000);
    });

    function getMsg() {
        var time = 0;

        if (messages[messages.length - 1] && messages[messages.length - 1].time) {
            time = messages[messages.length - 1].time;
        }

        $.post('main_getting_data.php', {timestamp: time}, function (data) {
            $chat = $(".chat-window");
            $chat.html('');

            for (var i = 0; i < data.length; i++) {
                messages.push(data[i]);
            }

            for (var i = 0; i < messages.length; i++) {
                $(".chat-window").append(messages[i].message);
                // $('#chat').scrollTop($('#chat')[0].scrollHeight);

            }  
               
        });
    }

});
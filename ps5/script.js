$(document).ready(function () {

    setInterval(getMsg, 1000);

    $("#send").click(function (e) {
        e.preventDefault();
        $.post('insert_message.php', {msg: $("#message").val()});
        $("#message").val("");
        $(".chat-window").stop().animate({ scrollTop: $(".chat-window")[0].scrollHeight}, 1000);
    });

    function getMsg() {
       
        $.post('main_getting_data.php', '', function (data) {
            $chat = $(".chat-window");
            $chat.html('');

            var i;

            for (i = 0; i < data.length; i++) {
                $(".chat-window").append(data[i]);
            }
        });
    }

});

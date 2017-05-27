var idplus = localStorage.getItem("idplus");
$(document).ready(function () {

    $.get("logic.php", function (data) {
        var fon = $("#fon");

        for (key in data) {
            var id = data[key].id;
            var text = data[key].text;
            var left = data[key].left;
            var top = data[key].top;
            var baloon = '<div id="'+ id + '" class="drag" style="top:'+ top+'px; left:'+ left+'px">'+text+'</div>';
            fon.append(baloon);
            fon.children().draggable({
                containment: "#fon",
                scroll: false,
                stop: function(event, ui){
                    var text = $(this).text();
                    var id = $(this).attr('id');
                    postData(ui, id, text);
                }
            });
        }


        console.log(data[0].text);
    });



    var id = $(("#draggable" + idplus)).attr('id');
	$('#fon').dblclick(function(e) {
        idplus++;
        var x = e.pageX + 'px';
        var y = e.pageY + 'px';
        var baloon = '<div id="draggable' + idplus + '" class="drag"></div>';
        $(this).append(baloon);
        $("#draggable" + idplus).css({
            "position": "absolute",
            "top": y,
            "left": x
        }).draggable({
            containment: "#fon",
            scroll: false,
            stop: function(event, ui){
                var text = $(this).text();
                var id = $(this).attr('id');
                postData(ui, id, text);
            }
        });
        localStorage.setItem("idplus", idplus);
    });

    $('#fon').on("dblclick", ".drag", (function(e){
            e.stopPropagation();
            var text = $(this).text();
            var input = '<input type="text" class="dynamic_input" >';
            $(this).html(input);
            $(".dynamic_input").val(text).focus();

        })
    );

    $('#fon').on("keydown", ".dynamic_input", (function(e){
            e.stopPropagation();
            if(e.keyCode == 13){
                var text = $(this).val();

                var divPos = $(this).parent().offset();
                var parent = $(this).parent();
                console.log(parent);
                var elem = '<p>' + text +'</p>';
                $(this).parent().append(elem);
                console.log(parent);

                var id = $(this).parent().attr('id');
                var top = divPos.top;
                var left = divPos.left;

                var jData = {
                    'id': id,
                    'text': text,
                    'left': left,
                    'top': top
                };
                $.post('logic.php', {data: jData});

                $(this).hide();

            }
            if (e.which == 27){
                console.log('esc');
                var text = $(this).val();
                $(this).hide();
            }
        })
    );

    $('#fon').on("dblclick", ".dynamic_input", (function(e){
        e.stopPropagation();
    }));

    $('#fon').on("focusout", ".dynamic_input", function (e) {
        e.stopPropagation();
        var text = $(this).val();
        if(!text){
            $(this).parent().text(text).hide();
        }
    });

});



function postData(ui, id, text) {
    console.log(id);
    var left = ui.position.left;
    var top = ui.position.top;
    var jData = {
        'id': id,
        'text': text,
        'left': left,
        'top': top
    };

    $.post('logic.php', {data: jData});
}

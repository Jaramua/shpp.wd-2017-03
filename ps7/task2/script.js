$(document).ready(function () {

    $("#submit").on('click', function (e) {
        e.preventDefault();
        var checkboxValue = '';
        var text = $("#text").val();
        var regex = $("#regex").val();
        if (text && regex) {
            var checked = new RegExp(regex, checkboxValue);
            if (checked.test(text)) {
                if ($('#g').prop('checked')) {
                    checkboxValue += $('#g').val();
                }
                if ($('#m').prop('checked')) {
                    checkboxValue += $('#m').val();
                }
                if ($('#i').prop('checked')) {
                    checkboxValue += $('#i').val();
                }

                console.log(regex, checkboxValue);
                var result = text.replace(checked, function (string) {
                    return '<mark style="border:1px solid red">' + string + '</mark>';
                });
                $("#result").html(result);
            } else {
                $("#result").html('yor text does`t match any regular expression');
            }
        } else {
            var error = 'Please, fill in both fields';
            document.getElementById("error_box").innerHTML = error;
        }
    })
});


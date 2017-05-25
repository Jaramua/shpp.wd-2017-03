$(document).ready(function () {

    var checkIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    var checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    var checkDate = /^(\d{2})(\/|-)(\d{2})(\/|-)(\d{4})$/;
    var checkTime = new RegExp('^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$');

    function validate(form) {
        var ip = form.ip.value;
        var email = form.email.value;
        var url = form.url.value;
        var date = form.date.value;
        var time = form.time.value;

        var errors = [];

        if (!checkIp.test(ip)) {
            errors[errors.length] = "Please enter a valid ip";
        }
        if (!checkEmail.test(email)) {
            errors[errors.length] = "Please enter a valid email";
        }
        if (!checkUrl.test(url)) {
            errors[errors.length] = "Please enter a valid url";
        }
        if (!checkDate.test(date)) {
            errors[errors.length] = "Please enter a valid date";
        }
        if (!checkTime.test(time)) {
            errors[errors.length] = "Please enter a valid time";
        }
        if (errors.length > 0) {
            reportErrors(errors);
            return false;
        }

    }



    function reportErrors(errors) {
        var msg = "Please Enter Valide Data...\n";
        for (var i = 0; i < errors.length; i++) {
            var numError = i + 1;
            msg += "\n" + numError + ". " + errors[i];
        }
        alert(msg);
    }
})
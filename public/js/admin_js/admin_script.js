$(document).ready(function() {
    $('#current_password').keyup(function() {
        var checkPass = $('#current_password').val();
        $.ajax({
            type: 'post',
            url: '/admin/check-current-pass',
            data: { current_password: checkPass },
            success: function(res) {
                if (res == false) {
                    $('#checkPwd').html("<font color=red>Current password does not match</font>");
                } else if (res == true) {
                    $('#checkPwd').html("<font color=green>Current password is matched</font>");
                }
            },
            error: function() {
                alert("error");
            }
        });
    });
});
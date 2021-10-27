// const { ajax } = require("jquery");

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

    $('.SectionStatus').click(function() {
        var status = $(this).text();
        var section_id = $(this).attr('section_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-section-status',
            data: { status: status, section_id: section_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#section-' + section_id).html("<a class='SectionStatus' href='javascript:void(0)'>Inactive</a>");
                } else if (res['status'] == 1) {
                    $('#section-' + section_id).html("<a class='SectionStatus' href='javascript:void(0)'>Active</a>");
                }
            },
            error: function() {
                alert('Problem');
            }
        });
    });
});
// const { ajax } = require("jquery");

$(document).ready(function() {

    //current password check
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
    //update section status
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

    //Update Categories Status
    $('.CategoryStatus').click(function() {
        var status = $(this).text();
        var category_id = $(this).attr('category_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-category-status',
            data: { status: status, category_id: category_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#category-' + category_id).html("<a class='CategoryStatus' href='javascript:void(0)'>Inactive</a>");
                } else if (res['status'] == 1) {
                    $('#category-' + category_id).html("<a class='CategoryStatus' href='javascript:void(0)'>Active</a>");
                }
            },
            error: function() {
                alert('Problem');
            }
        });
    });

    //Appand Categories Level

    $('#section_id').change(function() {
        var section_id = $(this).val();
        $.ajax({
            method: 'POST',
            url: '/admin/appand-categories-level',
            data: { section_id: section_id },
            success: function(resp) {
                $('#appandCategoriesLevel').html(resp);
            },
            error: function() {
                alert('problem');
            }
        });
    });
    $('.category_image_delete').click(function() {
        var category_id = $(this).attr('category_id');
        //$('#image_section').hide();
        $.ajax({
            method: 'POST',
            url: '/admin/delete-category-image',
            data: { category_id: category_id },
            success: function() {
                $('#image_section').hide();
                alert("Category Image Successfully!");
            },
            error: function() {
                alert('problem');
            }
        })
    });

});
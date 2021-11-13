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
    //Delete Category Image
    $('.category_image_delete').click(function() {
        var category_id = $(this).attr('category_id');
        //$('#image_section').hide();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#44bd32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    method: 'POST',
                    url: '/admin/delete-category-image',
                    data: { category_id: category_id },
                    success: function() {
                        $('#image_section').hide();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Category image has been deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    },
                    error: function() {
                        alert('problem');
                    }
                });
            }
        });

    });
    //Delete Sweet Alert
    $('.confirmDelete').click(function() {
        var record = $(this).attr('record');
        var recordurl = $(this).attr('recordurl');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#44bd32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Category has been deleted.',
                //     'success'
                // )
                window.location.href = '/admin/delete-' + record + '/' + recordurl;
            }
        })
    });
    $('.ConfirmDelete').click(function() {
        var record = $(this).attr('record');
        var recordurl = $(this).attr('recordurl');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#44bd32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    method: 'GET',
                    url: '/admin/delete-' + record + '/' + recordurl,
                    data: { recordurl: recordurl },
                    success: function(res) {
                        $('#' + recordurl).fadeOut(1000, function() {
                            $(this).hide();
                            $('.msg').append("<div class='alert alert-success alert-dismissible fade show' role='alert'>" + res['success_msg'] +
                                "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                                "<span aria-hidden='true'>&times;</span>" +
                                "</button>" +
                                +"</div>");
                        });
                    },
                    error: function() {
                        alert('problem');
                    }
                });
            }
        });

    });

    //Update Product Status 
    $('.ProductStatus').click(function() {
        var status = $(this).text();
        var product_id = $(this).attr('product_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-product-status',
            data: { status: status, product_id: product_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#product-' + product_id).html("<a class='ProductStatus' href='javascript:void(0)'>Inactive</a>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product status Inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#product-' + product_id).html("<a class='ProductStatus' href='javascript:void(0)'>Active</a>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product status Active successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            },
            error: function() {
                alert('Problem');
            }
        });
    });

});
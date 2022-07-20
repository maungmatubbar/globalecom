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
    //Logout function
    $('.logout').click(function() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you logout?!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#44bd32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    method: 'post',
                    url: '/admin/logout',
                    success: function() {
                        Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your are logged out successfully!',
                                showConfirmButton: false,
                                timer: 1500
                            }),
                            location.reload();
                    },
                    error: function() {
                        alert('problem');
                    }
                });
            }
        });
    });
    //update section status
    $('.SectionStatus').click(function() {
        var status = $(this).children("i").attr("status");
        var section_id = $(this).attr('section_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-section-status',
            data: { status: status, section_id: section_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#section-' + section_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                } else if (res['status'] == 1) {
                    $('#section-' + section_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                }
            },
            error: function() {
                alert('Problem');
            }
        });
    });

    //Update Categories Status
    $('.CategoryStatus').click(function() {
        var status = $(this).children("i").attr("status");
        var category_id = $(this).attr('category_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-category-status',
            data: { status: status, category_id: category_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#category-' + category_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                } else if (res['status'] == 1) {
                    $('#category-' + category_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
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
    $(document).on("click", ".ConfirmDelete", function() { //for delete table second and other pages
        //$('.ConfirmDelete').click(function() {
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
                    method: 'post',
                    url: '/admin/delete-product',
                    data: { recordurl: recordurl },
                    success: function(res) {
                        $('#tablerow-' + recordurl).fadeOut(1000, function() {
                            $(this).hide();
                            $('.msg').append("<div class='alert alert-success alert-dismissible fade show' role='alert'>" + res['success'] +
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
        var status = $(this).children("i").attr("status");
        var product_id = $(this).attr('product_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-product-status',
            data: { status: status, product_id: product_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#product-' + product_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product status Inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#product-' + product_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
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
    //Delete Product Image
    $('.product_image_delete').click(function() {
        var product_id = $(this).attr('product_id');
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
                    url: '/admin/delete-product-image',
                    data: { product_id: product_id },
                    success: function() {
                        $('#image_section').hide();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Product image has been deleted successfully!',
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
    $('.deleteItem').click(function() {
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
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
                    method: "get",
                    url: '/admin/delete-product-' + record + '/' + record_id,
                    data: { product_id: record_id },
                    success: function(res) {
                        $('.video_sction').hide();
                        Swal.fire(
                            'Deleted!',
                            res,
                            'success'
                        );
                    },
                    error: function() {
                        alert("Problem");
                    }
                });
                //window.location.href = '/admin/delete-' + record + '/' + recordurl;
            }
        })
    });


    //add attributes
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = '<div class="mt-2"><input type="text" id="size" name="size[]" value="" placeholder="Size" required/>&nbsp;<input type="text" id="sku" name="sku[]" value="" placeholder="SKU" required/>&nbsp;<input type="text" id="price" name="price[]" value="" placeholder="Price" required/>&nbsp;<input type="text" id="stock" name="stock[]" value="" placeholder="Stock" required/> <a href="javascript:void(0);" class="remove_button"> <i class="fas fa-minus"></div>'; //New input field html 
    var x = 1; //Initial field counter is 1

    //Once add button is clicked
    $(addButton).click(function() {
        //Check maximum number of input fields
        if (x < maxField) {
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });

    //Delete Table Row
    $('.deleteTableRow').click(function() {
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
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
                    method: "get",
                    url: '/admin/delete-product-' + record + '/' + record_id,
                    data: { attribute_id: record_id },
                    success: function(res) {
                        $('#tableRow-' + record_id).fadeOut(1000, function() {
                            $(this).hide();
                            $('.msg').append("<div class='alert alert-success alert-dismissible fade show' role='alert'>" + res['success_msg'] +
                                "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                                "<span aria-hidden='true'>&times;</span>" +
                                "</button>" +
                                +"</div>");
                        });
                    },
                    error: function() {
                        alert("Problem");
                    }
                });
                //window.location.href = '/admin/delete-' + record + '/' + recordurl;
            }
        })
    });
    //Update Status
    $('.status').click(function() {
        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product ' + record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product ' + record + ' status active successfully!',
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

    // Multiple images preview in browser
    function previewImages() {

        var $preview = $('#preview').empty();
        if (this.files) $.each(this.files, readAndPreview);

        function readAndPreview(i, file) {

            if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                return alert(file.name + " is not an image,Please select another one .jpeg,.jpg or .png");
            } // else...

            var reader = new FileReader();

            $(reader).on("load", function() {
                $preview.append($("<img/>", { src: this.result, height: 100, width: 70 }));
            });

            reader.readAsDataURL(file);

        }

    }
    $('#file-input').on("change", previewImages);

    $('.brandstatus').click(function() {
        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
    $('.update_shipping_status').click(function() {
        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'get',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
    $('.DeleteTableRow1').click(function() {
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
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
                    method: "get",
                    url: '/admin/delete-' + record + '/' + record_id,
                    data: { attribute_id: record_id },
                    success: function(res) {
                        $('#tableRow-' + record_id).fadeOut(1000, function() {
                            $(this).hide();
                            $('.msg').append("<div class='alert alert-success alert-dismissible fade show' role='alert'>" + res['success_msg'] +
                                "<button class='close' data-dismiss='alert'>" +
                                "<span aria-hidden='true'>&times;</span>" +
                                "</button>" +
                                +"</div>");
                        });
                    },
                    error: function(res) {
                        alert("Problem");
                    }
                });
                //window.location.href = '/admin/delete-' + record + '/' + recordurl;
            }
        })
    });
    //Coupon Automatic and Manual show/hide Coupon Field
    $('#AutomaticCoupon').click(function() {
        $('#couponField').hide();
    });
    $('#ManualCoupon').click(function() {
        $('#couponField').show();
    });
    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
        //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })
        //Money Euro
    $('[data-mask]').inputmask()

    //Update Order Status for Shipped
    $('#courier_name').hide();
    $('#tracking_number').hide();
    $('#order_status').on('change', function() {
        if ($(this).val() == "Shipped") {
            $('#courier_name').show();
            $('#tracking_number').show();
        } else {
            $('#courier_name').hide();
            $('#tracking_number').hide();
        }
    });
    //Update User status
    $('.userStatus').click(function() {
        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
    //Update User status
    $('.pagestatus').click(function() {
        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
    //Update admin status
    $(document).on('click', '.updateAdminStatus', function() {

        var status = $(this).children('h4').children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'get',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<h4><i class='fas fa-toggle-off' status='Inactive'></i></h4>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<h4><i class='fas fa-toggle-on' status='Active'></i></h4>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
    //Update Currency Status
    $(document).on('click', '.updateCurrencyStatus', function() {

        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'get',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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

    //Update Rating Status
    $(document).on('click', '.updateRatingStatus', function() {

        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'get',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
    //Update Newletter Status
    $(document).on('click', '.SubscriberStatus', function() {

        var status = $(this).children("i").attr("status");
        var record = $(this).attr('record');
        var record_id = $(this).attr('record_id');
        $.ajax({
            type: 'post',
            url: '/admin/update-' + record + '-status',
            data: { status: status, record_id: record_id },
            success: function(res) {
                if (res['status'] == 0) {
                    $('#status-' + res.record_id).html("<i class='fas fa-toggle-off' status='Inactive'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status inactive successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res['status'] == 1) {
                    $('#status-' + res.record_id).html("<i class='fas fa-toggle-on' status='Active'></i>");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: record + ' status active successfully!',
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
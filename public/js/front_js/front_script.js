$(document).ready(function() {
    // $('#sort').on('change', function() {
    //     this.form.submit();
    // });
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('#sort').on('change', function() {
        var sort = $(this).val();
        var url = $('#url').val();
        var fabric = get_filters("fabric");
        // @ts-ignore
        $.ajax({
            method: "post",
            url: url,
            data: { sort: sort, url: url, fabric: fabric },
            success: function(data) {
                $('.filter_products').html(data);
            }

        });
    });
    //sidebar user choose filters
    $('.fabric').on('click', function() {
        var fabric = get_filters('fabric');
        var sleeve = get_filters('sleeve');
        var pattern = get_filters('pattern');
        var fit = get_filters('fit');
        var occasion = get_filters('occasion');
        var sort = $('#sort option:selected').val();
        var url = $('#url').val();
        // @ts-ignore
        $.ajax({
            method: "post",
            url: url,
            data: { fabric: fabric, sleeve: sleeve, pattern: pattern, fit: fit, occasion: occasion, sort: sort, url: url },
            success: function(data) {
                $('.filter_products').html(data);
            }

        });
    });
    $('.sleeve').on('click', function() {
        var fabric = get_filters('fabric');
        var sleeve = get_filters('sleeve');
        var pattern = get_filters('pattern');
        var fit = get_filters('fit');
        var occasion = get_filters('occasion');
        var sort = $('#sort option:selected').val();
        var url = $('#url').val();
        // @ts-ignore
        $.ajax({
            method: "post",
            url: url,
            data: { fabric: fabric, sleeve: sleeve, pattern: pattern, fit: fit, occasion: occasion, sort: sort, url: url },
            success: function(data) {
                $('.filter_products').html(data);
            }

        });
    });
    $('.pattern').on('click', function() {
        var fabric = get_filters('fabric');
        var sleeve = get_filters('sleeve');
        var pattern = get_filters('pattern');
        var fit = get_filters('fit');
        var occasion = get_filters('occasion');
        var sort = $('#sort option:selected').val();
        var url = $('#url').val();
        // @ts-ignore
        $.ajax({
            method: "post",
            url: url,
            data: { fabric: fabric, sleeve: sleeve, pattern: pattern, fit: fit, occasion: occasion, sort: sort, url: url },
            success: function(data) {
                $('.filter_products').html(data);
            }

        });
    });
    $('.fit').on('click', function() {
        var fabric = get_filters('fabric');
        var sleeve = get_filters('sleeve');
        var pattern = get_filters('pattern');
        var fit = get_filters('fit');
        var occasion = get_filters('occasion');
        var sort = $('#sort option:selected').val();
        var url = $('#url').val();
        // @ts-ignore
        $.ajax({
            method: "post",
            url: url,
            data: { fabric: fabric, sleeve: sleeve, pattern: pattern, fit: fit, occasion: occasion, sort: sort, url: url },
            success: function(data) {
                $('.filter_products').html(data);
            }

        });
    });
    $('.occasion').on('click', function() {
        var fabric = get_filters('fabric');
        var sleeve = get_filters('sleeve');
        var pattern = get_filters('pattern');
        var fit = get_filters('fit');
        var occasion = get_filters('occasion');
        var sort = $('#sort option:selected').val();
        var url = $('#url').val();
        // @ts-ignore
        $.ajax({
            method: "post",
            url: url,
            data: { fabric: fabric, sleeve: sleeve, pattern: pattern, fit: fit, occasion: occasion, sort: sort, url: url },
            success: function(data) {
                $('.filter_products').html(data);
            }

        });
    });

    function get_filters(class_name) {
        var filter = [];
        $('.' + class_name + ':checked').each(function() {
            filter.push($(this).val());
        });
        return filter;
    }

    //get Price details page
    $('#getPrice').change(function() {
        var size = $(this).val();
        var product_id = $(this).attr('product-id');
        if (size == "") {
            alert("Please select size.");
            return false;
        }
        $.ajax({
            url: '/get-product-price',
            type: 'post',
            data: { size: size, product_id: product_id },
            success: function(resp) {
                if (resp['discount'] > 0) {
                    $('.getAttrPrice').html("<del style='color:red'> Tk." + resp['price'] + "<del>");
                    $('.discountedPrice').html("<h5> Discount Price TK." + resp['final_price'] + "</h5>");
                } else {
                    $('.getAttrPrice').html("<h5>TK." + resp['price'] + "</h5>");
                }
            },
            error: function(resp) {
                alert(resp)
            }
        })
    });
    //Update Cart Items

    $(document).on('click', '.btnItemUpdate', function() {
        //if qtyMinus button gets clicked by user
        if ($(this).hasClass('qtyMinus')) {
            var quantity = $(this).prev().val();
            if (quantity <= 1) {
                alert("Item quantity must be 1 or greater!");
                return false;
            } else {
                new_qty = parseInt(quantity) - 1;
            }
        }
        // if qtyPlus button gets clicked by user
        if ($(this).hasClass('qtyPlus')) {
            var quantity = $(this).prev().prev().val();
            new_qty = parseInt(quantity) + 1;
        }
        var cartid = $(this).data('cartid');
        $.ajax({
            data: { 'cartid': cartid, 'qty': new_qty },
            url: 'update-cart-item-qty',
            type: 'post',
            success: function(resp) {
                if (resp.status == false) {
                    alert(resp.message);
                }
                $(".totalCartItems").html(resp.totalCartItems);
                $("#AppendCartItems").html(resp.view);
            },
            error: function(resp) {
                alert("Error");
            }
        });
    });

    //Delete Cart Item
    $(document).on('click', '.btnItemDelete', function() {
        //if qtyMinus button gets clicked by user
        var cartid = $(this).data('cartid');
        // if qtyPlus button gets clicked by user
        var result = confirm("Are You sure delete this item?");
        if (result) {
            $.ajax({
                data: { 'cartid': cartid },
                url: '/delete-cart-item',
                type: 'post',
                success: function(resp) {
                    $(".totalCartItems").html(resp.totalCartItems);
                    $("#AppendCartItems").html(resp.view);
                },
                error: function(resp) {
                    alert("Error");
                }
            });
        }

    });
    //User validation
    $("#registerForm").validate({
        rules: {
            name: "required",
            mobile: {
                required: true,
                digits: true,
                minlength: 11,
            },
            email: {
                required: true,
                email: true,
                remote: 'check-email'
            },
            password: {
                required: true,
                minlength: 6
            }

        },
        messages: {
            name: "Please enter your name",
            mobile: {
                required: "Please enter your mobile number",
                digits: "Please enter digits",
                minlength: "Please enter 11 digits of mobile number",

            },
            email: {
                required: "Please enter your email address",
                email: "Please enter valid email address",
                remote: "Email already exists!"
            },
            password: {
                required: "Please choose your password",
                minlength: "Your password must be at least 6 characters long"
            },


        }
    });
    //User Login Validation
    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 6
            }

        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter valid email address",
            },
            password: {
                required: "Enter your password",
                minlength: "Your password must be at least 6 characters long"
            },


        }
    });
    //Account Validation
    $("#accountForm").validate({
        rules: {
            name: "required",
            address: "required",
            mobile: {
                required: true,
                digits: true,
                minlength: 11,
            },
            email: {
                required: true,
                email: true,
                remote: 'check-email'
            },

        },
        messages: {
            name: "Please enter your name",
            address: "Please enter your address",
            mobile: {
                required: "Please enter your mobile number",
                digits: "Please enter digits",
                minlength: "Please enter 11 digits of mobile number",

            },
            email: {
                required: "Please enter your email address",
                email: "Please enter valid email address",
                remote: "Email already exists!"
            },
        }
    });
    //Check User Current Password
    $('#currentPassword').keyup(function() {
        var currentPwd = $(this).val();
        $.ajax({
            type: 'post',
            url: '/check-user-pwd',
            data: { current_password: currentPwd },
            success: function(resp) {
                if (resp == "false") {
                    $('#chkPwd').html("<font color='red'>Your password is incorrect <font>");
                } else {
                    $('#chkPwd').html("<font color='green'>Your password is correct <font>");
                }

            },
            error: function(resp) {
                alert('error');
            }

        });
    });
    //User password Validation
    $("#passwordForm").validate({
        rules: {
            currentPassword: {
                required: true,
                minlength: 6,
                maxlength: 12
            },
            newPassword: {
                required: true,
                minlength: 6,
                maxlength: 12
            },
            confirmPassword: {
                required: true,
                minlength: 6,
                maxlength: 12,
                equalTo: "#newPassword"
            }

        },
    });
    //Coupom Code Add
    $('#ApplyCoupon').submit(function() {
        var user = $(this).attr('user');
        if (user == 1) {
            ///
        } else {
            alert("Please login to apply coupon!");
            return false;
        }
        var code = $('#code').val();
        $.ajax({
            type: 'post',
            url: '/apply-coupon',
            data: { code: code },
            success: function(resp) {
                if (resp.message != "") {
                    alert(resp.message);
                }
                $(".totalCartItems").html(resp.totalCartItems);
                $("#AppendCartItems").html(resp.view);
                if (resp.couponAmount >= 0) {
                    $('.couponAmount').text("Tk." + resp.couponAmount);
                }
                if (resp.grand_total) {
                    $('.grand_total').text("Tk." + resp.grand_total);
                }


            },
            error: function() {
                alert('Error');
            }

        });
    });
    //Delete Delivery Address
    $('.deliveryDelete').click(function() {
        var record_id = $(this).attr('record_id');
        var result = confirm('Want to delete this address?');
        if (!result) {
            return false;
        } else {
            $.ajax({
                method: 'get',
                url: '/delete-delivery-address/' + record_id,
                data: { id: record_id },
                success: function(resp) {
                    $('#tableRow-' + record_id).fadeOut(1000, function() {
                        $(this).hide();
                    });
                    $('.message').html("<div class='alert alert-success'>" + resp.success_message + "</div>");
                },
                error: function() {
                    alert('error');
                }

            });
        }
    });
    //Calculate Shipping Charges and Update Grand Total
    $("input[name=address_id]").bind('change', function() {
        var shipping_charges = $(this).attr("shipping_charges");
        var total_price = $(this).attr("total_price");
        var coupon_amount = $(this).attr("coupon_amount");
        var codpincodeCount = $(this).attr("codpincodeCount");
        var prepaidpincodeCount = $(this).attr("prepaidpincodeCount");
        if (codpincodeCount > 0) {
            //Show COD Method
            $('.codMethod').show();
        } else {
            //Hide COD Method
            $('.codMethod').hide();
        }
        if (prepaidpincodeCount > 0) {
            //Show Prepaid Method
            $('.prepaidMethod').show();
        } else {
            //Hide Prepaid Method
            $('.prepaidMethod').hide();
        }
        if (coupon_amount == "") {
            coupon_amount = 0;
        }

        $('.shipping_charges').html('TK.' + shipping_charges);
        var grand_total = parseInt(total_price) + parseInt(shipping_charges) - parseInt(coupon_amount);
        $('.grand_total').html('Tk.' + grand_total);
    });
    //Check Pincode for Delivery
    $('#checkPincode').click(function() {
        var pincode = $('#pincode').val();
        if (pincode == "") {
            alert("Please enter delivery pincode");
        }
        $.ajax({
            type: 'post',
            url: '/check-pincode',
            data: { pincode: pincode },
            beforeSend: function() {
                $('.pincode_error').text('');
                $('.pincode_success').text('');
            },
            success: function(resp) {
                if (resp.status == 0) {
                    $.each(resp.error, function(key, value) {
                        $('p.' + key + '_error').text(value[0]);
                    });
                } else if (resp.status == 1) {
                    $('.pincode_error').text(resp.message);
                } else {
                    $('.pincode_success').text(resp.message);
                }

            },
            error: function(resp) {
                alert('Error');
            }
        })
    });
});
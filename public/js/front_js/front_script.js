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
                    $('.getAttrPrice').html(resp['price']);
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
});
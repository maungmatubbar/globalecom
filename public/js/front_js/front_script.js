$(document).ready(function() {
    // $('#sort').on('change', function() {
    //     this.form.submit();
    // });
    $()
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


});

//Pagination
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Stack Developers online Shopping cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        
        <!-- Front style -->
        <link id="callCss" rel="stylesheet" href="{{ url('css/front_css/front.min.css') }}" media="screen"/>
        <link href="{{ url('css/front_css/base.css') }}" rel="stylesheet" media="screen"/>
        <!-- Front style responsive -->
        <link href="{{ url('css/front_css/front-responsive.min.css') }}" rel="stylesheet"/>
        <link href="{{ url('css/front_css/font-awesome.css') }}" rel="stylesheet" type="text/css">
        <!-- Google-code-prettify -->
        <link href="{{ url('js/front_js/google-code-prettify/prettify.css') }}" rel="stylesheet"/>
        <!-- fav and touch icons -->
        <link rel="shortcut icon" href="{{ asset('/') }}images/front_images/ico/favicon.ico">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-57-precomposed.png">
        <style type="text/css" id="enject"></style>
    </head>
    <body>
        @include('layouts.front_layout.front_header');
    <!-- Header End====================================================================== -->
        @include('front.banners.home_page_banner')
    <div id="mainBody">
        <div class="container">
            <div class="row">
                <!-- Sidebar ================================================== -->
                @include('layouts.front_layout.front_sidebar')
                <!-- Sidebar end=============================================== -->
                @yield('content')
            </div>  
        </div>
    </div>
    <!-- Footer ================================================================== -->
    @include('layouts.front_layout.front_footer')
    <!-- Placed at the end of the document so the pages load faster ============================================= -->
    <script src="{{ url('js/front_js/jquery.js') }}" type="text/javascript"></script>
    <script src="{{ url('js/front_js/front.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('js/front_js/google-code-prettify/prettify.js') }}"></script>

    <script src="{{ url('js/front_js/front.js') }}"></script>
    <script src="{{ url('js/front_js/front_script.js') }}"></script>
    <script src="{{ url('js/front_js/jquery.lightbox-0.5.js') }}"></script>
     {{-- <script type="text/javascript">
        $(window).on('hashchange', function() {
            if (window.location.hash) {
                var page = window.location.hash.replace('#', '');
                if (page == Number.NaN || page <= 0) {
                    return false;
                }else{
                    getData(page);
                }
            }
        });
        
        $(document).ready(function()
        {
            $(document).on('click', '.pagination a',function(event)
            {
                event.preventDefault();
      
                $('li').removeClass('active');
                $(this).parent('li').addClass('active');
      
                var myurl = $(this).attr('href');
                var page=$(this).attr('href').split('page=')[1];
                var url = $('#url').val();
                
                getData(page,url);
            });
      
        });
      
        function getData(page,url){
            console.log(url);
            $.ajax(
            {
                url: '?sort=lowest_price_first&page=' + page,
                type: "get",
                datatype: "html",
                data:{url:url},
            }).done(function(data){
                $("#filter_products").empty().html(data);
                location.hash = page;
            }).fail(function(jqXHR, ajaxOptions, thrownError){
                  alert('No response from server');
            });
        }
    </script>  --}}
    </body>
</html>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Ecom BD Developers Online Cloth Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Front style -->
        <link id="callCss" rel="stylesheet" href="{{ url('css/front_css/front.min.css') }}" media="screen"/>
        <link href="{{ url('css/front_css/base.css') }}" rel="stylesheet" media="screen"/>
        <!-- Front style responsive -->
        <link href="{{ url('css/front_css/front-responsive.min.css') }}" rel="stylesheet"/>
        <link href="{{ url('css/front_css/font-awesome.css') }}" rel="stylesheet" type="text/css">
        <!-- Google-code-prettify -->
        <link href="{{ url('js/front_js/google-code-prettify/prettify.css') }}" rel="stylesheet"/>
        <!-- fav and touch icons -->
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
        <link rel="shortcut icon" href="{{ asset('/') }}images/front_images/ico/favicon.ico">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="{{ asset('/') }}images/front_images/ico/apple-touch-icon-57-precomposed.png">
        <style type="text/css" id="enject"></style>
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=62cf80ecebc31f0019d5bda1&product=sticky-share-buttons' async='async'></script>
    </head>
    <body>
        @include('layouts.front_layout.front_header')
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
    <script src="{{ url('js/front_js/jquery.validate.js') }}" type="text/javascript"></script>
    <script src="{{ url('js/front_js/front.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('js/front_js/google-code-prettify/prettify.js') }}"></script>

    <script src="{{ url('js/front_js/front.js') }}"></script>
    <script src="{{ url('js/front_js/front_script.js') }}"></script>
    <script src="{{ url('js/front_js/jquery.lightbox-0.5.js') }}"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/62d035697b967b1179998bfd/1g7ul1a6q';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
    </script>
    <!--End of Tawk.to Script-->
  <!--<script type="text/javascript">
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
                getData(page);
            });
      
        });
      
        function getData(page){
            var url = $('#url').val();
            console.log(url);
            $.ajax(
            {
                url: '?page=' + page,
                method: "get",
                datatype:'html',
                data:{url:url},
                success:function(data){
                    $("#filter_products").html(data);
                    location.hash = page;
                }
            });
        }
        getData(1);
    </script>  -->
    </body>
</html>
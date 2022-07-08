<!--?php 
    use App\Section;
    $sections = Section::sections();
?-->
<div id="header">
    <div class="container">
        <div id="welcomeLine" class="row">
            <div class="span6">Welcome!<strong> To Customer</strong></div>
            <div class="span6">
                <div class="pull-right">
                    <a href="{{ url('cart') }}"><span class="btn btn-mini btn-primary"><i class="icon-shopping-cart icon-white"></i> [ <span class="totalCartItems">{{ totalCartItems() }}</span> ] Items in your cart </span> </a>
                </div>
            </div>
        </div>
        <!-- Navbar ================================================== -->
        <section id="navbar sticky-top">
            <div class="navbar">
                <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="{{ url('/') }}">ECOM Shop BD</a>
                    <div class="nav-collapse">
                    <ul class="nav">
                        <li class="{{ Request::path()=='/'?'active':'' }}"><a href="{{ url('/') }}">Home</a></li>
                        @foreach ($sections as $key=>$section)
                            <li class="dropdown {{ $section->id==Session::get('section_id')?'active':'' }}">
                                @if(count($section->categories) > 0)
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ $section->name }} <b class="caret"></b>
                                    </a>
                                    <ul class="dropdown-menu">
                                        @foreach ($section->categories as $category)
                                            <li class="divider"></li>
                                            <li class="nav-header">
                                                <a href="{{ url($category->url) }}">{{ $category->category_name }}</a>
                                            </li>
                                            @foreach ( $category->subcategories as $subcategory )
                                                <li>
                                                    <a href="{{ url($subcategory->url) }}">{{ $subcategory->category_name }}</a>
                                                </li>
                                            @endforeach
                                        @endforeach
                                    </ul>
                                @endif
                            </li>
                        @endforeach
                        <li><a href="#">About</a></li>
                    </ul>
                    <form class="navbar-search pull-left" action="{{ url('/search-products') }}" method="post">
                        @csrf
                        <input type="text" name="search" class="search-query span2" placeholder="Search"/>
                        <button type="submit" class="search_btn">Go</button>
                    </form>
                    <ul class="nav pull-right">
                        
                        <li class="divider-vertical"></li>
                        @if(Auth::check())
                            <li class="dropdown"><a href="{{ url('/account') }}">My Account</a></li>
                            <li class="divider-vertical"></li>
                            <li><a href="{{ url('orders') }}">Orders</a></li>
                            <li class="divider-vertical"></li>
                            <li>
                                <a href="{{ url('/logout') }}"><i class="icon-signout"></i>Logout</a>
                            </li>
                        @else
                            <li><a href="{{ url('login-register') }}">Login / Register</a></li>
                        @endif
                    </ul>
                    </div><!-- /.nav-collapse -->
                </div>
                </div><!-- /navbar-inner -->
            </div><!-- /navbar -->
        </section>
    </div>
</div>
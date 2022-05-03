<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <!--<img src="{{asset('/')}}images/admin_images/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
      <span class="brand-text font-weight-light"> <strong>E-commerce Admin</strong></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{asset('/images/admin_images/admin_photos').'/'.Auth::guard('admin')->user()->image}}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ ucwords(Auth::guard('admin')->user()->name) }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            @if(Session::get('page')=="dashboard")
            <?php $active = 'active'; ?>
            @else 
            <?php $active="";?>
            @endif
          <li class="nav-item">
            <a href="{{ url('/admin/dashboard') }}" class="nav-link {{ $active }}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <!--Settings-->
          @if(Session::get('page')=="settings" || Session::get('page')=="update-admin-info")
          <?php $active = 'active'; $menuopen = 'menu-open'; ?>
          @else 
          <?php $active=""; $menuopen=''; ?>
          @endif
          <li class="nav-item has-treeview {{ $menuopen }}">
            <a href="#" class="nav-link {{ $active }}">
              <i class="fas fa-th"></i>
              <p>
                Settings
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              @if(Session::get('page')=="update-admin-info")
                <?php $active = 'active'; ?>
                @else 
                <?php $active="";?>
                @endif
              <li class="nav-item">
                <a href="{{ url('/admin/update-admin-info') }}" class="nav-link {{ $active }}">
                  <i class="far fa-user nav-icon"></i>
                  <p>Admin info update</p>
                </a>
              </li>
              <li class="nav-item">
                @if(Session::get('page')=="settings")
                <?php $active = 'active'; ?>
                @else 
                <?php $active="";?>
                @endif
                <a href="{{ url('/admin/settings') }}" class="nav-link {{ $active }}">
                  <i class="fas fa-user-shield nav-icon"></i>
                  <p>Admin password update</p>
                </a>
              </li>
            </ul>
          </li>
              <!-- Catelogues-->
              @if(Session::get('page')=="sections" ||  Session::get('page')=="brands"|| Session::get('page')=="categories" || Session::get('page')=="products"|| Session::get('page')=="banners" || Session::get('page')=="coupons"|| Session::get('page')=='orders')
              <?php $active = 'active'; $menuopen = 'menu-open'; ?>
              @else 
                <?php $active=""; $menuopen=''; ?>
              @endif
            <li class="nav-item has-treeview {{ $menuopen }}">
              <a href="#" class="nav-link {{ $active }}">
                <i class="fas fa-th"></i>
                <p>
                  Catelogues
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <!--Sections-->
                  @if(Session::get('page')=="sections")
                    <?php $active = 'active'; ?>
                  @else 
                    <?php $active="";?>
                  @endif
                <li class="nav-item">
                  <a href="{{ url('/admin/sections') }}" class="nav-link {{ $active }}">
                    <i class="fas fa-dot-circle nav-icon"></i>
                    <p>Sections</p>
                  </a>
                </li>
                <!--Brands-->
                @if(Session::get('page')=="brands")
                  <?php $active = 'active'; ?>
                @else 
                  <?php $active="";?>
                @endif
                <li class="nav-item">
                  <a href="{{ url('/admin/brands') }}" class="nav-link {{ $active }}">
                    <i class="fas fa-dot-circle nav-icon"></i>
                    <p>Brands</p>
                  </a>
                </li>
                <!--Categories-->
                @if(Session::get('page')=="categories")
                    <?php $active = 'active'; ?>
                  @else 
                    <?php $active="";?>
                  @endif
                <li class="nav-item">
                  <a href="{{ url('/admin/categories') }}" class="nav-link {{ $active }}">
                    <i class="fas fa-dot-circle nav-icon"></i>
                    <p>Categories</p>
                  </a>
                </li>
                <!--Products-->
                @if(Session::get('page')=="products")
                    <?php $active = 'active'; ?>
                  @else 
                    <?php $active="";?>
                  @endif
                <li class="nav-item">
                  <a href="{{ url('/admin/products') }}" class="nav-link {{ $active }}">
                    <i class="fas fa-dot-circle nav-icon"></i>
                    <p>Products</p>
                  </a>
                </li>
                <!--Banners-->
                @if(Session::get('page')=="banners")
                  <?php $active = 'active'; ?>
                @else 
                  <?php $active="";?>
                @endif
                <li class="nav-item">
                  <a href="{{ url('/admin/banners') }}" class="nav-link {{ $active }}">
                    <i class="fas fa-dot-circle nav-icon"></i>
                    <p>Banners</p>
                  </a>
                </li>
                <!--Coupons-->
                <li class="nav-item">
                  @if(Session::get('page')=="coupons")
                    <?php $active = 'active'; ?>
                  @else 
                    <?php $active="";?>
                  @endif
                    <a href="{{ url('/admin/coupons') }}" class="nav-link {{ $active }}">
                      <i class="fas fa-dot-circle nav-icon"></i>
                      <p>Coupons</p>
                    </a>
                </li>
                <!--Orders-->
                @if(Session::get('page')=="orders")
                    <?php $active = 'active'; ?>
                  @else 
                    <?php $active="";?>
                  @endif
                <li class="nav-item">
                  <a href="{{ url('/admin/orders') }}" class="nav-link {{ $active }}">
                    <i class="fas fa-dot-circle nav-icon"></i>
                    <p>Orders</p>
                  </a>
                </li>
              </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
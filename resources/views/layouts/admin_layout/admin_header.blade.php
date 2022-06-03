<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="{{ url('admin/dashboard') }}" class="nav-link">Home</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="">{{ Auth::guard('admin')->user()->name }}
          </a>
          <ul class="dropdown-menu">
            <li><a href="{{ url('admin/update-admin-info') }}" class="dropdown-item">My Profile</a></li>
            <li>
              <a href="javascript:void(0)" class="dropdown-item logout">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </li>
          </ul>
      </li>
    </ul>
  </nav>
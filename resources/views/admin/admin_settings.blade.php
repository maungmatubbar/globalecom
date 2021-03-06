@extends('layouts.admin_layout.admin_layout')
@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"><i class="fas fa-cog"></i>Settings</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Admin Settings</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <section class="content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header bg-primary">
                            <div class="card-title"><i class="fas fa-user"></i> <span> Admin Change Password</span></div>
                        </div>
                        <div class="card-body">
                            <div class="col-md-12">
                                @if(Session::has('error_msg'))
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    {{ Session::get('error_msg') }}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                @endif
                                @if(Session::has('success_msg'))
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    {{ Session::get('success_msg') }}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                @endif
                                <form action="{{ url('/admin/update-password') }}" method="POST" role="form" name="updatePasswordForm" id="updatePasswordForm">@csrf
                                    <div class="form-group row">
                                        <label for="admin_type" class="col-md-4 col-form-label">Admin Type</label>
                                        <div class="col-md-8">
                                            <input type="text" name="admin_type" id="admin_type" value="{{ $currentAdmin->type }}" class="form-control" readonly="">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label">Email Address</label>
                                        <div class="col-md-8">
                                            <input type="email" name="email" id="email" value="{{ $currentAdmin->email }}" class="form-control" readonly="">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="current_password" class="col-md-4 col-form-label">Current Password</label>
                                        <div class="col-md-8">
                                            <input type="password" name="current_password" id="current_password" class="form-control" placeholder="Enter current password" required>
                                            <span id="checkPwd"></span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="new_password" class="col-md-4 col-form-label">New Password</label>
                                        <div class="col-md-8">
                                            <input type="password" name="new_password" id="new_password" class="form-control" placeholder="Enter new password" required>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="confirm_password" class="col-md-4 col-form-label">Confirm Password</label>
                                        <div class="col-md-8">
                                            <input type="password" name="confirm_password" id="confirm_password" class="form-control" placeholder="Enter confirm password" required>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" id="submit" class="submit btn btn-primary">
                                                Change Password
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
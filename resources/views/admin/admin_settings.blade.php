@extends('layouts.admin_layout.admin_layout')
@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Admin Settings</h1>
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
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-info">
                        <div class="card-header">
                            <div class="card-title"><i class="fas fa-user-cog"></i><span> Admin Info Update</span></div>
                        </div>
                        <div class="card-body">
                            <div class="col-md-7">
                                <form action="{{ url('/admin/changePassword') }}" method="POST" role="form" name="updatePasswordForm" id="updatePasswordForm">@csrf
                                    <div class="form-group row">
                                        <label for="admin_name" class="col-md-4 col-form-label">Admin Name</label>
                                        <div class="col-md-8">
                                            <input type="text"  name="admin_name" id="admin_name" class="form-control" value="{{ $currentAdmin->name }}" placeholder="Enter your name">
                                        </div>
                                    </div>
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
                                            <input type="password" name="current_password" id="current_password" class="form-control" placeholder="Enter current password">
                                            <span id="checkPwd"></span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="new_password" class="col-md-4 col-form-label">New Password</label>
                                        <div class="col-md-8">
                                            <input type="password" name="new_password" id="new_password" class="form-control" placeholder="Enter new password">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="confirm_password" class="col-md-4 col-form-label">Confirm Password</label>
                                        <div class="col-md-8">
                                            <input type="password" name="confirm_password" id="confirm_password" class="form-control" placeholder="Enter confirm password">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-8 offset-md-4">
                                            <input type="submit" id="btn_update" value="Update Info" class="btn btn-primary">
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
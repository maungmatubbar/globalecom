@extends('layouts.admin_layout.admin_layout')
@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Settings</h1>
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
                            <div class="card-title text-center"><i class="fas fa-exclamation-circle"></i><span>  Update Admin Details</span></div>
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
                                <form action="{{ url('/admin/update-admin-info') }}" method="post" enctype="multipart/form-data" role="form">@csrf
                                    <div class="form-group row">
                                        <label for="admin_name" class="col-md-4 col-form-label">Name</label>
                                        <div class="col-md-8">
                                            <input type="text"  name="admin_name" id="admin_name" class="form-control @error('admin_name') is-invalid @enderror" value="{{ $adminCurrentInfo['name'] }}" placeholder="Enter your name">
                                            @error('admin_name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="admin_type" class="col-md-4 col-form-label">Admin Type</label>
                                        <div class="col-md-8">
                                            <input type="text" name="admin_type" id="admin_type" value="{{ $adminCurrentInfo['type'] }}" class="form-control" readonly>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label">Email Address</label>
                                        <div class="col-md-8">
                                            <input type="email" name="email" id="email" value="{{ $adminCurrentInfo['email'] }}" class="form-control" readonly>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="current_password" class="col-md-4 col-form-label">Mobile</label>
                                        <div class="col-md-8">
                                            <input type="text" name="mobile" id="mobile" class="form-control @error('mobile') is-invalid @enderror" placeholder="Enter phone number" value="{{ $adminCurrentInfo['mobile'] }}">
                                            @error('mobile')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                             @enderror
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="admin_image" class="col-md-4 col-form-label">Image</label>
                                        <div class="col-md-8">
                                            <div class="custom-file">
                                                <input type="file" name="admin_image" id="admin_image" class="custom-file-input">
                                                <label class="custom-file-label" for="category_image">Choose photo</label>
                                            </div>
                                          
                                            @if(!empty($adminCurrentInfo->image))
                                            <a target="_blank" href="{{ url('/images/admin_images/admin_photos').'/'.$adminCurrentInfo->image }}">View Image</a>
                                            <input type="hidden" name="current_admin_image" value="{{ $adminCurrentInfo->image }}">
                                             @endif
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-8 offset-md-4">
                                            <input type="submit" id="submit" class="submit btn btn-primary" value="Update" class="btn btn-primary">
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
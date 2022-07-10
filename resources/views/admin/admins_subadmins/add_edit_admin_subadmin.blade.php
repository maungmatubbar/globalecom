@extends('layouts.admin_layout.admin_layout')
@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Catelogues Form</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{ url('/admin/dashboard') }}">Home</a></li>
              <li class="breadcrumb-item"><a href="{{ url('/admin/admins-subadmins') }}">(Admins / Sub-Admins)</a></li>
              <li class="breadcrumb-item active">({{ $title }})</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- SELECT2 EXAMPLE -->
        <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">{{ $title }}</h3>
              
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
          
            <!-- /.card-header -->
            <form name="adminSubadminForm" id="adminSubadminForm" action="@if(empty($adminData)){{ url('/admin/add-edit-admin-subadmin') }} @else {{ url('/admin/add-edit-admin-subadmin/'.$adminData->id) }} @endif" method="POST" enctype="multipart/form-data">@csrf
              <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Name*</label>
                            <input type="text" name="name" class="form-control @error('name') is-invalid @enderror"  id="name" @if(!empty($adminData->name)) value="{{ $adminData->name}}" @else  value="{{ old('name') }}" @endif placeholder="Enter name">
                            @error('name')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div>                  
                        <div class="form-group">
                            <label for="email">Email*</label>
                            <input type="email" name="email" class="form-control"  @if(!empty($adminData->email)) value="{{ $adminData->email}}" @else  value="{{ old('email') }}" @endif id="email" placeholder="Enter email">
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                          @enderror
                        </div>
                        <div class="form-group">
                          <label>Select Type</label>
                          <select name="type" id="type" class="form-control select2" style="width: 100%;">
                            <option value="">Select</option>  
                            <option value="admin" @if($adminData->type=='admin') selected @endif>Admin</option>    
                            <option value="subadmin" @if($adminData->type=='subadmin') selected @endif>Sub-Admin</option>    
                          </select>
                          @error('type')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                        </div>
                        <!-- /.form-group -->
                    </div>
                     <!-- /.col -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="mobile">Mobile</label>
                            <input type="text" name="mobile" class="form-control @error('mobile') is-invalid @enderror"  @if(!empty($adminData->mobile)) value="{{ $adminData->mobile }}" @else  value="{{ old('mobile') }}" @endif id="mobile" placeholder="Enter mobile number">
                            @error('mobile')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div> 
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" value="{{ old('password') }}" id="password" placeholder="Enter password">
                            @error('password')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="image"> Image</label>
                            <div class="custom-file">
                            <input type="file" name="image" class="custom-file-input @error('image') is-invalid @enderror" id="image">
                            <label class="custom-file-label" for="image">Choose Image</label>
                            @error('image')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                            </div>
                        <div>Recommended Image Size:(Width:120px,Height:100px)</div>
                        <?php
                          if(!empty($adminData->image)){
                            $image_path = 'images/admin_images/admin_photos/'.$adminData->image;
                          }
                        ?>
                        @if(!empty($adminData->image) && file_exists($image_path))
                          <div id="image_section">
                            <img style="width: 65px;height:75px;margin-top:10px" src="{{ asset('/images/admin_images/admin_photos/'.$adminData->image)}}" alt="admin image">
                            </div>
                        @endif
                      <!-- /.form-group -->
                    </div>
                <!-- /.col -->
                </div>
                 
                
                  <!-- /.row -->
              </div>
              <!-- /.card-body -->
              <hr/>
              <div class="card-footer">
                  <button type="submit" class="btn btn-primary">@if(empty($adminData->id))Save @else Update @endif</button>
              </div>
            </form>
        </div>
        <!-- /.card -->
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
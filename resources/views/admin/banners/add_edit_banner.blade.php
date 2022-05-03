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
              <li class="breadcrumb-item"><a href="{{ url('/admin/bannars') }}">Banners</a></li>
              <li class="breadcrumb-item active">{{ $title }}</li>
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
            <form name="banner" id="banner" action="@if(empty($bannerdata)){{ url('/admin/add-edit-banner') }} @else {{ url('/admin/add-edit-banner/'.$bannerdata->id) }} @endif" method="POST" enctype="multipart/form-data">@csrf
              <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="title">Banner Title*</label>
                            <input type="text" name="title" class="form-control @error('title') is-invalid @enderror"  id="title" @if(!empty($bannerdata->title)) value="{{ $bannerdata->title}}" @else  value="{{ old('title') }}" @endif placeholder="Enter banner title">
                            @error('title')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="link">Banner Link</label>
                            <input type="text" name="link" class="form-control @error('link') is-invalid @enderror"  id="link" @if(!empty($bannerdata->link)) value="{{ $bannerdata->link}}" @else  value="{{ old('link') }}" @endif placeholder="Enter banner link">
                            @error('link')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div> 
                        <div class="form-group">
                            <label for="alt">Banner Alternate Text</label>
                            <input type="text" name="alt" class="form-control @error('alt') is-invalid @enderror"  id="alt" @if(!empty($bannerdata->alt)) value="{{ $bannerdata->alt}}" @else  value="{{ old('alt') }}" @endif placeholder="Enter alternate text">
                            @error('alt')
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
                        <label for="image">Banner Image</label>
                        <div class="custom-file">
                          <input type="file" name="image" class="custom-file-input @error('image') is-invalid @enderror" id="file-input" aria-describedby="inputGroupFileAddon01">
                          <label class="custom-file-label" for="image">Choose Image</label>
                          @error('image')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                          @enderror
                        </div>
                        <div>Recommended Image Size:(Width:1040px,Height:1200px)</div>
                            <?php
                            if(!empty($bannerdata->image)){
                                $image_path = 'images/banner_images/'. $bannerdata->image;
                            }
                            ?> 
                            @if(!empty($bannerdata->image) && file_exists($image_path))
                                <div id="image_section">
                                <img style="width: 220px;height:90px;margin-top:10px" src="{{ asset('images/banner_images/'.$bannerdata->image)}}" alt="Banners image">
                                </div>
                            @endif
                            <div id="preview"></div>
                     </div>
                   
                          
                        <div class="form-group">
                            <label for="">Status: </label>
                            <span>
                                <label for="active">Active <input type="radio" name="status" id="active" value="1" @if(!empty($bannerdata->id) && $bannerdata->status==1 )  checked @else checked @endif ></label> 
                                <label for="inactive">Inactive <input type="radio" name="status"  id="inactive" value="0" @if(!empty($bannerdata->id) && $bannerdata->status==0 ) checked @endif></label> 
                            </span>
                        </div>
                      <!-- /.form-group -->
                    </div>
                <!-- /.col -->
                </div>
                  <!-- /.row -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                  <button type="submit" class="btn btn-primary">@if(empty($bannerdata->id))Save Banner @else Update Banner @endif</button>
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
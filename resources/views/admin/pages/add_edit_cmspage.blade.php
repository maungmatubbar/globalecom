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
              <li class="breadcrumb-item"><a href="{{ url('/admin/cms-pages') }}">CMS Pages</a></li>
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
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i class="fas fa-minus"></i>
                </button>
                {{-- <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i class="fas fa-times"></i>
                </button> --}}
              </div>
          </div>
        
          <!-- /.card-header -->
          <form name="cmsFrom" id="cmsFrom" action="@if(empty($cmspage)){{ url('/admin/add-edit-cms-page') }} @else {{ url('/admin/add-edit-cms-page/'.$cmspage->id) }} @endif" method="POST">@csrf
            <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="title">Title*</label>
                          <input type="text" name="title" class="form-control @error('title') is-invalid @enderror"  id="title" @if(!empty($cmspage)) value="{{ $cmspage->title }}" @else  value="{{ old('title') }}" @endif placeholder="Enter Title">
                          @error('title')
                                  <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                  </span>
                          @enderror
                      </div>
                      <div class="form-group">
                        <label for="url">URL*</label>
                        <input type="text" name="url" class="form-control @error('url') is-invalid @enderror"  id="url" @if(!empty($cmspage)) value="{{ $cmspage->url}}" @else  value="{{ old('url') }}" @endif placeholder="Enter URL">
                        @error('url')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                        @enderror
                      </div>
                      <div class="form-group">
                        <label for="description">Description*</label>
                        <textarea name="description" class="form-control @error('description') is-invalid @enderror"  id="description">@if(!empty($cmspage)) {{ $cmspage->description}} @else{{ old('description') }} @endif</textarea>
                        @error('description')
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
                          <label for="meta_title">Meta title</label>
                          <input type="text" name="meta_title" class="form-control @error('meta_title') is-invalid @enderror"  id="meta_title" @if(!empty($cmspage)) value="{{ $cmspage->meta_title }}" @else  value="{{ old('meta_title') }}" @endif placeholder="Enter Meta Title">
                          @error('meta_title')
                                  <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                  </span>
                          @enderror
                      </div>
                      <div class="form-group">
                        <label for="meta_description">Meta Description</label>
                        <textarea name="meta_description" class="form-control @error('meta_description') is-invalid @enderror"  id="meta_description">@if(!empty($cmspage)) {{ $cmspage->meta_description}} @else{{ old('meta_description') }} @endif</textarea>
                        @error('meta_description')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                        @enderror
                      </div>
                      <div class="form-group">
                        <label for="meta_keywords">Meta Keywords</label>
                        <input type="text" name="meta_keywords" class="form-control @error('meta_keywords') is-invalid @enderror"  id="meta_keywords" @if(!empty($cmspage)) value="{{ $cmspage->meta_keywords}}" @else  value="{{ old('meta_keywords') }}" @endif placeholder="Enter meta keywords">
                        @error('meta_keywords')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                        @enderror
                      </div>
                      <!-- /.form-group -->
                  </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">@if(!empty($cmspage->id))Update CMS @else Add CMS @endif</button>
            </div>
         </form>
        </div>
        <!-- /.card -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
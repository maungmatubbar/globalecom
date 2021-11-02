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
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add Category</li>
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
            <h3 class="card-title">Add Category</h3>
            
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>
        
          <!-- /.card-header -->
          <form name="categoryForm" id="categoryForm" action="{{ url('/admin/add-edit-category') }}" method="POST" enctype="multipart/form-data">@csrf
            <div class="card-body">
                <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="category_name">Category Name</label>
                        <input type="text" name="category_name" class="form-control @error('category_name') is-invalid @enderror"  id="category_name" placeholder="Enter Category Name">
                        @error('category_name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                        @enderror
                    </div>
                    <!--Appand Categories Level-->
                    <div id="appandCategoriesLevel">
                      @include('admin.categories.appand_categories_level')
                    </div>
                    <div class="form-group">
                        <label for="category_discount">Category Discount</label>
                        <input type="number" name="category_discount" class="form-control" id="category_discount" placeholder="Enter Category Discount">
                    </div>
                    <div class="form-group">
                        <label for="category_description">Category Description</label>
                        <textarea class="form-control" name="description" id="category_description" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="meta_description">Meta Description</label>
                        <textarea class="form-control" name="meta_description" id="meta_description" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <!-- /.form-group -->
                </div>
                <!-- /.col -->
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Select Section</label>
                        <select name="section_id" id="section_id" class="form-control select2 @error('section_id') is-invalid @enderror" style="width: 100%;">
                        <option value="">Select</option>
                        @foreach ($sections as $section)
                        <option value="{{ $section->id }}">{{ $section->name }}</option>
                        @endforeach      
                        </select>
                        @error('section_id')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                    </div>
                    <!-- /.form-group -->
                    <div class="form-group">
                        <label for="category_image">Category Image</label>
                        <input type="file" name="category_image" class="form-control @error('category_image') is-invalid @enderror" id="category_image">
                        @error('category_image')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                    </div>
                    <!--<div class="form-group">
                        <label for="category_url">Category URL</label>
                        <input type="text" name="category_url" class="form-control" id="category_url" placeholder="Enter Category url">
                    </div> -->
                    
                    <div class="form-group">
                        <label for="meta_title">Meta title</label>
                        <textarea class="form-control" name="meta_title" id="meta_title" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="meta_keywords">Meta Keywords</label>
                        <textarea class="form-control" name="meta_keywords" id="meta_keywords" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Status: </label>
                        <span>
                            <label for="active">Active <input type="radio" name="status" id="active" value="1" checked></label> 
                            <label for="inactive">Inactive <input type="radio" name="status"  id="inactive" value="0"></label> 
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
                <button type="submit" class="btn btn-primary">Save Category Info</button>
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
@extends('layouts.admin_layout.admin_layout')
@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Catelogues</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{ url('/admin/dashboard') }}">Home</a></li>
              <li class="breadcrumb-item active">Categories</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                @if(Session::has('success_msg'))
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ Session::get('success_msg') }}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                @endif  
                <h3 class="card-title">Categories</h3>
                <a href="{{ url('/admin/add-edit-category') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add Category</a>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="categories" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Parent Category</th>
                    <th>Section</th>
                    <th>URL</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($categories as $category)
                    @if(!isset($category->parentcategory->category_name))
                      @php
                          $parent_category = 'Root'
                      @endphp
                     @else
                      @php
                        $parent_category = $category->parentcategory->category_name;
                      @endphp
                    @endif
                    <tr>
                        <td>{{ $i++ }}</td>
                        <td>{{ $category->category_name }}</td>
                        <td>{{ $parent_category  }}</td>
                        <td>{{  $category->section->name }}</td>
                        <td>{{ $category->url }}</td>
                        <td>
                          @if($category->status == 1)
                              <h4><a class="CategoryStatus" id="category-{{ $category->id }}" category_id="{{ $category->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-on' status="Active"></i></a></h4>
                          @else()
                            <h4><a class="CategoryStatus" id="category-{{ $category->id }}" category_id="{{ $category->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-off' status="Inactive"></i></a></h4>
                          @endif
                      </td>
                      <td>
                        <a href="{{ url('admin/add-edit-category/'.$category->url) }}" class="btn btn-sm btn-primary"><i class="fas fa-pencil-alt"></i></a>
                        <a class="confirmDelete btn btn-sm btn-danger" record="category" recordurl="{{ $category->url }}" href="javascript:void(0)"><i class="fas fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection

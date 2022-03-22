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
              <li class="breadcrumb-item active">Products</li>
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
              <div class="card-header msg">
                @if(Session::has('success_message'))
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ Session::get('success_message') }}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                @endif
                @if(Session::has('error_message'))
                  <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ Session::get('error_message') }}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                @endif    
                <h3 class="card-title">Products</h3>
                <a href="{{ url('/admin/add-edit-product') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add product</a>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="products" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Product Color</th>
                    <th>Product Image</th>
                    <th>Category</th>
                    <th>Section</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($products as $product)
                    <tr id="{{ $product->product_url }}">
                        <td>{{ $i++ }}</td>
                        <td>{{ $product->product_name }}</td>
                        <td>{{ $product->product_code  }}</td>
                        <td>{{  $product->product_color }}</td>
                        <td>
                          <?php
                            $image_path = 'images/product_images/small/'. $product->main_image;
                          ?>
                          @if(!empty($product->main_image) && file_exists($image_path))
                          <img width="100px" src="{{ asset('/images/product_images/small/'. $product->main_image) }}" alt="">
                          @else
                          <img width="100px" src="{{ asset('/images/product_images/small/no_image.jpg') }}" alt="">
                          @endif
                        </td>
                        <td>{{  $product->category->category_name }}</td>
                        <td>{{  $product->section->name }}</td>
                        <td>
                          @if($product->status == 1)
                              <h4><a class="ProductStatus" id="product-{{ $product->id }}" product_id="{{ $product->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-on' status="Active"></i></a></h4>
                          @else()
                          <h4><a class="ProductStatus" id="product-{{ $product->id }}" product_id="{{ $product->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-off' status="Inactive"></i></a></h4>
                          @endif
                      </td>
                      <td class="btn-group">
                        <a href="{{ url('admin/add-attributes/'.$product->id) }}" title="Add Attributes" class="btn btn-info"><i class="fas fa-plus"></i></a>
                        <a href="{{ url('admin/add-images/'.$product->id) }}" title="Add Images" class="btn btn-secondary"><i class="fas fa-cloud-upload-alt"></i></a>
                        <a title="Edit Product" href="{{ url('admin/add-edit-product/'.$product->product_url) }}" class="btn b btn-primary"><i class="fas fa-pencil-alt"></i></a>

                        <a title="Delete" class="ConfirmDelete btn btn-danger" record="product" recordurl="{{ $product->product_url }}" href="javascript:void(0)"><i class="fas fa-trash-alt"></i></a>
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

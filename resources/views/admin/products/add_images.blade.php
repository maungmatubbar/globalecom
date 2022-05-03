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
              <li class="breadcrumb-item"><a href="{{ url('/admin/products') }}">Products</a></li>
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
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">{{ $title }}</h3>
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="msg"></div>
            @if(Session::has('error_message'))
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Opps!</strong> {{ Session::get('error_message') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            @endif
            @if(Session::has('success_message'))
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> {{ Session::get('success_message') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            @endif
            @if($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
              @endif
            <!-- /.card-header -->
            <form name="productImagesForm" id="productImagesForm" action="{{ url('admin/add-images/'. $productdata->id) }}"     method="POST" enctype="multipart/form-data">@csrf
              <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="product_name">Product Name:</label> {{ $productdata->product_name }}
                        </div> 
                        <div class="form-group">
                            <label for="product_code">Product Code:</label> {{ $productdata->product_code }}
                        </div> 
                        <div class="form-group"> 
                            <label for="product_color">Product Color:</label> {{ $productdata->product_color}}
                        </div>    
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <?php
                          if(!empty($productdata->main_image)){
                            $image_path = 'images/product_images/small/'. $productdata->main_image;
                          }
                        ?>
                        @if(!empty($productdata->main_image) && file_exists($image_path))
                          <div id="image_section">
                            <img style="width: 150px;height:130px" src="{{ asset('images/product_images/small/'.$productdata ->main_image)}}" alt="product image">
                          </div>
                        @else
                        <div id="image_section">
                            <img style="width: 150px;height:130px" src="{{ asset('images/product_images/small/no_image.jpg')}}" alt="product image">
                          </div>
                        @endif 
                      </div>

                      <!-- /.form-group -->
                    </div>
                    <!-- /.col -->
                    <div class="form-group">
                        <div class="field_wrapper">
                          <label for="">Add Product Images:</label>
                          <div>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                              </div>
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" name="images[]" id="file-input" aria-describedby="inputGroupFileAddon01" multiple  required>
                                <label class="custom-file-label" for="inputGroupFile01">Choose Image</label>
                              </div>
                            </div>

                          </div>
                          <div id="preview"></div>
                      </div>
                      <!-- /.row -->
                
                   
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Add Images</button>
              </div>
              <!-- /.card-body -->
            </form>
          </div>
        <!-- /.card -->
        <!-- /.row -->
      </div>

      <form name="editAttributeForm" id="editAttributeForm" action="{{ url('admin/edit-attributes/'.$productdata->id) }}" method="post">
        @csrf
        <div class="card">
          <div class="card-body">
            <table id="products" class="table table-bordered table-hover">
              <thead>
              <tr>
                <th>ID</th>
                <th>Product Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
                <?php $i=1; ?>
                @foreach ($productdata->images as $imagedata)
                <tr id="tableRow-{{ $imagedata->id }}">
                    <td>{{ $i++ }}</td>
                    <td> 
                      <div id="image_section">
                          <img style="width: 150px;height:130px" src="{{ asset('images/product_images/small/'.$imagedata ->image)}}" alt="product image">
                        </div>
                    </td>
                    <td>
                      @if($imagedata->status == 1)
                          <h4><a class="status" id="status-{{ $imagedata->id }}" record="image" record_id="{{ $imagedata->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-on' status="Active"></i></a></h4>
                      @else()
                        <h4><a class="status" id="status-{{ $imagedata->id }}" record="image" record_id="{{ $imagedata->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-off' status="Inactive"></i></a></h4>
                      @endif
                    </td>
                    <td>
                      <a title="Delete" class="btn btn-sm btn-danger deleteTableRow" record="image" id="record-{{ $imagedata->id }}" href="javascript:void(0)" record_id="{{ $imagedata->id }}"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
          <div class="card-footer">
           <!-- <button type="submit" class="btn btn-primary">Update Images</button>-->
          </div>
        </div>
      </form>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
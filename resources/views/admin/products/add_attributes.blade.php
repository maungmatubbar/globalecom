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
          
            <!-- /.card-header -->
            <form name="productForm" id="productForm" action="{{ url('admin/add-attributes/'. $productdata->id) }}" method="POST">@csrf
              
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
                        <div>
                            <input type="text" id="size" name="size[]" value="" placeholder="Size" required/>
                            <input type="text" id="sku" name="sku[]" value="" placeholder="SKU" required/>
                            <input type="number" min="0" id="price" name="price[]" value="" placeholder="Price" required/>
                            <input type="number" min="0" id="stock" name="stock[]" value="" placeholder="Stock" required/>
                            <a href="javascript:void(0);" class="add_button" title="Add field"><i class="fas fa-plus"></i></a>
                        </div>
                      </div>
                  </div> 
                </div>
                  <!-- /.row -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Add Attributes</button>
              </div>
            </form>
           
        </div>
        <!-- /.card -->
        <form name="editAttributeForm" id="editAttributeForm" action="{{ url('admin/edit-attributes/'.$productdata->id) }}" method="post">
          @csrf
          <div class="card">
            <div class="card-body">
              <table id="products" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Size</th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                  <?php $i=1; ?>
                  @foreach ($productdata->attributes as $attribute)
                  <tr id="tableRow-{{  $attribute->id }}">
                      <input type="hidden" name="attrId[]" value="{{ $attribute->id }}">
                      <td>{{ $i++ }}</td>
                      <td>{{ $attribute->size }}</td>
                      <td>{{ $attribute->sku  }}</td>
                      <td> 
                        <input type="number" name="price[]" min="0" class="form-control" value="{{ $attribute->price }}"/>
                      </td>
                      <td>
                        <input type="number" name="stock[]" min="0" class="form-control" value="{{ $attribute->stock }}"/>
                      </td>
                      <td>
                        @if($attribute->status == 1)
                            <h4><a class="status" id="status-{{ $attribute->id }}" record="attribute" record_id="{{ $attribute->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-on' status="Active"></i></a></h4>
                          @else()
                          <h4><a class="status" id="status-{{ $attribute->id }}" record="attribute" record_id="{{ $attribute->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-off' status="Inactive"></i></a></h4>
                          @endif
                      </td>
                      <td>
                        <a title="Delete" class="btn btn-sm btn-danger deleteTableRow" record="attribute" id="record-{{ $attribute->id }}" href="javascript:void(0)" record_id="{{ $attribute->id }}"><i class="fas fa-trash-alt"></i></a>
                      </td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Update Attributes</button>
            </div>
          </div>
        </form>
        
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
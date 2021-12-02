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
            <form name="productForm" id="productForm" action="@if(empty($productdata)){{ url('/admin/add-edit-product') }} @else {{ url('/admin/add-edit-product/'.$productdata->product_url) }} @endif" method="POST" enctype="multipart/form-data">@csrf
              <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Select Category*</label>
                            <select name="category_id" id="category_id" class="form-control select2 @error('category_id') is-invalid @enderror" style="width: 100%;">
                              <option value="">Select</option> 
                              @foreach ($categories as $section)
                                <optgroup label="{{ $section->name }}"></optgroup>
                                  @foreach ($section->categories as $category)
                                    <option value="{{ $category->id }}" @if(!empty(@old('category_id')) && $category->id == @old('category_id'))  selected 
                                      @elseif (!empty($productdata->category_id) && $productdata->category_id == $category->id) selected @endif>&nbsp;&nbsp;&nbsp;&raquo;&nbsp;{{ $category->category_name }}</option>

                                    @foreach ($category->subcategories as $subcategory)
                                      <option value="{{  $subcategory->id  }}" @if(!empty(@old('category_id')) && $subcategory->id == @old('category_id'))  selected @elseif (!empty($productdata->category_id) && $productdata->category_id == $subcategory->id) selected @endif>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Rarr;&nbsp;{{  $subcategory->category_name  }}</option>
                                    @endforeach

                                  @endforeach
                               
                              @endforeach    
                            </select>
                            @error('category_id')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div>
                        <div class="form-group">
                          <label>Select Brand*</label>
                          <select name="brand_id" id="brand_id" class="form-control select2  @error('brand_id') is-invalid @enderror" style="width: 100%;">
                            <option value="">Select</option>   
                            @foreach ($brands as $brand )
                              <option value="{{ $brand->id }}" @if (!empty($productdata->brand_id)&& $productdata->brand_id==$brand->id) selected @endif>{{ $brand->name }}</option>
                            @endforeach  
                          </select>
                          @error('brand_id')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                          @enderror
                        </div>
                        <div class="form-group">
                            <label for="product_name">Product Name*</label>
                            <input type="text" name="product_name" class="form-control @error('product_name') is-invalid @enderror"  id="product_name" @if(!empty($productdata->product_name)) value="{{ $productdata->product_name}}" @else  value="{{ old('product_name') }}" @endif placeholder="Enter product name">
                            @error('product_name')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div>     
                        <div class="form-group">
                            <label for="product_price">Product Price*</label>
                            <input type="text" name="product_price" class="form-control @error('product_price') is-invalid @enderror"  @if(!empty($productdata->product_price)) value="{{ $productdata->product_price}}" @else  value="{{ old('product_price') }}" @endif id="product_price" placeholder="Enter product price">
                            @error('product_price')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                        </div>              
                        <div class="form-group">
                            <label for="product_discount">Product Discount(%)</label>
                            <input type="text" name="product_discount" class="form-control"  @if(!empty($productdata->product_discount)) value="{{ $productdata->product_discount}}" @else  value="{{ old('product_discount') }}" @endif id="product_discount" placeholder="Enter product Discount">
                        </div>
                        <div class="form-group">
                            <label for="video">Product Video</label>
                              <div class="custom-file">
                                <input type="file" name="product_video" class="custom-file-input @error('product_video') is-invalid @enderror" id="product_video">
                                <label class="custom-file-label" for="product_video">Choose Video</label>
                              </div>
                              @if(!empty($productdata->product_video))
                                <div class="mt-1 video_sction">
                                    <video controls>
                                      <source src="{{ asset('videos/product_videos/'.$productdata->product_video) }}" type="video/mp4">
                                      <source src="{{ asset('videos/product_videos/'.$productdata->product_video) }}" type="video/ogg">
                                    </video>
                                    <div class="">
                                      <a href="{{ asset('videos/product_videos/'.$productdata->product_video) }}" class="btn btn-sm btn-success" download>Download</a>
                                      <a href="javascript:void(0)" record="video" record_id="{{ $productdata->id }}"  class="deleteItem btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></a>
                                    </div>
                                </div>
                              @endif
                              @error('product_video')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                              @enderror
                        </div>
                        <div class="form-group">
                            <label for="product_description">Product Description</label>
                            <textarea class="form-control" name="description"  id="summernote" rows="3" placeholder="Enter ...">@if(!empty($productdata->description)) {{ $productdata->description}} @else {{ old('description') }} @endif</textarea>
                        </div>
                        <div class="form-group">
                          <label>Select Sleeve</label>
                          <select name="sleeve" id="sleeve" class="form-control select2" style="width: 100%;">
                            <option value="">Select</option>   
                            @foreach ($sleeveArray as $sleeve )
                              <option value="{{ $sleeve }}" @if (!empty($productdata->sleeve)&& $productdata->sleeve==$sleeve) selected @endif>{{ $sleeve }}</option>
                            @endforeach  
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Select Pattern</label>
                          <select name="pattern" id="pattern" class="form-control select2 " style="width: 100%;">
                            <option value="">Select</option>   
                            @foreach ($patternArray as $pattern )
                              <option value="{{ $pattern }}" @if (!empty($productdata->pattern)&& $productdata->pattern==$pattern) selected @endif>{{ $pattern }}</option>
                            @endforeach  
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="meta_title">Meta title</label>
                          <textarea class="form-control" name="meta_title" id="meta_title" rows="3" placeholder="Enter ...">@if(!empty($productdata)) {{ $productdata->meta_title}} @else {{ old('meta_title') }} @endif</textarea>
                        </div>
                        <div class="form-group">
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" name="is_featured" id="is_featured" value="Yes" @if(!empty($productdata) && $productdata->is_featured=="Yes") checked @endif >
                            <label  for="is_featured">Featured Item </label>
                          </div>
                        </div>
                        <!-- /.form-group -->
                    </div>
                     <!-- /.col -->
                    <div class="col-md-6">
                      <div class="form-group">
                          <label for="product_code">Product Code*</label>
                          <input type="text" name="product_code" class="form-control @error('product_code') is-invalid @enderror"  @if(!empty($productdata)) value="{{ $productdata->product_code}}" @else  value="{{ old('product_code') }}" @endif id="product_code" placeholder="Enter product code">
                          @error('product_code')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                      </div> 
                      <div class="form-group">
                          <label for="product_color">Product Color*</label>
                          <input type="text" name="product_color" class="form-control @error('product_color') is-invalid @enderror"  @if(!empty($productdata)) value="{{ $productdata->product_color}}" @else  value="{{ old('product_color') }}" @endif id="product_color" placeholder="Enter product color">
                          @error('product_color')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                            @enderror
                      </div> 
                      <div class="form-group">
                          <label for="product_weight">Product Weight</label>
                          <input type="text" name="product_weight" class="form-control"  @if(!empty($productdata)) value="{{ $productdata->product_weight}}" @else  value="{{ old('product_weight') }}" @endif id="product_weight" placeholder="Enter product weight">
                      </div> 
                      <div class="form-group">
                        <label for="main_image">Product Main Image</label>
                        <div class="custom-file">
                          <input type="file" name="main_image" class="custom-file-input @error('main_image') is-invalid @enderror" id="main_image">
                          <label class="custom-file-label" for="main_image">Choose Image</label>
                          @error('main_image')
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $message }}</strong>
                              </span>
                          @enderror
                        </div>
                        <div>Recommended Image Size:(Width:1040px,Height:1200px)</div>
                        <?php
                          if(!empty($productdata->main_image)){
                            $image_path = 'images/product_images/small/'. $productdata->main_image;
                          }
                        ?>
                        @if(!empty($productdata->main_image) && file_exists($image_path))
                          <div id="image_section">
                            <img style="width: 65px;height:75px;margin-top:10px" src="{{ asset('images/product_images/small/'.$productdata ->main_image)}}" alt="product image">
                            <a href="javascript:void(0)" product_id="{{ $productdata->id }}" class="product_image_delete mt-5 btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></a>
                          </div>
                        @endif
                          
                      </div>
                      <div class="form-group">
                          <label for="wash_care">Wash Care</label>
                          <textarea class="form-control" name="wash_care"  id="wash_care" rows="3" placeholder="Enter ...">@if(!empty($productdata)) {{ $productdata->meta_title}} @else {{ old('wash_care') }} @endif</textarea>
                      </div>
                      <div class="form-group">
                        <label>Select Fabric</label>
                        <select name="fabric" id="fabric" class="form-control select2 " style="width: 100%;">
                          <option value="">Select</option>   
                          @foreach ($fabricArray as $fabric )
                            <option value="{{ $fabric }}" @if (!empty($productdata->fabric) && $productdata->fabric==$fabric) selected @endif>{{ $fabric }}</option>
                          @endforeach  
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Select Fit</label>
                        <select name="fit" id="fit" class="form-control select2" style="width: 100%;">
                          <option value="">Select</option>   
                          @foreach ($fitArray as $fit )
                            <option value="{{ $fit }}" @if (!empty($productdata->fit) && $productdata->fit==$fit) selected @endif>{{ $fit }}</option>
                          @endforeach  
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Select Occasion</label>
                        <select name="occasion" id="occasion" class="form-control select2" style="width: 100%;">
                          <option value="">Select</option>   
                          @foreach ($occasionArray as $occasion )
                            <option value="{{ $occasion }}" @if (!empty($productdata->occasion) && $productdata->occasion==$occasion) selected @endif>{{ $occasion }}</option>
                          @endforeach  
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="meta_description">Meta Description</label>
                        <textarea class="form-control" name="meta_description" id="meta_description" rows="3" placeholder="Enter ...">@if(!empty($productdata)) {{ $productdata->meta_description}} @else {{ old('meta_description') }} @endif</textarea>
                      </div>
                      <div class="form-group">
                        <label for="meta_keywords">Meta Keywords</label>
                        <textarea class="form-control" name="meta_keywords" id="meta_keywords" rows="3" placeholder="Enter ...">@if(!empty($productdata)) {{ $productdata->meta_keywords}} @else {{ old('meta_keywords') }} @endif</textarea>
                      </div>
                      <div class="form-group">
                          <label for="">Status: </label>
                          <span>
                              <label for="active">Active <input type="radio" name="status" id="active" value="1" @if(!empty($productdata) &&$productdata->status==1 )  checked @else checked @endif ></label> 
                              <label for="inactive">Inactive <input type="radio" name="status"  id="inactive" value="0" @if(!empty($productdata) &&$productdata->status==0 ) checked @endif></label> 
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
                  <button type="submit" class="btn btn-primary">@if(empty($productdata))Save product info @else Update product info @endif</button>
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
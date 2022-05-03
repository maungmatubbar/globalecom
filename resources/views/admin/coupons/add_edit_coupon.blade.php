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
              <li class="breadcrumb-item"><a href="{{ url('/admin/coupons') }}">Coupons</a></li>
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
          @if($errors->any())
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            @endif
          <div class="card-header">
            <h3 class="card-title text-info">{{ $title }}</h3>
          </div>
          <!-- /.card-header -->
          <form name="couponForm" id="couponForm" action="@if(empty($coupon)){{ url('/admin/add-edit-coupon') }} @else {{ url('/admin/add-edit-coupon/'.$coupon->id) }} @endif" method="POST">@csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        @if(empty($coupon->coupon_code))
                          <div class="form-group ">
                            <label for="coupon_option">Coupon Option</span></label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="coupon_option" id="AutomaticCoupon" value="Automatic">
                                <label class="form-check-label" for="AutomaticCoupon">Automatic</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="coupon_option" id="ManualCoupon" value="Manual">
                                <label class="form-check-label" for="ManualCoupon">Manual</label>
                              </div>
                          </div>
                          <div class="form-group" style="display:none" id="couponField">
                              <label for="coupon_code">Coupon Code</label>
                              <input type="text" name="coupon_code" id="coupon_code" class="form-control" value="{{ $coupon->coupon_code }}">
                          </div>
                        @else
                        <input type="hidden" name="coupon_option" value="{{ $coupon->coupon_option }}">
                          <div class="form-group">
                            <label for="coupon_code">Coupon Code</label>
                            <p>{{ $coupon->coupon_code }}</p>
                            <input type="hidden" name="coupon_code" id="coupon_code" class="form-control" value="{{ $coupon->coupon_code }}" readonly>
                        </div>
                        @endif
                        <div class="form-group ">
                            <label for="coupon_type">Coupon Types</span></label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="coupon_type" id="multipleTimes" value="Multiple Times" @if(!empty($coupon->coupon_type) && $coupon->coupon_type == "Multiple Times") checked @endif>
                                <label class="form-check-label" for="multipleTimes">Multiple Times</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="coupon_type" id="singleTimes" value="Single Times"
                                @if(!empty($coupon->coupon_type) && $coupon->coupon_type == "Single Times") checked @endif>
                                <label class="form-check-label" for="singleTimes">Single Times</label>
                              </div>
                        </div>
                        <div class="form-group ">
                            <label for="coupon_type">Amount Types</span></label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="amount_type" id="percentage" value="Percentage"
                                @if(!empty($coupon->amount_type) && $coupon->amount_type == "Percentage") checked @endif>
                                <label class="form-check-label" for="percentage">Percentage (in %)</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="amount_type" id="fixed" value="Fixed"
                                @if(!empty($coupon->amount_type) && $coupon->amount_type == "Fixed") checked @endif>
                                <label class="form-check-label" for="fixed">Fixed (BDT or USD)</label>
                              </div>
                        </div>
                        <div class="form-group">
                          <label for="amount">Amount</label>
                          <input type="number" name="amount" id="amount" class="form-control" @if(!empty($coupon->amount)) value="{{ $coupon->amount }}" @else value="{{ old('amount') }}" @endif placeholder="Enter your amount" min="0">
                        </div>
                        
                        <div class="form-group">
                            <label for="categories">Select Categories</label>
                            <select name="categories[]" class="form-control select2" multiple>
                                <option value="">Select Categories</option> 
                                    @foreach ($categories as $section)
                                        <optgroup label="{{ $section->name }}"></optgroup>
                                        @foreach ($section->categories as $category)
                                            <option value="{{ $category->id }}" @if(in_array($category->id,$selCats))  selected 
                                             @endif>&nbsp;&nbsp;&nbsp;&raquo;&nbsp;{{ $category->category_name }}
                                            </option>
                                            @foreach ($category->subcategories as $subcategory)
                                                <option value="{{  $subcategory->id  }}" @if(in_array($subcategory->id,$selCats)) selected @endif>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Rarr;&nbsp;{{  $subcategory->category_name }}
                                                </option>
                                            @endforeach
                                        @endforeach
                                    @endforeach    
                              </select>
                        </div>
                        <div class="form-group">
                            <label for="categories">Select Users</label>
                            <select name="users[]" class="form-control select2" multiple>
                                <option value="">Select Users</option> 
                                @foreach ($users as $user)
                                    <option value="{{ $user->email }}" @if(in_array($user->email,$selUsers)) selected @endif>{{ $user->email }}</option> 
                                @endforeach    
                              </select>
                        </div>
                        <div class="form-group">
                            <label for="expiry_date">Expiry Date</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                </div>
                                <input type="text" name="expiry_date" id="expiry_date" class="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="yyyy/mm/dd" data-mask="" inputmode="numeric" @if(!empty($coupon->expiry_date)) value="{{ $coupon->expiry_date }}" @endif>
                              </div>
                        </div>
                        <!-- /.form-group -->
                    </div>
                <!-- /.col -->
          
                <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">@if(empty($coupon->id))Add Coupon @else Update Coupon @endif</button>
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
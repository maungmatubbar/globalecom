<?php use App\Product; ?>
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
              <li class="breadcrumb-item"><a href="{{ url('/admin/orders') }}">Orders</a></li>
              <li class="breadcrumb-item active">Order Details</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            @if(Session::has('success_msg'))
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ Session::get('success_msg') }}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
            @endif 
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-bold text-uppercase">Order Details Table</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td>Order Date</td>
                      <td>{{ date("d-m-Y",strtotime($orderDetails['created_at'])) }}</td>
                    </tr>
                    <tr>
                      <td>Order Status</td>
                      <td><strong>{{ $orderDetails['order_status'] }}</strong></td>
                    </tr>
                    <tr>
                      <td>Order Total</td>
                      <td>{{ $orderDetails['grand_total'] }}</td>
                    </tr>
                    @if(!empty($orderDetails['courier_name']))
                      <tr>
                        <td>Courier Name</td>
                        <td>{{ $orderDetails['courier_name'] }}</td>
                      </tr>
                    @endif
                    @if(!empty($orderDetails['tracking_number']))
                      <tr>
                        <td>Tracking Number</td>
                        <td>#{{ $orderDetails['tracking_number'] }}</td>
                      </tr>
                    @endif
                    <tr>
                      <td>Shipping Charges</td>
                      <td>BDT {{ $orderDetails['shipping_charges'] }}</td>
                    </tr>
                    <tr>
                      <td>Coupon Code</td>
                      <td>{{ $orderDetails['coupon_code'] }}</td>
                    </tr>
                    <tr>
                      <td>Coupon Amount</td>
                      <td>{{ $orderDetails['coupon_amount'] }}</td>
                    </tr>
                    <tr>
                      <td>Payment Method</td>
                      <td>{{ $orderDetails['payment_method'] }}</td>
                    </tr>
                    <tr>
                      <td>Payment Gateway</td>
                      <td>{{ $orderDetails['payment_gateway'] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-bold text-uppercase">Delivery Address Table</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table table-bordered table-striped">
                  <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>{{ $orderDetails['name'] }}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{{ $orderDetails['address'] }}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{{ $orderDetails['city'] }}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{{ $orderDetails['state'] }}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{{ $orderDetails['country'] }}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>{{ $orderDetails['pincode'] }}</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>{{ $orderDetails['mobile'] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-6 p-0">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-bold text-uppercase">Billing Address</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table table-bordered table-striped">
                  <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>{{ $userDetails['name'] }}</td>
                    </tr>
                    <tr>
                      <td>Email Address</td>
                      <td>{{ $userDetails['email'] }}</td>
                  </tr>
                    <tr>
                        <td>Address</td>
                        <td>{{ $userDetails['address'] }}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{{ $userDetails['city'] }}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{{ $userDetails['state'] }}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{{ $userDetails['country'] }}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>{{ $userDetails['pincode'] }}</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>{{ $userDetails['mobile'] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-bold text-uppercase">Update Order Status</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0 mt-1">
                <form action="{{ url('admin/update-order-status') }}" method="POST">
                  @csrf
                  <input type="hidden" name="order_id" value="{{ $orderDetails['id'] }}">
                  <select name="order_status" class="form-control" id="order_status" @if($orderDetails['order_status']=="Delivered") disabled @endif required>
                    <option><----Select Status----></option>
                    @foreach($orderStatuses as $status)
                      <option value="{{ $status['name'] }}" @if(isset($orderDetails['order_status']) && $status['name'] == $orderDetails['order_status']) selected @endif>{{ $status['name'] }}</option>
                    @endforeach
                  </select>
                  <div class="mt-1">
                    <input type="text" name="courier_name" @if(empty($orderDetails['courier_name'])) id="courier_name" @endif  value="{{ $orderDetails['courier_name'] }}" class="form-control"placeholder="Enter Courier Name"/>
                  </div>
                  <div class="mt-1">
                    <input type="text" name="tracking_number" @if(empty($orderDetails['tracking_number'])) id="tracking_number" @endif value="{{ $orderDetails['tracking_number'] }}" class="form-control" placeholder="Enter Tranking Number"/>
                  </div>
                  <div class="mt-1">

                  </div>
                  <div class="mt-1">
                    <button type="submit" class="btn btn-info btn-block text-uppercase" @if($orderDetails['order_status']=="Delivered") disabled @endif>Update</button>
                  </div>
                </form>
                <hr/>
                <table class="table table-bordered">
                  @foreach ($orderLogs as $log)
                    <tr>
                      <td>
                        <strong>{{ $log['order_status'] }}</strong><br/>
                        {{  date("j F, Y, g:i a",strtotime($log['created_at'])) }}
                      </td>
                    </tr>
                  @endforeach
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-bold text-uppercase">Ordered Products</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap table-striped">
                  <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product Size</th>
                        <th>Product Color</th>
                        <th>Product Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($orderDetails['orders_products'] as $product)
                      <tr align="center">
                          <td>
                              <?php $productImage =  Product::getProductImage($product['product_id']);
                              ?>
                              <a target="_blank" href="{{ url('product/'.$product['product_id']) }}">
                                  <img  src="{{ asset('images/product_images/small/'.$productImage) }}" alt="Order Product Image" width="80" height="100" />
                              </a>
                          </td>
                          <td>{{ $product['product_code'] }}</td>
                          <td>{{ $product['product_name'] }}</td>
                          <td>{{ $product['product_size'] }}</td>
                          <td>{{ $product['product_color'] }}</td>
                          <td>{{ $product['product_qty'] }}</td>
                      </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
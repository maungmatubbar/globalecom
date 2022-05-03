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
              <li class="breadcrumb-item active">Orders</li>
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
                <span class="msg"></span>
                @if(Session::has('success_msg'))
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ Session::get('success_msg') }}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                @endif 
              <h2 class="card-title text-bold">ORDERS</h2>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="orders" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Customer Name</th> 
                        <th>Customer Email</th>   
                        <th>Ordered Product</th> 
                        <th>Order Amount</th>
                        <th>Order Status</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($orders as $order)
                        <tr id="tableRow-{{ $order['id'] }}">
                            <td>{{ $i++ }}</td>
                            <td>{{ date("d-m-Y",strtotime($order['created_at'])) }}</td>
                            <td>{{ $order['name'] }}</td>
                            <td>{{ $order['email'] }}</td>
                            <td>
                                @foreach($order['orders_products'] as $product)
                                    {{ $product['product_code'] }}
                                @endforeach
                            </td>
                            <td>{{ $order['grand_total'] }}</td>
                            <td>{{ $order['order_status'] }}</td>
                            <td>{{ $order['payment_method'] }}</td>
                            <td>
                              <a href="{{ url('admin/orders/'.$order['id']) }}" title="View Order Details" class="btn btn-default">
                                <i class="fa fa-search-plus"></i>
                              </a>
                               @if($order['order_status']=='Shipped' || $order['order_status'] == 'Delivered')
                                <a href="{{ url('admin/view-order-invoice/'.$order['id']) }}" title="Print View Invoice" class="btn btn-default">
                                  <i class="fa fa-print"></i>
                                </a>
                                @endif
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
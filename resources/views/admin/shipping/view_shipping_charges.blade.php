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
              <li class="breadcrumb-item active">Shipping</li>
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
                <h3 class="card-title">Shipping Charges</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="shipping" class="table table-bordered table-hover table-responsive">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Country</th>
                    <th>0g-500g</th>
                    <th>501g to 1000 g</th>
                    <th>1001g to 2000 g</th>
                    <th>2001g to 5000 g</th>
                    <th>Above 5000 g</th>
                    <th>Updated at</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($shippingCharges as $shipping)
                    
                    <tr id="tableRow-{{ $shipping['id'] }}">
                        <td>{{ $i++ }}</td>
                        <td>{{ $shipping['country'] }}</td>
                        <td>BDT {{ $shipping['0_500g'] }}</td>
                        <td>BDT {{ $shipping['501_1000g'] }}</td>
                        <td>BDT {{ $shipping['1001_2000g'] }}</td>
                        <td>BDT {{ $shipping['2001_5000g'] }}</td>
                        <td>BDT {{ $shipping['above_5000g'] }}</td>
                        <td>{{ date('d-m-Y',strtotime($shipping['updated_at'])) }}</td>
                        <td>
                          @if($shipping['status'] == 1)
                              <h4 >
                                    <a class="update_shipping_status" id="status-{{ $shipping['id']}}" record="shipping" record_id="{{ $shipping['id']}}"  href="javascript:void(0)">
                                        <i class="fas fa-toggle-on" status="Active"></i>
                                    </a>
                                </h4>
                          @else
                            <h4>
                                <a class="update_shipping_status" id="status-{{ $shipping['id'] }}" record="shipping" record_id="{{ $shipping['id'] }}"  href="javascript:void(0)" >
                                    <i class="fas fa-toggle-off" status="Inactive"></i>
                                </a>
                            </h4>
                          @endif
                      </td>
                      <td>
                        <a title="Edit" class="btn btn-primary" href="{{ url('/admin/edit-shipping-charges/'.$shipping['id']) }}"><i class="fas fa-edit"></i></a>
                        <a title="Delete" class="deleteTableRow btn btn-danger" record="brand" record_id="{{ $shipping['id'] }}"  href="javascript:void(0)"><i class="fas fa-trash-alt"></i></a>
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

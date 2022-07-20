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
              <li class="breadcrumb-item active">Exchange Request</li>
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
                <h3 class="card-title">Exchange Request</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive">
                <table id="exchangeRequest" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Product Size</th>
                        <th>Required Size</th>
                        <th>Product Code</th>
                        <th>Exchange Reason</th>
                        <th>Exchange Status</th>
                        <th>Comment</th>
                        <th>Approved/Rejected</th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($exchangeRequests as $exchangeRequest)
                    <tr id="tableRow-{{ $exchangeRequest->id }}">
                        <td>{{ $loop->iteration }}</td>
                        <td><a href="{{ url('/admin/orders/'. $exchangeRequest->order_id) }}">#{{ $exchangeRequest->order_id }}</a></td>
                        <td>{{ $exchangeRequest->user->name }}({{ $exchangeRequest->user_id }})</td>
                        <td>{{ $exchangeRequest->product_size }}</td>
                        <td>{{ $exchangeRequest->required_size }}</td>
                        <td>{{ $exchangeRequest->product_code }}</td>
                        <td>{{ $exchangeRequest->exchange_reason }}</td>
                        <td>{{ $exchangeRequest->exchange_status }}</td>
                        <td>{{ $exchangeRequest->comment }}</td>
                        <td>
                            <form action="{{ url('/admin/exchange-request-update') }}" method="post">@csrf
                               <div class="row">
                                    <input type="hidden" name="id" value="{{ $exchangeRequest->id }}">
                                    <select name="exchange_status" id="">
                                        <option value="Approved" @if($exchangeRequest->exchange_status=='Approved') selected @endif>Approved</option>
                                        <option value="Rejected" @if($exchangeRequest->exchange_status=='Rejected') selected @endif>Rejected</option>
                                        <option value="Pending" @if($exchangeRequest->exchange_status=='Pending') selected @endif>Pending</option>
                                    </select>
                                    <button class="btn btn-primary btn-sm ml-1 mt-2">Update</button>
                               </div>
                            </form>
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

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
              <li class="breadcrumb-item active">Return Request</li>
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
                <h3 class="card-title">Return Request</h3>
                <!--<a href="{{ url('/admin/add-edit-rating') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add rating</a>-->
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive">
                <table id="returnRequest" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Product Size</th>
                        <th>Product Code</th>
                        <th>Return Reason</th>
                        <th>Return Status</th>
                        <th>Comment</th>
                        <th>Approved/Rejected</th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($returnRequests as $returnRequest)
                    <tr id="tableRow-{{ $returnRequest->id }}">
                        <td>{{ $loop->iteration }}</td>
                        <td><a href="{{ url('/admin/orders/'. $returnRequest->order_id) }}">#{{ $returnRequest->order_id }}</a></td>
                        <td>{{ $returnRequest->user->name }}({{ $returnRequest->user_id }})</td>
                        <td>{{ $returnRequest->product_size }}</td>
                        <td>{{ $returnRequest->product_code }}</td>
                        <td>{{ $returnRequest->return_reason }}</td>
                        <td>{{ $returnRequest->return_status }}</td>
                        <td>{{ $returnRequest->comment }}</td>
                        <td>
                            <form action="{{ url('/admin/return-request-update') }}" method="post">@csrf
                               <div class="row">
                                    <input type="hidden" name="id" value="{{ $returnRequest->id }}">
                                    <select name="return_status" id="">
                                        <option value="Pending" @if($returnRequest->return_status=='Pending') selected @endif>Pending</option>
                                        <option value="Approved" @if($returnRequest->return_status=='Approved') selected @endif>Approved</option>
                                        <option value="Rejected" @if($returnRequest->return_status=='Rejected') selected @endif>Rejected</option>
                                    </select>
                                    <button class="btn btn-primary btn-sm">Update</button>
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

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
              <li class="breadcrumb-item active">Users</li>
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
                <h3 class="card-title">Users</h3>
                <!--<a href="{{ url('/admin/add-edit-user') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add User</a>-->
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive">
                <table id="userDatatable" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Pincode</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($users as $user)
                    
                    <tr id="tableRow-{{ $user->id }}">
                        <td>{{ $i++ }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->address }}</td>
                        <td>{{ $user->city }}</td>
                        <td>{{ $user->state }}</td>
                        <td>{{ $user->country }}</td>
                        <td>{{ $user->pincode }}</td>
                        <td>{{ $user->mobile }}</td>
                        <td>{{ $user->email }}</td>
                        <td>
                          @if($user->status == 1)
                              <h4 ><a class="userStatus" id="status-{{ $user->id }}" record="user" record_id="{{ $user->id }}"  href="javascript:void(0)"><i class="fas fa-toggle-on" status="Active"></i></a></h4>
                          @else()
                         <h4><a class="userStatus" id="status-{{ $user->id }}" record="user" record_id="{{ $user->id }}"  href="javascript:void(0)" ><i class="fas fa-toggle-off" status="Inactive"></i></a></h4>
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

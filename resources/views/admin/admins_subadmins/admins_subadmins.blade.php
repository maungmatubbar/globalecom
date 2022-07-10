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
              <li class="breadcrumb-item active">Admin / Sub-admin</li>
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
                <h3 class="card-title">Admins / Sub-admins</h3>
                <a href="{{ url('/admin/add-edit-admin-subadmin') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add Admin / Sub-Admin</a>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive">
                <table id="adminDataTable" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($admins_subadmins as $admin)
                        <tr id="tableRow-{{ $admin->id }}">
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $admin->name }}</td>
                            <td>{{ $admin->type }}</td>
                            <td>{{ $admin->email }}</td>
                            <td>{{ $admin->mobile }}</td>
                            <td>
                                @if(!empty($admin->image))
                                    <img width="80px" height="80px" src="{{ asset('/images/admin_images/admin_photos/'.$admin->image) }}" alt="{{ $admin->image }}">
                                @else
                                    <span>No Image</span>
                                @endif
                            </td>
                            <td>
                                @if ($admin->type!='superadmin')
                                    @if($admin->status==1)
                                        <a class="updateAdminStatus" id="status-{{ $admin->id }}"  href="javascript:void(0)"  record_id="{{ $admin->id }}"  record="admin"><h4><i status="Active" class="fas fa-toggle-on" aria-hidden="true"></i></h4></a>
                                    @else
                                        <a class="updateAdminStatus" id="status-{{ $admin->id }}"  href="javascript:void(0)" record_id="{{ $admin->id }}"  record="admin"><h4><i status="Inactive" class="fas fa-toggle-off" aria-hidden="true"></i></h4></a>
                                    @endif
                                @endif
                               
                            </td>
                            <td>
                                @if ($admin->type!='superadmin')
                                    <a title="Set Roles / Permissions" href="{{ url('/admin/update-role/'.$admin->id) }}" class="btn btn-dark btn-sm"><i class="fa fa-unlock"></i></a>
                                    <a title="Edit Admin / Sub-Admin" href="{{ url('admin/add-edit-admin-subadmin/'.$admin->id) }}" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></a>
                                    <a title="Delete Admin / Sub-Admin" href="javascript:void(0)" class="DeleteTableRow1 btn btn-danger btn-sm" record="admin" record_id="{{ $admin->id }}"><i class="fa fa-trash"></i></a>
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
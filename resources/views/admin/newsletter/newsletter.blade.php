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
              <li class="breadcrumb-item active">Newsletter Subcribers</li>
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
                <h3 class="card-title">Newsletter Subcribers</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="section" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Subcribed On</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($subscribers as $subscriber)
                    <tr>
                        <td>{{ $i++ }}</td>
                        <td>{{ $subscriber->email }}</td>
                        <td>{{ $subscriber->created_at }}</td>
                        <td>
                          @if($subscriber->status == 1)
                              <h4><a class="SubscriberStatus" id="status-{{ $subscriber->id }}" record_id="{{ $subscriber->id }}"record="newsletter"   href="javascript:void(0)"><i class='fas fa-toggle-on' status='Active'></i></a></h4>
                          @else()
                            <h4><a class="SubscriberStatus" id="status-{{ $subscriber->id }}"record="newsletter" record_id="{{ $subscriber->id }}"  href="javascript:void(0)"><i class='fas fa-toggle-off' status='Inactive'></i></a></h4>
                          @endif
                          <a href="javascript:void(0)" class="btn btn-danger DeleteTableRow1" record="newsletter" record_id="{{ $subscriber->id }}"><i class="fa fa-trash"></i></a>
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

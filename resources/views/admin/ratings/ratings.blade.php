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
              <li class="breadcrumb-item active">Ratings & Reviews</li>
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
                <h3 class="card-title">Ratings & Reviews</h3>
                <!--<a href="{{ url('/admin/add-edit-rating') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add rating</a>-->
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive">
                <table id="ratingDatatable" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>User Email</th>
                        <th>Review</th>
                        <th>Rating</th>
                        <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($ratings as $rating)
                    <tr id="tableRow-{{ $rating->id }}">
                        <td>{{ $i++ }}</td>
                        <td>{{ $rating->product->product_name }}</td>
                        <td>{{ $rating->user->email }}</td>
                        <td>{{ $rating->review }}</td>
                        <td>{{ $rating->rating }}</td>
                        <td>
                          @if($rating->status == 1)
                              <h4 ><a class="updateRatingStatus" id="status-{{ $rating->id }}" record="rating" record_id="{{ $rating->id }}"  href="javascript:void(0)"><i class="fas fa-toggle-on" status="Active"></i></a></h4>
                          @else()
                            <h4><a class="updateRatingStatus" id="status-{{ $rating->id }}" record="rating" record_id="{{ $rating->id }}"  href="javascript:void(0)" ><i class="fas fa-toggle-off" status="Inactive"></i></a></h4>
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

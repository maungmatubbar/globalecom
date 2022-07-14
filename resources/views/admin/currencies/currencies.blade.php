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
              <li class="breadcrumb-item active">Currencies</li>
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
                <h3 class="card-title">Currencies</h3>
                <a href="{{ url('/admin/add-edit-currency') }}" class="btn btn-success float-right"><i class="fas fa-plus"></i> Add Currency</a>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="currency" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Currency Code</th>
                    <th>Exchange Rate</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <?php $i=1; ?>
                    @foreach ($currencies as $currency)
                    
                    <tr id="tableRow-{{ $currency->id }}">
                        <td>{{ $i++ }}</td>
                        <td>{{ $currency->currency_code }}</td>
                        <td>{{ $currency->exchange_rate }}</td>
                        <td>
                          @if($currency->status == 1)
                              <h4 ><a class="updateCurrencyStatus" id="status-{{ $currency->id }}" record="currency" record_id="{{ $currency->id }}"  href="javascript:void(0)"><i class="fas fa-toggle-on" status="Active"></i></a></h4>
                          @else()
                         <h4>
                            <a class="updateCurrencyStatus" id="status-{{ $currency->id }}" record="currency" record_id="{{ $currency->id }}"  href="javascript:void(0)" ><i class="fas fa-toggle-off" status="Inactive"></i></a>
                        </h4>
                          @endif
                      </td>
                      <td>
                        <a title="Edit" class="btn btn-primary" href="{{ url('/admin/add-edit-currency/'.$currency->id) }}"><i class="fas fa-edit"></i></a>
                        <a title="Delete" class="DeleteTableRow1 btn btn-danger" record="currency" record_id="{{ $currency->id }}"  href="javascript:void(0)"><i class="fas fa-trash-alt"></i></a>
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

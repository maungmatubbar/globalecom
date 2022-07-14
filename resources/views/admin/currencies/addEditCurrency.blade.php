@extends('layouts.admin_layout.admin_layout')
@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Catelogues Form</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{ url('/admin/dashboard') }}">Home</a></li>
              <li class="breadcrumb-item"><a href="{{ url('/admin/currencies') }}">Currencies</a></li>
              <li class="breadcrumb-item active">{{ $title }}</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- SELECT2 EXAMPLE -->
        <div class="col-md-8 mx-auto">
            <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">{{ $title }}</h3> 
                </div>
              
                <!-- /.card-header -->
                <form name="currencyForm" id="currencyForm" action="@if(empty($currency)){{ url('/admin/add-edit-currency') }} @else {{ url('/admin/add-edit-currency/'.$currency->id) }} @endif" method="POST">@csrf
                  <div class="card-body">
                      <div class="row">
                          <div class="col-md-8">
                              <div class="form-group">
                                  <label for="name">Currency Code</label>
                                  <input type="text" name="currency_code" class="form-control @error('currency_code') is-invalid @enderror"  id="currency_code" @if(!empty($currency)) value="{{ $currency->currency_code}}" @else  value="{{ old('currency_code') }}" @endif placeholder="Enter currency code">
                                  @error('currency_code')
                                          <span class="invalid-feedback" role="alert">
                                              <strong>{{ $message }}</strong>
                                          </span>
                                  @enderror
                              </div>
                              <div class="form-group">
                                  <label for="name">Exchange Rate</label>
                                  <input type="text" name="exchange_rate" class="form-control @error('exchange_rate') is-invalid @enderror"  id="exchange_rate" @if(!empty($currency)) value="{{ $currency->exchange_rate}}" @else  value="{{ old('exchange_rate') }}" @endif placeholder="Enter exchange rate">
                                  @error('exchange_rate')
                                          <span class="invalid-feedback" role="alert">
                                              <strong>{{ $message }}</strong>
                                          </span>
                                  @enderror
                              </div>
                              <!-- /.form-group -->
                          </div>
                      <!-- /.col -->
                      </div>
                      <!-- /.row -->
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer">
                      <button type="submit" class="btn btn-primary">@if(!empty($currency->id))Update currency @else Add currency @endif</button>
                  </div>
               </form>
              </div>
        </div>
        <!-- /.card -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
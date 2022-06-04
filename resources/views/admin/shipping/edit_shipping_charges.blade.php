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
              <li class="breadcrumb-item"><a href="{{ url('/admin/view-shipping-charges') }}">Shipping</a></li>
              <li class="breadcrumb-item active">Edit Shipping Charge</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- SELECT2 EXAMPLE -->
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Edit Shipping Charges</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i class="fas fa-minus"></i>
                    </button>
                    {{-- <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                      <i class="fas fa-times"></i>
                    </button> --}}
                </div>
              </div>
              <!-- /.card-header -->
              <form name="shippingForm" id="shippingForm" action="{{ url('admin/edit-shipping-charges/'.$shippingDetails['id']) }}" method="POST">@csrf
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="name">Shipping Country</label>
                                <input readonly  class="form-control" value="{{ $shippingDetails['country'] }}">
                            </div>
                            <!-- /.form-group -->
                            <div class="form-group">
                                <label for="name">0g to 500g</label>
                                <input type="number" name="0_500g"  class="form-control" value="{{ $shippingDetails['0_500g'] }}" placeholder="Enter Shipping Charge">
                            </div>
                            <div class="form-group">
                              <label for="name">501g to 1000g</label>
                              <input type="number" name="501_1000g"  class="form-control" value="{{ $shippingDetails['501_1000g'] }}" placeholder="Enter Shipping Charge">
                          </div>
                          <div class="form-group">
                            <label for="name">1001g to 2000g</label>
                            <input type="number" name="1001_2000g"  class="form-control" value="{{ $shippingDetails['1001_2000g'] }}" placeholder="Enter Shipping Charge">
                        </div>
                        <div class="form-group">
                          <label for="name">2001g to 5000g</label>
                          <input type="number" name="2001_5000g"  class="form-control" value="{{ $shippingDetails['2001_5000g'] }}" placeholder="Enter Shipping Charge">
                      </div>
                      <div class="form-group">
                        <label for="name">Above 5000g</label>
                        <input type="number" name="above_5000g"  class="form-control" value="{{ $shippingDetails['above_5000g'] }}" placeholder="Enter Shipping Charge">
                    </div>
                        </div>
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
             </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection
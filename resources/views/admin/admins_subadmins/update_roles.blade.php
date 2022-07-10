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
              <li class="breadcrumb-item"><a href="{{ url('/admin/admins-subadmins') }}">Admins / Sub-Admins</a></li>
              <li class="breadcrumb-item active">Update Role</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- SELECT2 EXAMPLE -->
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">{{ $title }}</h3>
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
          <form name="roleUpdateForm" id="roleUpdateForm" action="{{ url('/admin/update-role/'.$adminDetails->id) }}" method="POST">@csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group row">
                            @if(!empty($adminRoles))
                                @foreach ($adminRoles as $role)
                                    @if($role['module'] == 'categories')
                                       @if($role['view_access'] == 1 )
                                            @php $viewCategories = 'checked'; @endphp
                                        @else
                                            @php $viewCategories = ''; @endphp
                                       @endif
                                       @if($role['edit_access'] == 1 )
                                            @php $editCategories = 'checked'; @endphp
                                        @else
                                            @php $editCategories = ''; @endphp
                                       @endif
                                       @if($role['full_access'] == 1 )
                                            @php $fullCategories = 'checked'; @endphp
                                        @else
                                            @php $fullCategories = ''; @endphp
                                       @endif
                                    @endif
                                    @if($role['module'] == 'products')
                                       @if($role['view_access'] == 1 )
                                            @php $viewProducts = 'checked'; @endphp
                                        @else
                                            @php $viewProducts = ''; @endphp
                                       @endif
                                       @if($role['edit_access'] == 1 )
                                            @php $editProducts = 'checked'; @endphp
                                        @else
                                            @php $editProducts = ''; @endphp
                                       @endif
                                       @if($role['full_access'] == 1 )
                                            @php $fullProducts = 'checked'; @endphp
                                        @else
                                            @php $fullProducts = ''; @endphp
                                       @endif
                                    @endif
                                    @if($role['module'] == 'coupons')
                                       @if($role['view_access'] == 1 )
                                            @php $viewCoupons = 'checked'; @endphp
                                        @else
                                            @php $viewCoupons = ''; @endphp
                                       @endif
                                       @if($role['edit_access'] == 1 )
                                            @php $editCoupons = 'checked'; @endphp
                                        @else
                                            @php $editCoupons = ''; @endphp
                                       @endif
                                       @if($role['full_access'] == 1 )
                                            @php $fullCoupons = 'checked'; @endphp
                                        @else
                                            @php $fullCoupons = ''; @endphp
                                       @endif
                                    @endif
                                    @if($role['module'] == 'orders')
                                       @if($role['view_access'] == 1 )
                                            @php $viewOrders = 'checked'; @endphp
                                        @else
                                            @php $viewOrders = ''; @endphp
                                       @endif
                                       @if($role['edit_access'] == 1 )
                                            @php $editOrders = 'checked'; @endphp
                                        @else
                                            @php $editOrders = ''; @endphp
                                       @endif
                                       @if($role['full_access'] == 1 )
                                            @php $fullOrders = 'checked'; @endphp
                                        @else
                                            @php $fullOrders = ''; @endphp
                                       @endif
                                    @endif
                                @endforeach
                            @endif
                            <label for="name" class="col-md-3">Categories:-</label>
                            <div class="col-md-9">
                                <label><input type="checkbox" name="categories[view]" value="1" @if(isset($viewCategories)) {{  $viewCategories }} @endif /> View Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="categories[edit]" value="1" @if(isset($editCategories)) {{  $editCategories }} @endif /> Edit Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="categories[full]" value="1" @if(isset($fullCategories)) {{  $fullCategories }} @endif/> Full Access </label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-3">Products:-</label>
                            <div class="col-md-9">
                                <label><input type="checkbox" name="products[view]" value="1" @if(isset($viewProducts)) {{ $viewProducts }} @endif /> View Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="products[edit]" value="1" @if(isset($editProducts)) {{ $editProducts }} @endif /> Edit Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="products[full]" value="1" @if(isset($fullProducts)) {{ $fullProducts }} @endif /> Full Access </label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-3">Coupons:-</label>
                            <div class="col-md-9">
                                <label><input type="checkbox" name="coupons[view]" value="1" @if(isset($viewCoupons)) {{ $viewCoupons }} @endif /> View Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="coupons[edit]" value="1" @if(isset( $editCoupons)) {{ $editCoupons }} @endif /> Edit Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="coupons[full]" value="1" @if(isset($fullCoupons)) {{ $fullCoupons }} @endif /> Full Access </label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-3">Orders:-</label>
                            <div class="col-md-9">
                                <label><input type="checkbox" name="orders[view]" value="1" @if(isset($viewOrders)) {{ $viewOrders }} @endif /> View Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="orders[edit]" value="1" @if(isset($editOrders)) {{ $editOrders }} @endif /> Edit Access </label>&nbsp;&nbsp;
                                <label><input type="checkbox" name="orders[full]" value="1" @if(isset($fullOrders)) {{ $fullOrders }} @endif /> Full Access </label>
                            </div>
                        </div>
                    <!-- /.form-group -->
                </div>
                <!-- /.col -->
          
                <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
         </form>
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
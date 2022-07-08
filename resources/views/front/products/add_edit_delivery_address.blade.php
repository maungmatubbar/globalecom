@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="index.html">Home</a> <span class="divider">/</span></li>
		<li class="active">Delivery Address</li>
    </ul>
	<h3>Delivery Address 
         <a href="{{ url('/checkout') }}" class="btn btn-large pull-right"><i class="icon-arrow-left"></i> Back</a></h3>	
	<hr class="soft"/>
    @if($errors->any())
        <div class="alert alert-danger">
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </div>
    @endif
	<div class="row">
		<div class="span4">
			<div class="well text-center">
                <h3>{{ $title }}</h3><br/>
                <h6>Enter Your Delivery Address Information.</h6>
                <form id="deliveryAddress" action="{{ url('/add-edit-delivery-address/'.$deliveryAddresse->id) }}" method="post">
                    @csrf
                    <div class="control-group">
                        <label class="control-label" for="name">Full Name*</label>
                        <div class="controls">
                            <input class="span3" class="@error('name') is-invalid @enderror"  type="text" id="name" name="name" @if(isset($deliveryAddresse->name)) value="{{ $deliveryAddresse->name }}" @else value="{{ old('name') }}" @endif placeholder="Enter Name">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="address">Address*</label>
                        <div class="controls">
                            <input class="span3"  type="text" id="address" name="address" @if(isset($deliveryAddresse->address)) value="{{ $deliveryAddresse->address }}" @else value="{{ old('address') }}" @endif placeholder="Enter Address">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="city">City</label>
                        <div class="controls">
                            <input class="span3"  type="text" id="city" name="city" @if(isset($deliveryAddresse->city)) value="{{ $deliveryAddresse->city }}" @else value="{{ old('city') }}" @endif placeholder="Enter City">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="state">State</label>
                        <div class="controls">
                            <input class="span3"  type="text" id="state" name="state" @if(isset($deliveryAddresse->state)) value="{{ $deliveryAddresse->state }}" @else value="{{ old('state') }}" @endif placeholder="Enter State">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="country">Country</label>
                        <div class="controls">
                            <select  class="span3" name="country" id="country">
                                <option>Select Country</option>
                                @foreach($countries as $country)
                                <option value="{{ $country['country_name'] }}" @if(!empty($deliveryAddresse->country) && $deliveryAddresse->country==$country['country_name']) selected @elseif($country['country_name']==old('country')) selected @endif>{{ $country['country_name'] }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="pincode">Pincode</label>
                        <div class="controls">
                            <input class="span3"  type="text" id="pincode" name="pincode" @if(isset($deliveryAddresse->pincode)) value="{{ $deliveryAddresse->pincode }}" @else value="{{ old('pincode') }}" @endif placeholder="Enter Pincode">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="mobile">Mobile Number*</label>
                        <div class="controls">
                        <input class="span3" class="@error('mobile') is-invalid @enderror"  type="text" id="mobile" name="mobile"  @if(isset($deliveryAddresse->mobile)) value="{{ $deliveryAddresse->mobile }}" @else value="{{ old('mobile') }}" @endif placeholder="Enter mobile number">
                        </div>
                    </div>
                    <div class="controls">
                        <button type="submit" class="btn block btn-info">@if(empty($deliveryAddresse->id)) Save @else Update @endif</button>
                    </div>
                </form>
            </div>
		</div>
	</div>	
    <a href="{{ url('/checkout') }}" class="btn btn-large pull-right"><i class="icon-arrow-left"></i> Back</a>
</div>
@endsection
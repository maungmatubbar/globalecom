@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="index.html">Home</a> <span class="divider">/</span></li>
		<li class="active">My Account</li>
    </ul>
	<h3>My Account</h3>	
	<hr class="soft"/>
    @if(Session::has('error_message'))
        <div class="alert alert-danger">
        {{ Session::get('error_message') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif
    @if(Session::has('success_message'))
        <div class="alert alert-success">
        {{ Session::get('success_message') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif
	<div class="row">
		<div class="span4">
			<div class="well">
			<h5>My ACCOUNT</h5><br/>
			<p>Enter your contact information.</p><br/>
			<form id="accountForm" action="{{ url('/account') }}" method="post">
                @csrf
                <div class="control-group">
                    <label class="control-label" for="name">Full Name*</label>
                    <div class="controls">
                        <input class="span3" class="@error('name') is-invalid @enderror"  type="text" id="name" name="name" value="{{ $userDetails['name'] }}" placeholder="Enter Name">
                    </div>
                    @error('name')
                        <span class="invalid-feedback" style="color:brown" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="control-group">
                    <label class="control-label" for="address">Address*</label>
                    <div class="controls">
                        <input class="span3"  type="text" id="address" name="address"  value="{{ $userDetails['address'] }}" placeholder="Enter Address">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="city">City</label>
                    <div class="controls">
                        <input class="span3"  type="text" id="city" name="city"  value="{{ $userDetails['city'] }}" placeholder="Enter City">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="state">State</label>
                    <div class="controls">
                        <input class="span3"  type="text" id="state" name="state"  value="{{ $userDetails['state'] }}" placeholder="Enter State">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="country">Country</label>
                    <div class="controls">
                        <select  class="span3" name="country" id="country">
                            <option>Select Country</option>
                            @foreach($countries as $country)
                            <option value="{{ $country['country_name'] }}" @if($country['country_name']==$userDetails['country']) selected @endif>{{ $country['country_name'] }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="pincode">Pincode</label>
                    <div class="controls">
                        <input class="span3"  type="text" id="pincode" name="pincode"  value="{{ $userDetails['pincode'] }}" placeholder="Enter Pincode">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="mobile">Mobile Number*</label>
                    <div class="controls">
                      <input class="span3" class="@error('mobile') is-invalid @enderror"  type="text" id="mobile" name="mobile"  value="{{ $userDetails['mobile'] }}" placeholder="Enter mobile number">
                    </div>
                    @error('mobile')
                        <span class="invalid-feedback" style="color: brown" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                  </div>
                <div class="control-group">
                    <label class="control-label" for="email">Email</label>
                    <div class="controls">
                    <input class="span3"  type="email" value="{{ $userDetails['email'] }}" readonly>
                    </div>
                </div>
			  <div class="controls">
			  <button type="submit" class="btn block btn-info">Update</button>
			  </div>
			</form>
		</div>
		</div>
		<div class="span1"> &nbsp;</div>
            <div class="span4">
                <div class="well">
                <h5>UPDATE PASSWORD</h5>
                <form id="passwordForm" method="post" action="{{ url('/update-user-pwd') }}">
                    @csrf
                    <div class="control-group">
                        <label class="control-label" for="currentPassword">Current Password</label>
                        <div class="controls">
                        <input class="span3"  type="password" id="currentPassword" name="currentPassword" placeholder="Enter Current Password">
                        <br>
                        <span id="chkPwd"></span>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="newPassword">New Password</label>
                        <div class="controls">
                        <input class="span3"  type="password" id="newPassword" name="newPassword" placeholder="Enter New Password">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="confirmPassword">Confirm Password</label>
                        <div class="controls">
                        <input class="span3"  type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Confirm Password">
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls">
                        <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
		</div>
	</div>	
</div>
@endsection
@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="index.html">Home</a> <span class="divider">/</span></li>
		<li class="active">Login</li>
    </ul>
	<h3>Forgot Password</h3>	
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
			<h5>Forgot Password?</h5>
			<p class="text-success">Enter email to get new password.</p><br/>
			<form id="forgotPasswordForm" action="{{ url('/forgot-password') }}" method="post">
                @csrf
                <div class="control-group">
                    <label class="control-label" for="email">Email</label>
                    <div class="controls">
                    <input class="span3"  type="email" id="email" name="email" placeholder="Enter email" required>
                    </div>
                </div>
			  <div class="controls">
			  <button type="submit" class="btn block btn-warning">Submit</button>
			  </div>
			</form>
		</div>
		</div>
		<div class="span1"> &nbsp;</div>
            <div class="span4">
                <div class="well">
                <h5>ALREADY REGISTERED ?</h5>
                <form id="loginForm" method="post" action="{{ url('/login') }}">
                    @csrf
                    <div class="control-group">
                        <label class="control-label" for="email">Email</label>
                        <div class="controls">
                        <input class="span3"  type="email" id="email" name="email" placeholder="Enter email">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="password">Password</label>
                        <div class="controls">
                        <input class="span3"  type="password" id="password" name="password" placeholder="Enter password">
                        </div>
                        </div>
                    <div class="control-group">
                        <div class="controls">
                        <button type="submit" class="btn btn-primary">Sign in</button> <a href="forgetpass.html">Forget password?</a>
                        </div>
                    </div>
                </form>
            </div>
		</div>
	</div>	
</div>
@endsection
@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
		<li class="active"> Failed</li>
    </ul>
	<h3>FAILED</h3>	
	<hr class="soft"/>
    <div align="center">
        <h3 class="text-uppercase">YOUR PAYMENT HAS BEEN FAILED.</h3>
        <p>Please try again after sometimes and contact us if there is any enquiry.</p>
    </div>
</div>

@endsection
<?php
    // Session::forget('order_id');
    // Session::forget('grand_total');
    // session::forget('couponCode');
    // session::forget('couponAmount');
?>
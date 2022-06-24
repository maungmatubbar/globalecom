@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
		<li class="active"> Confirmed</li>
    </ul>
	<h3>CONFIRMED</h3>	
	<hr class="soft"/>
    <div align="center">
        <h3 class="text-uppercase">YOUR PAYMENT HAS BEEN CONFIRMED.</h3>
        <p>Thank you for payment. We will process your order very soon.</p>
        <p>Your order number is {{ Session::get('order_id') }} and total amount paid is BDT {{ Session::get('grand_total') }}</p>
    </div>
</div>

@endsection
<?php
    Session::forget('order_id');
    Session::forget('grand_total');
    session::forget('couponCode');
    session::forget('couponAmount');
?>
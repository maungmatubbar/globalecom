@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
		<li class="active"> Thanks</li>
    </ul>
	<h3>THANKS</h3>	
	<hr class="soft"/>
    <div class="text-center">
        <h3>Your order has been placed successfully.</h3>
        <p>Your order id is {{ Session::get('order_id') }} and grand total is BDT {{ Session::get('grand_total') }}</p>
    </div>
</div>

@endsection
<?php
    Session::forget('order_id');
    Session::forget('grand_total');
    session::forget('couponCode');
    session::forget('couponAmount');
?>
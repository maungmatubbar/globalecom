@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="index.html">Home</a> <span class="divider">/</span></li>
		<li class="active">Wishlist</li>
    </ul>
	<h3>  WISHLIST ITEMS [ <small><span class="totalWishlistItems">{{ totalWishlistItems() }}</span> item(s)</small> ]<a href="{{ url('/') }}" class="btn btn-large pull-right"><i class="icon-arrow-left"></i> Continue Shopping </a></h3>	
	<hr class="soft"/>
	@if(Session::has('success_message'))
		<div class="alert alert-success">
		{{ Session::get('success_message') }}
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
	@endif  
	@if(Session::has('error_message'))
		<div class="alert alert-danger">
		{{ Session::get('error_message') }}
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
	@endif
	<div id="AppendWishlistItems">
		@include('front.wishlist.wishlist_items')	
	</div>	
	<a href="{{ url('/') }}" class="btn btn-large"><i class="icon-arrow-left"></i> Continue Shopping </a>
	
</div>

@endsection
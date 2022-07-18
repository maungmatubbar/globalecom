@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
		<li class="active"> Orders</li>
    </ul>
	<h3>Orders</h3>	
    @if(Session::has('error_message'))
		<div class="alert alert-danger">
		{{ Session::get('error_message') }}
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
	@endif
	<hr class="soft"/>
    <div class="row">
        <div class="span8">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Products</th>
                        <th>Payment Method</th>
                        <th>Grand Total</th>
                        <th>Create On</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $i=1; ?>
                    @foreach ($orders as $order)
                        <tr>
                            <td>{{ $i++ }}</td>
                            <td>
                                @foreach($order['orders_products'] as $order_product)
                                    {{ $order_product['product_code'] }};
                                @endforeach
                            </td>
                            <td>{{ $order['payment_method'] }}</td>
                            <td>BDT {{ $order['grand_total'] }}</td>
                            <td>{{ date("d-m-Y",strtotime($order['created_at'])) }}</td>
                            <td><a class="btn btn-default" href="{{ url('orders/'.$order['id']) }}">View</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

@endsection
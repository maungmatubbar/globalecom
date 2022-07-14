<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
<style>
.invoice-title h2, .invoice-title h3 {
    display: inline-block;
}

.table > tbody > tr > .no-line {
    border-top: none;
}

.table > thead > tr > .no-line {
    border-bottom: none;
}

.table > tbody > tr > .thick-line {
    border-top: 2px solid;
}
</style>
<div class="container">
    <div class="row">
        <div class="col-xs-12">
    		<div class="invoice-title">
    			<h2>Invoice</h2>
                <h3 class="pull-right">Order #{{ $orderDetails['id'] }}</h3>
                <br/>
                <span class="pull-right">
                    <?php echo DNS1D::getBarcodeHTML($orderDetails['id'], 'C39+'); ?>
                </span>
                <br/>
    		</div>
            <div class="row">
                <span class="pull-left"><img src="{{ asset('images/logo/logo.png') }}" alt=""></span>
                <h3 class="pull-right">Tracking No: #{{ $orderDetails['tracking_number'] }}</h3>
            </div>
    		<hr>
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    				<strong>Billed To:</strong><br>
                        {{ $userDetails['name'] }}<br>
                        @if(!empty( $userDetails['address']))
    					    {{ $userDetails['address'] }}<br>
                        @endif
                        @if(!empty( $userDetails['city'])|| !empty( $userDetails['state']) || !empty($userDetails['pincode']))
    					{{ $userDetails['city'] }}, {{ $userDetails['state'] }}-({{ $userDetails['pincode'] }})<br>
                        @endif
                        @if(!empty($userDetails['country']))
    					{{ $userDetails['country'] }}<br>
                        @endif
    					{{ $userDetails['mobile'] }}<br>
    				</address>
    			</div>
    			<div class="col-xs-6 text-right">
    				<address>
        			<strong>Shipped To:</strong><br>
                    {{ $orderDetails['name'] }}<br>
                    {{ $orderDetails['address'] }}<br>
                    {{ $orderDetails['city'] }}, {{ $orderDetails['state'] }}-({{ $orderDetails['pincode'] }})<br>
                    {{ $orderDetails['country'] }}<br>
                    {{ $orderDetails['mobile'] }}<br>
    				</address>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    					<strong>Payment Method:</strong><br>
    					{{ $orderDetails['payment_method'] }}<br>
    					{{ $orderDetails['email'] }}<br>
    				</address>
    			</div>
    			<div class="col-xs-6 text-right">
    				<address>
    					<strong>Order Date:</strong><br>
    					{{ date("F j, Y",strtotime($orderDetails['created_at'])) }}<br><br>
    				</address>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>Order summary</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Item</strong></td>
                                    <td><strong>BARCODE</strong></td>
        							<td class="text-center"><strong>Price</strong></td>
        							<td class="text-center"><strong>Quantity</strong></td>
        							<td class="text-right"><strong>Totals</strong></td>
                                </tr>
    						</thead>
    						<tbody>
    							<!-- foreach ($order->lineItems as $line) or some such thing here -->
                                @php $subTotal = 0; @endphp
                                @foreach ($orderDetails['orders_products'] as $orderProduct)
                                    <tr>
                                        <td>
                                            {{ $orderProduct['product_code'] }} <br>
                                            {{ $orderProduct['product_name'] }} <br>
                                            {{ $orderProduct['product_color'] }} <br>
                                            {{ $orderProduct['product_size'] }}
                                        </td>
                                        <td>
                                            <?php echo DNS1D::getBarcodeHTML($orderProduct['product_code'], 'C39'); ?>
                                        </td>
                                        <td class="text-center">{{ $orderProduct['product_price'] }}</td>
                                        <td class="text-center">{{ $orderProduct['product_qty'] }}</td>
                                        <td class="text-right">BDT 
                                            {{ $orderProduct['product_qty'] * $orderProduct['product_price'] }}
                                        </td>
                                    </tr>
                                    @php
                                        $subTotal = $subTotal + $orderProduct['product_qty'] * $orderProduct['product_price'];
                                    @endphp
                                @endforeach
                                <tr>
									<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Sub Total</strong></td>
    								<td class="no-line text-right">BDT {{ $subTotal }}</td>
    							</tr>
    							<tr>
									<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Shipping</strong></td>
    								<td class="no-line text-right">BDT {{ $orderDetails['shipping_charges'] }}</td>
    							</tr>
                                @if($orderDetails['coupon_amount']>0)
                                    <tr>
										<td class="no-line"></td>
                                        <td class="no-line"></td>
                                        <td class="no-line"></td>
                                        <td class="no-line text-center"><strong>Discount</strong></td>
										<?php $discount = $orderDetails['coupon_amount'] ?>
                                        <td class="no-line text-right">BDT {{ round($discount) }}</td>

                                    </tr>
								@else
									{{ $discount = 0 }}
                                @endif
    							<tr>
									<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Grand Total</strong></td>
    								<td class="no-line text-right">BDT {{ round($orderDetails['grand_total']) }}</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>
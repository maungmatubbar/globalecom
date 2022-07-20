<?php
 use App\Product;
 use App\Order;
 $getOrderStatus = Order::getOrderStatus($orderDetails['id']);
 ?>
@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
		<li class="active"><a href="{{ url('/orders') }}">Orders</a> </li>
        <span class="divider">/</span>
		<li class=""><a href="#">Order Details</a> </li>
    </ul>
	<h3>Order #{{ $orderDetails['id'] }} Details
        @if($getOrderStatus == 'New')
            <span class="pull-right">
                <button type="button" class="btn" data-toggle="modal" data-target="#OrderCancelModal">
                    <i class="icon-remove"></i> Cancel Order
                  </button>
            </span>
        @endif
        @if($getOrderStatus == 'Delivered')
            <span class="pull-right">
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#OrderReturnModal">
                    Return / Exchange Order
                  </button>
            </span>
        @endif
    </h3>
    @if(Session::has('success_message'))
		<div class="alert alert-success">
		{{ Session::get('success_message') }}
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
	@endif  
	<hr class="soft"/>
    <div class="row">
        <div class="span4">
            <table class="table table-bordered table-striped table-hover">
                <tbody>
                    <tr>
                        <th colspan="2">Order Details</th>
                    </tr>
                    <tr>
                        <td>Order Date</td>
                        <td>{{ date("d-m-Y",strtotime($orderDetails['created_at'])) }}</td>
                    </tr>
                    <tr>
                        <td>Order Status</td>
                        <td style="color:rgb(66, 210, 30);">{{ $orderDetails['order_status'] }}</td>
                    </tr>
                    <tr>
                        <td>Order Total</td>
                        <td>BDT {{ $orderDetails['grand_total'] }}</td>
                    </tr>
                    @if(!empty($orderDetails['courier_name']))
                        <tr>
                            <td>Courier Name</td>
                            <td>{{ $orderDetails['courier_name'] }}</td>
                        </tr>
                    @endif
                    @if(!empty($orderDetails['tracking_number']))
                        <tr>
                            <td>Tracking Number</td>
                            <td>#{{ $orderDetails['tracking_number'] }}</td>
                        </tr>
                    @endif
                    <tr>
                        <td>Shipping Charges</td>
                        <td>BDT {{ $orderDetails['shipping_charges'] }}</td>
                    </tr>
                    <tr>
                        <td>Coupon Code</td>
                        <td>{{ $orderDetails['coupon_code'] }}</td>
                    </tr>
                    <tr>
                        <td>Coupon Amount</td>
                        <td>BDT {{ $orderDetails['coupon_amount'] }}</td>
                    </tr>
                    <tr>
                        <td>Payment Method</td>
                        <td>{{ $orderDetails['payment_method'] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="span4">
            <table class="table table-bordered table-striped table-hover">
                <tbody>
                    <tr>
                        <th colspan="2">Delivery Address</th>
                    </tr>
                    <tr>
                        <td>Full Name</td>
                        <td>{{ $orderDetails['name'] }}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{{ $orderDetails['address'] }}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{{ $orderDetails['city'] }}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{{ $orderDetails['state'] }}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{{ $orderDetails['country'] }}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>{{ $orderDetails['pincode'] }}</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>{{ $orderDetails['mobile'] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="span8">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product Size</th>
                        <th>Product Color</th>
                        <th>Product Qty</th>
                        <th>Item Status</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($orderDetails['orders_products'] as $product)
                        <tr>
                            <td>
                                <?php $productImage =  Product::getProductImage($product['product_id']);
                                 ?>
                                <a target="_blank" href="{{ url('product/'.$product['product_id']) }}">
                                    <img  src="{{ asset('images/product_images/small/'.$productImage) }}" alt="Order Product Image" width="100" height="120" />
                                </a>
                            </td>
                            <td>{{ $product['product_code'] }}</td>
                            <td>{{ $product['product_name'] }}</td>
                            <td>{{ $product['product_size'] }}</td>
                            <td>{{ $product['product_color'] }}</td>
                            <td>{{ $product['product_qty'] }}</td>
                            <td>{{ $product['item_status'] }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
<!--Order Cancel Modal -->
<div class="modal fade" id="OrderCancelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <form action="{{ url('/order/cancel') }}" method="post">@csrf
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="OrderCancelModalLabel">Reason For Cancelletion</h5>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="order_id" value="{{ $orderDetails['id'] }}">
                    <select name="reason" id="reasonCancel" class="form-control">
                        <option value="">Select reason</option> 
                        <option value="Order Created By Mistake">Order Created By Mistake</option> 
                        <option value="Item Not Arrive On time">Item Not Arrive On time</option> 
                        <option value="Shipping Cost Too High">Shipping Cost Too High</option> 
                        <option value="Found Cheaper Somewhere Else">Found Cheaper Somewhere Else</option> 
                        <option value="Others">Others</option> 
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary btnCancelOrder">Cancel Order</button>
                </div>
            </div>
      </div>
   </form>
</div>
<!--Order Return Modal -->
<div class="modal fade" id="OrderReturnModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" align="center">
    <form action="{{ url('/order/return-exchange') }}" method="post">@csrf
         <div class="modal-dialog" role="document">
             <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="OrderCancelModalLabel">Reason For Return / Exchange</h5>
                 </div>
                 <div class="modal-body">
                    <select name="return_exchange" id="return_exchange" class="control-form">
                        <option value="">Select Return / Exchange</option> 
                        <option value="Return">Return</option> 
                        <option value="Exchange">Exchange</option> 
                    </select>
                </div>
                 <div class="modal-body">
                    <input type="hidden" name="order_id" value="{{ $orderDetails['id'] }}">
                    <select name="product_info" id="returnProduct">
                       <option value="">Select Product</option>
                       @foreach ($orderDetails['orders_products'] as $product)
                            @if($product['item_status']!='Return Initiated' && $product['item_status']!='Return Approved' && $product['item_status']!='Return Rejected' && $product['item_status']!='Exchange Initiated' && $product['item_status']!='Exchange Approved' && $product['item_status']!='Exchange Rejected')
                            <option value="{{  $product['product_code'].'-'.$product['product_size'] }}">{{  $product['product_code'].'-'.$product['product_size'] }}</option>
                           @endif
                       @endforeach
                    </select>
                 </div>
                 <div class="modal-body">
                     <select name="reason" id="returnReason" class="control-form">
                         <option value="">Select Return Reason</option> 
                         <option value="Product damaged, but shipping box ok">Product damaged, but shipping box ok</option> 
                         <option value="Item arrive too late">Item arrived too late</option> 
                         <option value="Wrong item was sent">Wrong item was sent</option> 
                         <option value="Item defactive or doesn't work">Item defactive or doesn't work</option> 
                         <option value="Required Smaller Size">Required Smaller Size</option>
                         <option value="Required Larger Size">Required Larger Size</option>
                     </select>
                 </div>
                 <div class="modal-body product_size">
                    <select name="required_size" id="productSize" class="control-form">
                        <option value="">Select Required Size</option> 
                    </select>
                </div>
                 <div class="modal-body">
                    <textarea name="comment" id="" placeholder="Comment"></textarea>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn" data-dismiss="modal">Close</button>
                     <button type="submit" class="btn btn-primary btnReturnOrder">Submit</button>
                 </div>
             </div>
       </div>
    </form>
 </div>
@endsection
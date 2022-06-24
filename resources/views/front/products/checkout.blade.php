@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
		<li><a href="index.html">Home</a> <span class="divider">/</span></li>
		<li class="active"> CHECKOUT</li>
    </ul>
	<h3>  CHECKOUT [ <small class="totalCartItems">{{ totalCartItems() }} item(s)</small> ]<a href="{{ url('/cart') }}" class="btn btn-large pull-right"><i class="icon-arrow-left"></i> Back To Cart </a></h3>	
	<hr class="soft"/>
    <span class="message"></span>
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
    <form name="checkoutForm" id="checkoutForm" method="post" action="{{ url('/checkout') }}">
        <table class="table table-bordered">
            <tr>
                <th> 
                    <strong>Delivery Address</strong>
                </th>
                <th>
                    <div>
                        <a class="btn btn-success" href="{{ url('add-edit-delivery-address') }}">
                            <span class="icon-plus"></span> Add
                        </a>
                    </div>
                </th>
            </tr>
                @foreach ($deliveryAddresses as $deliveryAddress)
                    <tr id="tableRow-{{ $deliveryAddress['id'] }}"> 
                        <td> 
                            <div class="control-group" style="float:left; margin-top:-2px; margin-right:5px">
                                <input type="radio" id="address{{ $deliveryAddress['id'] }}" name="address_id" value="{{ $deliveryAddress['id'] }}" shipping_charges="{{ $deliveryAddress['shipping_charges'] }}" total_price="{{ $total_price }}" coupon_amount="{{ Session::get('couponAmount') }}" codpincodeCount="{{ $deliveryAddress['cod_pincode_count'] }}" prepaidpincodeCount = "{{ $deliveryAddress['prepaid_pincode_count'] }}">
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="inputPassword1">
                                    {{ $deliveryAddress['name'] }},{{ $deliveryAddress['address'] }},{{ $deliveryAddress['city'] }}-({{ $deliveryAddress['pincode'] }}),{{ $deliveryAddress['state'] }},{{ $deliveryAddress['country'] }},Mobile:{{ $deliveryAddress['mobile'] }}
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <a class="btn btn-info" href="{{ url('add-edit-delivery-address/'.$deliveryAddress['id']) }}">
                                    <i class="icon-edit"></i>
                                </a>
                                <a class="deliveryDelete btn btn-danger" record_id="{{ $deliveryAddress['id'] }}"  href="javascript:void(0)" >
                                    <i class="icon-trash"></i>
                                </a>
                            </div>
                            
                        </td>
                    </tr>
                @endforeach
        </table>
        
        <?php use App\Product; ?>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th colspan="2">Description</th>
                    <th>Quantity/Update</th>
                    <th>Price</th>
                    <th>Product/Category<br/>Discount</th>
                    <th>Sub Total</th>
                </tr>
            </thead>
            <tbody>
                <?php $total_price=0; $totalDiscount=0; ?>
                @foreach ($userCartItems as $item)
                <?php $attrPrice = Product::getAttrDiscountedPrice($item->product_id,$item->size);
                ?>
                <tr>
                    <td> <img width="60" src="{{ asset('/images/product_images/small/'.$item->product->main_image) }}" alt=""/></td>
                    <td colspan="2">{{ $item->product->product_name }}({{ $item->product->product_code }})<br/>Color : {{ $item->product->product_color }}
                        <br/>Size : {{ $item->size }}
                    </td>
                    <td>
                        {{ $item->quantity }}
                    </td>
                    <td>Tk.{{ $attrPrice['price']*$item->quantity  }}.00</td>
                    <td>Tk.{{ $attrPrice['discount']*$item->quantity  }}.00</td>
                    <!--<?php //$totalDiscount=$attrPrice['discount']*$totalDiscount ?>-->
                    <td>Tk.{{ $attrPrice['final_price']*$item->quantity }}.00</td>
                </tr>
                <?php $total_price = $total_price+( $attrPrice['final_price']*$item->quantity); ?>
                @endforeach
                <tr>
                    <td colspan="6" style="text-align:right">Total Price:	</td>
                    <td> Tk.{{ $total_price }}.00</td>
                <!--</tr>
                    <tr>
                    <td colspan="6" style="text-align:right">Total Discount:	</td>
                    <td> Tk.{{ $totalDiscount }}.00</td>-->
                </tr>
                <tr>
                    <td colspan="6" style="text-align:right">Coupon Discount:</td>
                    <td class="couponAmount">
                        @if(Session::has('couponAmount'))
                            Tk. {{ Session::get('couponAmount') }}
                        @else
                            Tk.00
                        @endif
                    </td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align:right">Shipping Charges:</td>
                    <td class="shipping_charges">Tk.00</td>
                </tr>
                <tr>
                    <td colspan="6" style="text-align:right">
                        <strong>
                            GRAND TOTAL( Tk.{{ $total_price }} - <span class="couponAmount">Tk.{{ Session::get('couponAmount') }}</span>+<span class="shipping_charges">Tk.00</span>)=
                        </strong>
                    </td>
                    <td class="label label-important" style="display:block"><strong class="grand_total">Tk.{{ $grandTotal = $total_price - Session::get('couponAmount') }} </strong>
                        <?php Session::put('grand_total',$grandTotal); ?>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <td> 
                        <form class="form-horizontal" id="ApplyCoupon" method="post" action="javascript::void(0);" @if(auth::check()) user="1" @endif>
                            @CSRF
                            <div class="control-group">
                                <label class="control-label"><strong> PAYMENT METHODS: </strong></label>
                                <div class="controls">
                                    <span class="codMethod">
                                        <label>
                                            <input class="form-check-input" type="radio" name="payment_gateway" id="COD" value="COD">
                                            <strong> COD(Cash On Delivery)</strong>
                                        </label>&nbsp;
                                    </span>
                                    <span class="prepaidMethod">
                                        <label>
                                            <input class="form-check-input" type="radio" name="payment_gateway" id="SSL" value="SSL">
                                            <strong>SSL</strong>
                                        </label>&nbsp;
                                        <label>
                                            <input class="form-check-input" type="radio" name="payment_gateway" id="Paypal" value="Paypal">
                                            <strong>Paypal</strong>
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
                                    
        <a href="{{ url('/cart') }}" class="btn btn-large"><i class="icon-arrow-left"></i> Back To Cart </a>
        <button type="submit" class="btn btn-large pull-right">Place Order <i class="icon-arrow-right"></i></button>
    </form>
</div>

@endsection
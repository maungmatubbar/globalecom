<html>
    <head>
        <title>Ecom Shop Bd Cloth Store</title>
    </head>
    <body>
        <table width="700">
            <tr><td>&nbsp;</td></tr>
            <tr><td><img src="{{ asset('images/logo/logo.png') }}" alt="logo"></td></tr>
            <tr><td>&nbsp;</td></tr>
            <tr><td>Hello {{$name}}</td></tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
                <td>Your order #{{ $order_id }} status has been updated to '{{ $orderDetails['order_status'] }}' placed with Ecom Shop BD.Your Order details are below:-</td>
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
                @if(!empty($orderDetails['courier_name']) && !empty($orderDetails['tracking_number']))
                <td>The Courier Name is <strong>{{ $orderDetails['courier_name'] }}</strong> and Tracking Number is <strong>#{{ $orderDetails['tracking_number'] }}</strong>
                </td>
                @endif
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td></tr>
            <tr><td>Order No: {{$order_id}}</td></tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
            	<td>
            		<table style="width:95%" cellpadding="5" cellspacing="5" bgcolor="#f7f4f4">
            			<tr bgcolor="#cccccc">
            				<th>Product Name</th>
            				<th>Code</th>
            				<th>Size</th>
            				<th>Color</th>
            				<th>Quanity</th>
            				<th>Price</th>
            			</tr>
            			@foreach($orderDetails['orders_products'] as $order)
                            <tr align="center">
                                <td>{{ $order['product_name'] }}</td>
                                <td>{{ $order['product_code'] }}</td>
                                <td>{{ $order['product_size'] }}</td>
                                <td>{{ $order['product_color'] }}</td>
                                <td>{{ $order['product_qty'] }}</td>
                                <td>{{ $order['product_price'] }}</td>
                            </tr>
                        @endforeach
                        <tr>
                            <td colspan="5" align="right">Shipping Charges</td>
                            <td>BDT {{ $orderDetails['shipping_charges'] }}</td>
                        </tr>
                        <tr>
                            <td colspan="5" align="right">Coupon Discount</td>
                            <td>
                                @if($orderDetails['coupon_amount']>0)
                                    BDT {{ $orderDetails['coupon_amount'] }}
                                @else
                                    0
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td align="right" colspan="5">Grand Total</td>
                            <td>BDT {{ $orderDetails['grand_total'] }}</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td>
                                <strong>Delivery Address</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['name'] }}</td>
                        </tr>
                        <tr>
                            <td>{{ $email }}</td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['address'] }}</td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['city'] }}</td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['state'] }}</td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['country'] }}</td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['pincode'] }}</td>
                        </tr>
                        <tr>
                            <td>{{ $orderDetails['mobile'] }}</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                         <tr>
                            <td>For any enquiries,You can contact us at <a href="https://ecomshopbd.com">ecomshopbd.com</a>
                            </td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr><td>Regards, Team EcomShopBD Developers</td></tr>
                        <tr><td>&nbsp;</td></tr>
            		</table>
            	</td>
        	</tr>
        </table>
    </body>
</html>

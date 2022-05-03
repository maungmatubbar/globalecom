<?php use App\Product; ?>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Product</th>
            <th colspan="2">Description</th>
            <th>Quantity/Update</th>
            <th>Unit Price</th>
            <th>Product/Category<br/>Discount</th>
            <th>Sub Total</th>
        </tr>
    </thead>
    <tbody>
        <?php $total_price=0; $totalDiscount=0; ?>
        @foreach ($userCartItems as $item)
        <!--Get Attribute Price-->
        <?php $attrPrice = Product::getAttrDiscountedPrice($item->product_id,$item->size);;
        ?>
        <tr>
        <td> 
            <img width="60" src="{{ asset('/images/product_images/small/'.$item->product->main_image) }}" alt=""/>
        </td>
        <td colspan="2">
            {{ $item->product->product_name }}({{ $item->product->product_code }})
            <br/>Color : {{ $item->product->product_color }}
            <br/>Size : {{ $item->size }}
        </td>
        <td>
            <div class="input-append"><input class="span1" style="max-width:34px" value="{{ $item->quantity }}" id="appendedInputButtons" size="16" type="text">
                <button class="btn btnItemUpdate qtyMinus" data-cartid="{{ $item->id }}" type="button"><i class="icon-minus"></i></button>
                <button class="btn btnItemUpdate qtyPlus" data-cartid="{{ $item->id }}" type="button"><i class="icon-plus"></i></button>
                <button class="btn btn-danger btnItemDelete" data-cartid="{{ $item->id }}" type="button"><i class="icon-remove icon-white"></i></button>
            </div>
        </td>
        <td>Tk.{{ $attrPrice['price'] }}.00</td>
        <td>Tk.{{ $attrPrice['discount'] }}.00</td>
        <?php $totalDiscount = $attrPrice['discount']*$item->quantity + $totalDiscount; ?>
        <td>Tk.{{ $attrPrice['final_price']*$item->quantity }}.00</td>
        </tr>
        <?php $total_price = $total_price+( $attrPrice['final_price']*$item->quantity); ?>
    @endforeach
    <tr>
        <td colspan="6" style="text-align:right">Total Price:	</td>
        <td> Tk.{{ $total_price }}.00</td>
    <tr>
        <td colspan="6" style="text-align:right">
            Coupon Discount:
        </td>
        <td class="couponAmount">
            @if(Session::has('couponAmount'))
               Tk. {{ Session::get('couponAmount') }}
            @else
                Tk.00
            @endif
        </td>
    </tr>
    <tr>
        <td colspan="6" style="text-align:right">
            <strong>GRAND TOTAL( Tk.{{ $total_price }} - <span class="couponAmount">Tk.{{ Session::get('couponAmount') }}</span>)=</strong>
        </td>
        <td class="label label-important" style="display:block"><strong class="grand_total">Tk.{{ $total_price-Session::get('couponAmount') }} </strong></td>
    </tr>
    </tbody>
</table>
<?php use App\Product; ?>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Product</th>
            <th colspan="2">Description</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <?php $total_price=0; ?>
        @foreach($userWishlistItems as $item)
        <tr>
            <td> 
                <img width="60" src="{{ asset('/images/product_images/small/'.$item->product->main_image) }}" alt=""/>
            </td>
            <td colspan="2">
                {{ $item->product->product_name }}({{ $item->product->product_code }})
                <br/>Color : {{ $item->product->product_color }}
            </td>
            <td>
                <div class="input-append">
                    <a class="btn" target="_blank" href="{{ url('/product/'.$item->product->id ) }}"><i class="icon-file"></i></a>
                    <button class="btn btn-danger wishlistItemDelete" data-wishlistid="{{ $item->id }}" type="button"><i class="icon-remove icon-white"></i></button>
                </div>
            </td>
            <td>Tk.{{ $item->product->product_price }}.00</td>
        </tr>
        @endforeach
    </tbody>
</table>
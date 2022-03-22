<?php use App\Product; ?>
<div class="tab-pane  active" id="blockView">
    <ul class="thumbnails">
        @foreach ($categoryProducts as $product)
        <li class="span3">
            <div class="thumbnail">
                <a href="{{ url('product/'.$product['id']) }}">
                    @if(isset($product['main_image']))
                    <?php  $product_image_path = 'images/product_images/small/'.$product['main_image']; ?>
                    @else
                        <?php  $product_image_path = ''; ?>
                    @endif
                    @if(!empty($product['main_image']) && file_exists($product_image_path))
                    <img src="{{ asset('images/product_images/small/'.$product['main_image']) }}" alt=""></a>
                    @else
                    <img src="{{ asset('images/product_images/small/no_image.jpg') }}" alt=""></a>
                    @endif
                </a>
                <div class="caption">
                    <h5>{{ $product['product_name'] }}</h5>
                    <p>
                        {{ $product['brand']['name'] }}
                    </p>
                    <?php $discounted_price = Product::getDiscountedPrice($product['id']); ?>
                    <h5 style="text-align:center"><!--<a class="btn" href="{{ url('product/'.$product['id']) }}"> <i class="icon-zoom-in"></i></a> --><a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">
                        @if($discounted_price>0)
                                <del>Tk.{{ $product['product_price'] }}</del>
                                <span style="color: yellow">Tk.{{ $discounted_price }}</span>
                            @else
                                Tk.{{ $product['product_price'] }}
                            @endif
                        </a>
                    </h5>
                   
                </div>
            </div>
        </li>
        @endforeach
    </ul>
    <hr class="soft"/>
</div>

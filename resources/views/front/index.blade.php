<?php use App\Product; ?>
@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <div class="well well-small">
        <h4>Featured Products <small class="pull-right">{{ $featuredItemsCount }}+ featured products</small></h4>
        <div class="row-fluid">
            <div id="featured" @if($featuredItemsCount>4) class="carousel slide" @endif >
                <div class="carousel-inner">
                    @foreach ($featuredItemsChunk as $key=>$featureItem )
                    <div class="item @if($key == 1) active @endif">
                        <ul class="thumbnails">
                            @foreach ($featureItem as $item)
                            <li class="span3">
                                <div class="thumbnail">
                                    <i class="tag"></i>
                                    <?php
                                        $product_image_path = 'images/product_images/small/'.$item['main_image'];
                                    ?>
                                    <a href="{{ url('product/'.$item['id']) }}">
                                        @if(!empty($item['main_image']) && file_exists($product_image_path))
                                        <img src="{{ asset('images/product_images/small/'.$item['main_image']) }}" alt=""></a>
                                        @else
                                        <img src="{{ asset('images/product_images/small/no_image.jpg') }}" alt=""></a>
                                        @endif
                                    <div class="caption">
                                        <?php
                                             $discounted_price = Product::getDiscountedPrice($item['id']); 
                                             if(Session::has('exchange_rate'))
                                             {
                                                $rate = Session::get('exchange_rate');
                                             }
                                             else {
                                                $rate = 1;
                                             }
                                             
                                             $currency_discount = round($discounted_price / $rate) ;
                                            ?>
                                        <h5>{{ $item['product_name'] }}</h5>
                                        <h5><a class="btn" href="{{ url('product/'.$item['id']) }}" >VIEW</a>
                                                <span class="pull-right">
                                                @if($discounted_price>0)
                                                    <del>
                                                        @if(!empty($item['featuredItemCurrencyPrice']) && $item['featuredItemCurrencyPrice']>0)
                                                        {{ Session::get('currency_code') }}.{{ $item['featuredItemCurrencyPrice'] }}
                                                        @else
                                                            Tk.{{ $item['product_price'] }}
                                                        @endif
                                                    </del>
                                                    <span class="text-warning">
                                                        @if(Session::get('currency_code') && $currency_discount>0)
                                                            {{ Session::get('currency_code') }}.{{ $currency_discount }}
                                                            @else
                                                            Tk.{{ $discounted_price }}
                                                        @endif
                                                    </span> 
                                                @else
                                                    @if(!empty($item['featuredItemCurrencyPrice']) && $item['featuredItemCurrencyPrice']>0)
                                                    {{ Session::get('currency_code') }}.{{ $item['featuredItemCurrencyPrice'] }}
                                                    @else 
                                                        Tk.{{ $item['product_price'] }}
                                                    @endif
                                                @endif
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                    @endforeach
                </div>
                @if($featuredItemsCount>4) 
                <a class="left carousel-control" href="#featured" data-slide="prev">‹</a>
                <a class="right carousel-control" href="#featured" data-slide="next">›</a>
                @endif
            </div>
        </div>
    </div>
    <h4>Latest Products </h4>
    <ul class="thumbnails">
        @foreach ($latestProducts as $product)
        <li class="span3">
            <div class="thumbnail">
                @php( $product_image_path = 'images/product_images/small/'.$product['main_image'])
                <a  href="{{ url('product/'.$product['id']) }}">
                    @if(!empty($product['main_image']) && file_exists($product_image_path ))
                        <img src="{{ asset('/') }}images/product_images/small/{{ $product['main_image'] }}" alt=""/>
                    @else
                        <img src="{{ asset('/') }}images/product_images/small/no_image.jpg" alt=""/>
                    @endif
                </a>
                <div class="caption">
                    <h5>{{ $product['product_name'] }}</h5>
                    <p>
                       {{ $product['product_code'] }}({{ $product['product_color'] }})
                    </p>
                    <?php 
                        $discounted_price = Product::getDiscountedPrice($product['id']);
                        if(Session::has('exchange_rate')){
                            $discounted_price = round($discounted_price / Session::get('exchange_rate'),2);
                        }
                     ?>
                    <h4 style="text-align:center"><a class="btn" href="{{ url('product/'.$product['id']) }}">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="{{ url('product/'.$product['id']) }}">
                        @if($discounted_price>0)
                            <del>
                                @if(isset($product['latestCurrencyPrice']) && $product['latestCurrencyPrice']>0)
                                {{ Session::get('currency_code') }}. {{ $product['latestCurrencyPrice'] }}
                                @else
                                    Tk.{{ $product['product_price'] }}
                                @endif
                            </del>
                          @if (Session::has('exchange_rate') && Session::get('currency_code'))
                            <span style="color: yellow">{{ Session::get('currency_code') }}.{{  $discounted_price }}</span>
                          @else
                          <span style="color: yellow">Tk.{{ $discounted_price }}</span>
                          @endif
                         @else
                            Tk.{{ $product['product_price'] }}
                         @endif
                    </a>
                </h4>
                </div>
            </div>
        </li>
        @endforeach
    </ul>
</div>

@endsection

<?php use App\Product; ?>
@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
        <li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
        <li><a href="{{ url('/'.$productDetails->category->url) }}">{{ $productDetails->category->category_name }}</a> <span class="divider">/</span></li>
        <li class="active">{{ $productDetails->product_name }}</li>
    </ul>
    <div class="row">
        <div id="gallery" class="span3">
            @if($productDetails->main_image)
            <a href="{{ asset('images/product_images/large/'.$productDetails->main_image) }}" title="Blue Casual T-Shirt">
                <img src="{{asset('images/product_images/large/'.$productDetails->main_image)}}" style="width:100%" alt="Blue Casual T-Shirt"/>
            </a>
            @else  
             <img src="{{ asset('images/product_images/large/no_image.jpg') }}" style="width:100%" alt="Blue Casual T-Shirt"/>
            @endif 
         
            <div id="differentview" class="moreOptopm carousel slide">
                <div class="carousel-inner">
                    <div class="item active">
                        @foreach ($productDetails->images as $image)
                        <a href="{{asset('images/product_images/small/'.$image->image)}}"> <img style="width:29%" src="{{asset('images/product_images/small/'.$image->image)}}" alt=""/></a>
                        @endforeach
                    </div>
                    {{-- <div class="item">
                        @foreach ($productDetails->images as $image)
                        <a href="{{asset('images/product_images/small/'.$image->image)}}"> <img style="width:29%" src="{{asset('images/product_images/small/'.$image->image)}}" alt=""/></a>
                        @endforeach
                    </div> --}}
                </div>
                <!--
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
                -->
            </div>
            
            <div class="btn-toolbar">
                <div class="btn-group">
                    <span class="btn"><i class="icon-envelope"></i></span>
                    <span class="btn" ><i class="icon-print"></i></span>
                    <span class="btn" ><i class="icon-zoom-in"></i></span>
                    <span class="btn" ><i class="icon-star"></i></span>
                    <span class="btn" ><i class=" icon-thumbs-up"></i></span>
                    <span class="btn" ><i class="icon-thumbs-down"></i></span>
                </div>
            </div>
        </div>
        <div class="span6">
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
            @if($errors->any())
                <div class="alert alert-danger alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <strong>
                        {!! implode('<br/>', $errors->all('<span>:message</span>')) !!}
                    </strong>
                </div>
            @endif
            <h3>{{ $productDetails->product_name }}  </h3>
            <small>- {{ $productDetails->brand->name }}</small>
            <hr class="soft"/>
                <span>Rating: </span>
                <?php $star =1; while ($star <= $avgStarRatings) { ?>
                        <span>&#9733;</span>
                <?php $star++; } ?>
                <div>&nbsp;</div>
            @if(count($groupProducts)>0)
                  <div>
                        <div><strong>More Colors: </strong></div>
                        @foreach ($groupProducts as $product)
                            <a href="{{ url('/product/'.$product->id) }}"><img style="width: 50px" src="{{ asset('images/product_images/small/'.$product->main_image) }}"  alt="{{ $product->image }}"></a>
                        @endforeach
                  </div>
            @endif
            <small>{{ $total_stock }} items in stock</small>
            <form class="form-horizontal qtyFrm" action="{{ url('add-to-cart') }}" method="post">
                @csrf
                <div class="control-group">
                    <input type="hidden" name="product_id" value="{{ $productDetails->id }}">
                    <?php $discounted_price = Product::getDiscountedPrice($productDetails->id); ?>
                    @if($discounted_price>0)
                     <del style="color:red"><h4 class="getAttrPrice">Tk.{{ $productDetails->product_price }}</h4></del>
                    @else
                    <h5 class="getAttrPrice">TK.{{ $productDetails->product_price }}</h5>
                    @endif
                    @if($discounted_price>0)
                        <h5 class="discountedPrice">Discount Price TK.{{ $discounted_price }}</h5>
                    @endif
                    <span class="mainCurrentPrice">
                        <h5>
                            @foreach ($currencies as $currency)
                                {{ $currency->currency_code }}
                                <?php echo round($productDetails->product_price/$currency->exchange_rate,2); ?><br/>
                            @endforeach
                        </h5>
                    </span>
                    
                    <select name="size" class="span2 pull-left" id="getPrice" product-id="{{ $productDetails->id }}" required>
                        <option value="">Select Size</option>
                        @foreach ($productDetails->attributes as $attribute)
                        <option value="{{ $attribute->size }}">{{ $attribute->size }}</option>
                        @endforeach
                    </select>
                    <input type="number" name="quantity" class="span1" min="1" placeholder="Qty."  required />
                    <button type="submit" class="btn btn-large btn-primary pull-right"> Add to cart <i class=" icon-shopping-cart"></i></button>
                </div>
                    <div class="control-group">
                        <strong>Delivery: </strong>
                       <div>
                            <input type="text" class="span2" name="pincode" id="pincode" placeholder="Check Pincode">
                            <button type="button" class="btn" min="1" id="checkPincode">Check</button>
                            <p class="pincode_error" style="color: red"></p>
                            <p class="pincode_success" style="color: green"></p>
                       </div>
                    </div>
                </div>
            </form>
            <div class="sharethis-sticky-share-buttons"></div>
            <hr class="soft clr"/>
            <p class="span6">
                <?php echo $productDetails->description; ?>
                
            </p>
            <a class="btn btn-small pull-right" href="#detail">More Details</a>
            <br class="clr"/>
            <a href="#" name="detail"></a>
            <hr class="soft"/>
        </div>
        
        <div class="span9">
            <ul id="productDetail" class="nav nav-tabs">
                <li class="active"><a href="#home" data-toggle="tab">Product Details</a></li>
                <li><a href="#profile" data-toggle="tab">Related Products</a></li>
                @if (isset($productDetails->product_video) && !empty($productDetails->product_video))
                <li><a href="#product_video" data-toggle="tab">Product Video</a></li>
                @endif
                <li><a href="#review" data-toggle="tab">Product Reviews</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                        <tbody>
                            <tr class="techSpecRow"><th colspan="2">Product Details</th></tr>
                            <tr class="techSpecRow"><td class="techSpecTD1">Brand: </td><td class="techSpecTD2">{{ $productDetails->brand->name }}</td></tr>
                            <tr class="techSpecRow"><td class="techSpecTD1">Code:</td><td class="techSpecTD2">{{ $productDetails->product_code }}</td></tr>
                            <tr class="techSpecRow"><td class="techSpecTD1">Color:</td><td class="techSpecTD2">{{ $productDetails->product_color }}</td></tr>
                            @if(!empty($productDetails->fabric))
                            <tr class="techSpecRow"><td class="techSpecTD1">Fabric:</td><td class="techSpecTD2">{{ $productDetails->fabric }}</td></tr>
                            @endif
                            @if(!empty($productDetails->pattern))
                            <tr class="techSpecRow"><td class="techSpecTD1">Pattern:</td><td class="techSpecTD2">{{ $productDetails->pattern }}</td></tr>
                            @endif
                            @if(!empty($productDetails->fit))
                            <tr class="techSpecRow"><td class="techSpecTD1">Fit:</td><td class="techSpecTD2">{{ $productDetails->fit }}</td></tr>
                            @endif
                            @if(!empty($productDetails->sleeve))
                            <tr class="techSpecRow"><td class="techSpecTD1">Sleeve:</td><td class="techSpecTD2">{{ $productDetails->sleeve }}</td></tr>
                            @endif
                            @if(!empty($productDetails->occasion))
                            <tr class="techSpecRow"><td class="techSpecTD1">Occasion:</td><td class="techSpecTD2">{{ $productDetails->occasion }}</td></tr>
                            @endif
                        </tbody>
                    </table>
                    @if(!empty($productDetails->wash_care))
                        <h5>Washcare</h5>
                        <p>{{ $productDetails->wash_care }}</p>
                    @endif
                    <h5>Disclaimer</h5>
                    <p>
                        There may be a slight color variation between the image shown and original product.
                    </p>
                </div>
                <div class="tab-pane fade" id="profile">
                    <div id="myTab" class="pull-right">
                        <a href="#listView" data-toggle="tab"><span class="btn btn-large"><i class="icon-list"></i></span></a>
                        <a href="#blockView" data-toggle="tab"><span class="btn btn-large btn-primary"><i class="icon-th-large"></i></span></a>
                    </div>
                    <br class="clr"/>
                    <hr class="soft"/>
                    <div class="tab-content">
                        <div class="tab-pane" id="listView">
                            @foreach ($relatedProducts as $product)
                                <div class="row">
                                    <div class="span2">
                                            @if(isset($product->main_image))
                                                <?php  $product_image_path = 'images/product_images/small/'.$product->main_image; ?>
                                            @else
                                                <?php  $product_image_path = ''; ?>
                                            @endif
                                            @if(!empty($product->main_image) && file_exists($product_image_path))
                                            <img src="{{ asset('images/product_images/small/'.$product->main_image) }}" alt=""></a>
                                            @else
                                            <img src="{{ asset('images/product_images/small/no_image.jpg') }}" alt=""></a>
                                            @endif
                                    </div>
                                    <div class="span4">
                                        <h3>{{ $product->product_name }}</h3>
                                        <hr class="soft"/>
                                        <h5>{{ $product->product_code }}</h5>
                                        <p>
                                            {!! $product->description !!} 
                                        </p>
                                        <a class="btn btn-small pull-right" href="product_details.html">View Details</a>
                                        <br class="clr"/>
                                    </div>
                                    <div class="span3 alignR">
                                        <form class="form-horizontal qtyFrm">
                                            <h3>Tk.{{ $product->product_price }}</h3>
                                            <label class="checkbox">
                                                <input type="checkbox">  Adds product to compair
                                            </label><br/>
                                            <div class="btn-group">
                                                <a href="{{ url('product/'.$product->id) }}" class="btn btn-large btn-primary"> Add to <i class=" icon-shopping-cart"></i></a>
                                                <a href="{{ url('product/'.$product->id) }}" class="btn btn-large"><i class="icon-zoom-in"></i></a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <hr class="soft"/>
                            @endforeach
                        </div>
                        <div class="tab-pane active" id="blockView">
                            <ul class="thumbnails">
                                @foreach ($relatedProducts as $product)
                                    <li class="span3">
                                        <div class="thumbnail">
                                            <a href="{{ url('product/'.$product->id) }}">
                                                @if(isset($product->main_image))
                                                <?php  $product_image_path = 'images/product_images/small/'.$product->main_image; ?>
                                                @else
                                                    <?php  $product_image_path = ''; ?>
                                                @endif
                                                @if(!empty($product->main_image) && file_exists($product_image_path))
                                                <img src="{{ asset('images/product_images/small/'.$product->main_image) }}" alt=""></a>
                                                @else
                                                <img src="{{ asset('images/product_images/small/no_image.jpg') }}" alt=""></a>
                                                @endif
                                            </a>
                                            <div class="caption">
                                                <h5>{{ $product->product_name }}</h5>
                                                <p>
                                                    {!! $product->description !!} 
                                                </p>
                                                <h4 style="text-align:center"><a class="btn" href="{{ url('product/'.$product->id) }}"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">{{ $product->product_price }}</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>
                            <hr class="soft"/>
                        </div>
                    </div>
                    <br class="clr">
                </div>
                @if (isset($productDetails->product_video) && !empty($productDetails->product_video))
                <div class="tab-pane fade" id="product_video">
                    <video controls width="640" height="480">
                        <source src="{{ url('/videos/product_videos/'.$productDetails->product_video) }}">
                    </video>
                </div>
                @endif
                <div class="tab-pane fade" id="review">
                   <div class="row">
                        <div class="span4">
                            <h4>Write a Review</h4>
                            <form action="{{ url('/add-rating') }}" method="post" class="form-horizontal">@csrf
                                <input type="hidden" name="product_id" value="{{ $productDetails->id }}">
                                <div class="rate">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div>
                                <div class="control-group"></div>
                                <div class="form-group">
                                    <label>Your Comments*</label>
                                    <textarea name="review" id="reviews" class="error"></textarea>
                                </div>
                                &nbsp;&nbsp;
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-primary" value="Submit">
                                </div>
                            </form>
                        </div>
                        <div class="span4">
                            <h4>Users Reviews</h4>
                            @if(count($ratings)>0)
                                @foreach ($ratings as $rating)
                                    <div>
                                        <?php $count = 1;
                                        while($count<=$rating->rating): ?>
                                        <span>&#9733;</span>
                                        <?php $count++; endwhile; ?>
                                        <p>{{ $rating->review }} <strong> By {{ $rating->user->name }}</strong></p>  
                                        <p>{{ date('d-m-Y',strtotime($rating->created_at)) }}</p>
                                    </div>
                                    <hr/>
                                @endforeach
                            @else
                                <p><b>Reviews are not available for this product!.</b></p>
                            @endif
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
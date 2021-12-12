@extends('layouts.front_layout.front_layout')
@section('content')
<div class="span9">
    <ul class="breadcrumb">
        <li><a href="{{ url('/') }}">Home</a> <span class="divider">/</span></li>
        <li class="active"><?php echo $categoryDetails['breadcrumbs'] ?></li>
    </ul>
    <h3> {{ $categoryDetails['catDetails']['category_name'] }} <small class="pull-right"> {{ count($categoryProducts) }} products are available </small></h3>
    <hr class="soft"/>
    <p>
        {{ $categoryDetails['catDetails']['description'] }}
    </p>
    <hr class="soft"/>
    <form name="sortProducts" id="sortProducts" class="form-horizontal span6">
        <div class="control-group">
            <input type="hidden" name="url" id="url" value="{{ $url }}">
            <label class="control-label alignL">Sort By </label>
            <select name="sort" id="sort">
                <option value="">Select</option>
                <option value="product_latest">Latest Products</option>
                <option value="product_name_a_z">Price name A - z</option>
                <option value="product_name_z_a">Price name Z - A</option>
                <option value="lowest_price_first">Lowest Price first</option>
                <option value="highest_price_first">Highest Price first</option>
            </select>
        </div>
    </form>
    
   <!-- <div id="myTab" class="pull-right">
        <a href="#listView" data-toggle="tab"><span class="btn btn-large"><i class="icon-list"></i></span></a>
        <a href="#blockView" data-toggle="tab"><span class="btn btn-large btn-primary"><i class="icon-th-large"></i></span></a>
    </div>-->
    <br class="clr"/>
    <div class="tab-content filter_products" id="filter_products">
        <!--<div class="tab-pane" id="listView">
            @foreach ($categoryProducts as $product)
                <div class="row">
                    <div class="span2">
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
                    </div>
                    <div class="span4">
                        <h3>{{ $product['product_name'] }}</h3>
                        <hr class="soft"/>
                        <h5>Brand: {{ $product['brand']['name'] }}</h5>
                        <p>
                           <?php echo $product['description'] ?>
                        </p>
                        <a class="btn btn-small pull-right" href="product_details.html">View Details</a>
                        <br class="clr"/>
                    </div>
                    <div class="span3 alignR">
                        <form class="form-horizontal qtyFrm">
                            <h3>Tk.{{ $product['product_price'] }}</h3>
                            <label class="checkbox">
                                <input type="checkbox">  Adds product to compair
                            </label><br/>
                            
                            <a href="product_details.html" class="btn btn-large btn-primary"> Add to <i class=" icon-shopping-cart"></i></a>
                            <a href="product_details.html" class="btn btn-large"><i class="icon-zoom-in"></i></a>
                            
                        </form>
                    </div>
                </div>
                <hr class="soft"/>
            @endforeach
        </div>-->
        @include('front.products.ajax_products_list')
    </div>
    <a href="compair.html" class="btn btn-large pull-right">Compair Product</a>
    <div class="pagination" id="pagination">
        {!! $categoryProducts->appends(['sort'=>'lowest_price_first'])->links() !!}
    </div>
    <br class="clr"/>
</div>
@endsection
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use CyrildeWit\EloquentViewable\Contracts\Viewable;
class Product extends Model implements Viewable
{
    use InteractsWithViews;
  /**
     * Get the user that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
        //return $this->belongsTo('App\Category','category_id');
    }
    public function section(){
        return $this->belongsTo(Section::class, 'section_id');
    }
    public function brand(){
        return $this->belongsTo(Brand::class, 'brand_id');
    }
    public function attributes(){
        return $this->hasMany('App\ProductsAttribute');
    }
    public function images(){
        return $this->hasMany('App\ProductsImage');
    }
    public static function productFilters(){
        $productFilters['fabricArray']= array('Cotton','Polyester','Wool','Pure contton');
        $productFilters['sleeveArray'] = array('Full Sleeve','Half Sleeve','Short Sleeve');
        $productFilters['fitArray'] = array('Regular','Slim');
        $productFilters['occasionArray']=array('Casual','Formal');
        $productFilters['patternArray'] = array('Checked','Plain','Printed','Self','Solid');
        return $productFilters;
    }
    public static function getDiscountedPrice($product_id){
        $proDetails = Product::select('product_price','product_discount','category_id')->where('id',$product_id)->first()->toArray();
        $catDetails = Category::select('category_discount')->where('id',$proDetails['category_id'])->first()->toArray();
        if($proDetails['product_discount']>0){
            $discounted_price = $proDetails['product_price'] - ($proDetails['product_price'] * $proDetails['product_discount']/100);
        }
        else if($catDetails['category_discount']>0){
            $discounted_price = $proDetails['product_price'] - ($proDetails['product_price'] * $catDetails['category_discount']/100);
        }
        else
        {
            $discounted_price = 0;
        }
        return $discounted_price;
    }
    public static function  getAttrDiscountedPrice($product_id,$size){
        $proAttrPrice = ProductsAttribute::where(['product_id'=>$product_id,'size'=>$size])->first()->toArray();
        $proDetails = Product::select('product_price','product_discount','category_id')->where('id',$product_id)->first()->toArray();
        $catDetails = Category::select('category_discount')->where('id',$proDetails['category_id'])->first()->toArray();

        if($proDetails['product_discount']>0){
            $final_price = $proAttrPrice['price'] - ($proAttrPrice['price'] * $proDetails['product_discount']/100);
            $discount = $proAttrPrice['price'] - $final_price;
        }
        else if($catDetails['category_discount']>0){
            $final_price = $proAttrPrice['price'] - ($proAttrPrice['price'] * $catDetails['category_discount']/100);
            $discount = $proAttrPrice['price'] - $final_price;
        }
        else
        {
            $final_price = $proAttrPrice['price'];
            $discount = 0;
        }
        return array('price'=>round($proAttrPrice['price']),'final_price'=>round($final_price),'discount'=>$discount);
    }
    //Get Product Image for Order Details
    public static function getProductImage($product_id){
        $getProductImage = Product::select('main_image')->where('id',$product_id)->first()->toArray();
        return $getProductImage['main_image'];
    }
    //Get Prduct Status
    public static function getProductStatus($product_id)
    {
        $getProductStatus =  Product::select('status')->where('id',$product_id)->first();
        return $getProductStatus->status;
    }
    //Chcck Product Stock 
    public static function getProductStock($product_id,$size)
    {
        $getProductStock = ProductsAttribute::select('stock')->where(['product_id'=>$product_id,'size'=>$size])->first();
        return $getProductStock->stock; 
    }
    //Prevent Disable
    public static function getAttributeCount($product_id,$product_size)
    {
        $getAttributeCount = ProductsAttribute::where([
            'product_id'=>$product_id,
            'size'      => $product_size,
            'status'    => 1
        ])->count();
        return $getAttributeCount;    
    }
    public static function getCategoryStatus($category_id)
    {
        $getCategoryStatus = Category::select('status')->where('id',$category_id)->first();
        return $getCategoryStatus->status;
    }
    //Delete Cart Product
    public static function deleteCartProduct($product_id)
    {
        Cart::where('product_id',$product_id) ->delete();
    }
    
    
}
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
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
}
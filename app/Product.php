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
    public function attributes(){
        return $this->hasMany('App\ProductsAttribute');
    }
    public function images(){
        return $this->hasMany('App\ProductsImage');
    }
}
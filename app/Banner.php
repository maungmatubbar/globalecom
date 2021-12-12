<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    public static function getBanners(){
       $getBanners = Banner::where('status',1)->get();
       $getBanners = json_decode(json_encode($getBanners));
       return $getBanners;
    }
}
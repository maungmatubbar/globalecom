<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{

    public static function sections(){
        //Front end show 
        $getSection = Section::with('categories')->where('status',1)->get();
        $getSection = json_decode(json_encode($getSection));
        return $getSection;
    }
    public function categories(){
        return $this->hasMany(Category::class,'section_id')->where(['parent_id'=>'ROOT','status'=>1])->with('subcategories');
    }
}
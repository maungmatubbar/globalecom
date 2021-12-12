<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['parent_id', 'section_id', 'category_name', 'category_image', 'category_discount', 'description', 'url', 'meta_title', 'meta_description', 'meta_keywords', 'status'];

    public function subcategories(){
        return $this->hasMany('App\Category','parent_id')->where('status',1);
    }
    public function section(){
        return $this->belongsTo('App\Section','section_id')->select('id','name');
    }
    public function parentcategory(){
        return $this->belongsTo('App\Category','parent_id')->select('id','category_name');
    }
    //Category Details page;
    public static function categoryDetails($url){
        $catDetails = Category::select('id','parent_id','category_name','description','url')->with(['subcategories'=>function($query){
            $query->select('id','parent_id')->where('status',1);
        }])->where('url',$url)->first()->toArray();

        //for Breadcrumbs
        if($catDetails['parent_id']==0){
            //Show Main category in breadcrumbs
            $breadcrumbs = '<a href="'.url($catDetails['url']).'">'.$catDetails['category_name'].'</a>';
        }
        else{
            //Show Main Category and subcategory in breadcrumbs
            $parentCategory = Category::select('category_name','url')->where('id',$catDetails['parent_id'])->first()->toArray();
            $breadcrumbs = '<a href="'.url($parentCategory['url']).'">'.$parentCategory['category_name'].'</a>&nbsp;<span class="divider">/</span>&nbsp;<a href="'.url($catDetails['url']).'">'.$catDetails['category_name'].'</a>';
        }
        $categoryIds = array();
        $categoryIds[] = $catDetails['id'];
        foreach($catDetails['subcategories'] as $key=>$subcategory){
            $categoryIds[] = $subcategory['id'];
        }
       // $categoryDetails = json_decode(json_encode($categoryDetails));
        return array('categoryIds'=>$categoryIds,'catDetails'=>$catDetails,'breadcrumbs'=>$breadcrumbs);
    }
    
}
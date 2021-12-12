<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\Product;
use Illuminate\Support\Facades\Route;
use Illuminate\Pagination\Paginator;
class ProductsController extends Controller
{
    public function listing(Request $request){
      Paginator::useBootstrap();
      if($request->ajax()){
        $data = $request->all();
        //echo "<pre>";print_r($data);die;
        Paginator::useBootstrap();
        $url= $data['url'];
        $categoryCount = Category::where(['url'=>$url,'status'=>1])->count();
        if($categoryCount>0){
          $categoryDetails = Category::categoryDetails($url);//-->this categoryDetails in Category Model
          $categoryProducts = Product::with('brand')->whereIn('category_id',$categoryDetails['categoryIds'])->where('status',1);
          //If fabric filter is selected
          if(isset($data['fabric']) && !empty($data['fabric'])){
            //database products and column fabric
              $categoryProducts->whereIn('products.fabric',$data['fabric']);
          }
           //If sleeve is selected
           if(isset($data['sleeve']) && !empty($data['sleeve'])){
            //database products and column fabric
              $categoryProducts->whereIn('products.sleeve',$data['sleeve']);
          }
            //If pattern is selected
            if(isset($data['pattern']) && !empty($data['pattern'])){
            //database products and column fabric
              $categoryProducts->whereIn('products.pattern',$data['pattern']);
          }
            //If fit is selected
            if(isset($data['fit']) && !empty($data['fit'])){
            //database products and column fabric
              $categoryProducts->whereIn('products.fit',$data['fit']);
          }
             //If occasion is selected
             if(isset($data['occasion']) && !empty($data['occasion'])){
              //database products and column fabric
                $categoryProducts->whereIn('products.occasion',$data['occasion']);
            }
            //If sort option ise selected
          if(isset($data['sort']) && !empty($data['sort'])){
  
            if($data['sort']=="product_latest"){
              $categoryProducts->orderBy('id','Desc');
            }
            else if($data['sort']=="product_name_a_z"){
              $categoryProducts->orderBy('product_name','Asc');
            }
            else if($data['sort']=="product_name_z_a"){
              $categoryProducts->orderBy('product_name','Desc');
            }
            else if($data['sort']=="lowest_price_first"){
              $categoryProducts->orderBy('product_price','Asc');
            }
            else if($data['sort']=="highest_price_first"){
              $categoryProducts->orderBy('product_price','Desc');
            }
          }
          else
          {
            $categoryProducts->orderBy('id','Desc');
          }
          $categoryProducts =  $categoryProducts->paginate(3);
          return view('front.products.ajax_products_list')->with(compact('categoryDetails','categoryProducts','url'));
         // echo"<pre>";print_r($categoryProducts);die;
        }
        else{
          abort(404, "Page Not Found");
        }
      }
      else
      {
        $url = Route::getFacadeRoot()->current()->uri();
        $categoryCount = Category::where(['url'=>$url,'status'=>1])->count();
        if($categoryCount>0){
          $categoryDetails = Category::categoryDetails($url);//-->this categoryDetails in Category Model
          $categoryProducts = Product::with('brand')->whereIn('category_id',$categoryDetails['categoryIds'])->where('status',1);
          //If sort option select by user
         /* if(isset($_GET['sort']) && !empty($_GET['sort'])){
  
            if($_GET['sort']=="product_latest"){
              $categoryProducts->orderBy('id','Desc');
            }
            else if($_GET['sort']=="product_name_a_z"){
              $categoryProducts->orderBy('product_name','Asc');
            }
            else if($_GET['sort']=="product_name_z_a"){
              $categoryProducts->orderBy('product_name','Desc');
            }
            else if($_GET['sort']=="lowest_price_first"){
              $categoryProducts->orderBy('product_price','Asc');
            }
            else if($_GET['sort']=="highest_price_first"){
              $categoryProducts->orderBy('product_price','Desc');
            }
          }
          else
          {
            $categoryProducts->orderBy('id','Desc');
          }*/
          $categoryProducts =  $categoryProducts->paginate(3);
          //Products filers
          $productFilters = Product::productFilters();
          $fabricArray = $productFilters['fabricArray'];
          $sleeveArray = $productFilters['sleeveArray'];
          $fitArray = $productFilters['fitArray'];
          $occasionArray = $productFilters['occasionArray'];
          $patternArray = $productFilters['patternArray'];
          $page_name = 'listing';
          return view('front.products.listing')->with(compact('categoryDetails','categoryProducts','url','fabricArray','sleeveArray','fitArray','occasionArray','patternArray','page_name'));
         // echo"<pre>";print_r($categoryProducts);die;
        }
        else{
          abort(404, "Page Not Found");
        }
        
       
      }

    
    }

}
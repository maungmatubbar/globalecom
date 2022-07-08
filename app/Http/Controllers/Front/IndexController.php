<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use Session;
class IndexController extends Controller
{
    public function index(){

        //Get featured item products
        Session::forget('section_id');
       $featuredItemsCount = Product::where(['is_featured'=>'Yes','status'=>1])->count();//Here use two ways where
        $featuredItems = Product::where('is_featured','Yes')->where('status','1')->get()->toArray();
        $featuredItemsChunk = array_chunk($featuredItems,4);

        //Get Latest Products
        $latestProducts = Product::orderBy('id','Desc')->where('status','1')->limit(6)->get()->toArray();
        //dd($latestProduct);die;
        $page_name = "index";
        return view('front.index')->with(compact('page_name','featuredItemsCount','featuredItemsChunk','latestProducts'));
    }
   
}
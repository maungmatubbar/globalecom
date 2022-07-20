<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Visitor;
use Session;
use App\Currency;
class IndexController extends Controller
{

    public function index(Request $request){

        //Get featured item products
        Session::forget('section_id');
        Session::forget('currency_code');
        Session::forget('exchange_rate');
       $featuredItemsCount = Product::where(['is_featured'=>'Yes','status'=>1])->count();//Here use two ways where
        $featuredItems = Product::where('is_featured','Yes')->where('status','1')->get()->toArray();
        $featuredItemsChunk = array_chunk($featuredItems,4);

        //Get Latest Products
        $latestProducts = Product::orderBy('id','Desc')->where('status','1')->limit(9)->get()->toArray();
        
       //dd($latestProducts);
        if($request->isMethod('post'))
        {
            
            $currency = Currency::where('currency_code',$request->currency_code)->first()->toArray();
            Session::put('currency_code',$currency['currency_code']);
            Session::put('exchange_rate',$currency['exchange_rate']);
            foreach($latestProducts as $key=>$latestProduct)
            {
                $latestProducts[$key]['latestCurrencyPrice'] = round($latestProduct['product_price']/$currency['exchange_rate'],2);
            }
            foreach($featuredItemsChunk as $key=>$featuredItems)
            {
                foreach($featuredItems as $key1=>$item)
                {
                    $featuredItemsChunk[$key][$key1]['featuredItemCurrencyPrice'] = round($item['product_price']/$currency['exchange_rate'],2);
                    Session::put('featuredItemCurrencyPrice',round($item['product_price']/$currency['exchange_rate'],2));
                }
               
            }
          

        }
       
        $page_name = "index";
        return view('front.index')->with(compact('page_name','featuredItemsCount','featuredItemsChunk','latestProducts'));
    }

}
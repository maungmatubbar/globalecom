<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\Product;
use App\ProductsAttribute;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Pagination\Paginator;
use Session;
use App\Cart;
use Auth;
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
            $categoryProducts->orderBy('id','Asc');
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
    public function detail($id){
      $productDetails = Product::with(['brand','category','section','attributes'=>function($query){
        $query->where('status',1);
      },
      'images'=>function($query){
         $query->where('status',1); 
        }])->find($id);
      $productDetails = json_decode(json_encode($productDetails));
      $total_stock = ProductsAttribute::where('product_id',$id)->sum('stock');
      $relatedProducts = Product::where('category_id',$productDetails->category->id)->where('id','!=',$id)->limit(3)->inRandomOrder()->get();
      $relatedProducts = json_decode(json_encode($relatedProducts));
      return view('front.products.detail')->with(compact('productDetails','total_stock','relatedProducts'));
    }
    public function getPrice(Request $request){
      if($request->ajax()){
        $data = $request->all();
       // $getPrice = ProductsAttribute::where(['product_id'=>$data['product_id'],'size'=>$data['size']])->first();
       $getPrice = Product::getAttrDiscountedPrice($data['product_id'],$data['size']);
        return $getPrice;
      }
    }
    //Add to cart
    public function addtocart(Request $request){
     if($request->isMethod('post')){
      //check stock product are available or not
      $getProductStock = ProductsAttribute::where(['product_id'=>$request->product_id,'size'=>$request->size])->first();
      if($getProductStock->stock < $request->quantity){
        $message = "Required quantity is not available!";
        session::flash('error_message',$message);
        return redirect()->back();
      }
      // Generate session id if not exists
      $session_id = Session::get('session_id');
      if(empty($session_id)){
        $session_id = Session::getId();
        Session::put('session_id',$session_id);
      }
      //Check Product already exists in cart
     
      if(Auth::check()){
        $countProduct = Cart::where(['product_id'=>$request->product_id,'size'=>$request->size,'user_id'=>Auth::user()->id])->count();
      }
      else{
        $countProduct = Cart::where(['product_id'=>$request->product_id,'size'=>$request->size,'session_id'=>Session::get('session_id')])->count();
      }
      if($countProduct>0){
        $message = "Product already exists in cart!";
        session::flash('error_message',$message);
        return redirect()->back();
      }
      //
      if(Auth::check()){
        $user_id = Auth::user()->id;
      }
      else
      {
        $user_id = 0;
      }
      //Save product in cart
      Cart::insert(['session_id'=>$session_id,'user_id'=>$user_id,'product_id'=>$request->product_id,'size'=>$request->size,'quantity'=>$request->quantity]);
      $message = "Product has been added in cart!";
      session::flash('success_message',$message);
      return redirect('cart');
     }
    }
    //Cart
    public function cart(){
      $userCartItems = Cart::userCartItems();
      return view('front.products.cart')->with(compact('userCartItems'));
    }
    //Update Cart Item Quantity
    public function updateCartItemQty(Request $request){
      if($request->ajax()){
        $data = $request->all();
     
        //Get Cart Details
        $cartDetails = Cart::find($data['cartid']);
        // //Get Available Product stock
        $availableStock = ProductsAttribute::select('stock')->where(['product_id'=>$cartDetails['product_id'],'size'=>$cartDetails['size']])->first()->toArray();

        // //Check stock is availabe or not.
        if($data['qty']>$availableStock['stock']){
          $userCartItems = Cart::userCartItems();
          return response()->json([
           'status'=>false,
           'message'=>"Product stock is not available!",
            'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))]);
         }

         //Check Size Available
         $availableSize = ProductsAttribute::where(['product_id'=>$cartDetails['product_id'],'size'=>$cartDetails['size'],'status'=>1])->count();
         if($availableSize==0){
          $userCartItems = Cart::userCartItems();
          return response()->json([
           'status'=>false,
           'message'=>"Product size is not available!",
            'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))]);
         }

        Cart::where('id',$data['cartid'])->update(['quantity'=>$data['qty']]);
        $userCartItems = Cart::userCartItems();
        return response()->json([
          'status'=>true,
          'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))]);
      }
    }
    public function deleteCartItem(Request $request){
        if($request->ajax()){
           $data =  $request->all();
           Cart::where('id',$data['cartid'])->delete();
           $userCartItems = Cart::userCartItems();
        return response()->json([
          'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))]);
        }
    }
}
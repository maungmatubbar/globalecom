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
use Illuminate\Support\Facades\Mail;
use Session;
use App\Cart;                 
use App\Coupon;   
use App\User;              
use App\DeliveryAddress;    
use App\Country;        
use App\Order;  
use App\OrdersProduct;
use App\Sms;
use Auth;
use DB;
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
      if(empty($userCartItems)){
        return redirect('/');
      }
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
        $totalCartItems = totalCartItems();
        return response()->json([
          'status'=>true,
          'totalCartItems' => $totalCartItems,
          'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))]);
      }
    }
    public function deleteCartItem(Request $request){
        if($request->ajax()){
           $data =  $request->all();
           Cart::where('id',$data['cartid'])->delete();
           $userCartItems = Cart::userCartItems();
           $totalCartItems = totalCartItems();
        return response()->json([
          'totalCartItems' => $totalCartItems,
          'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))]);
        }
    }
    //Apply Coupon code
    public function applyCoupon(Request $request){
       if($request->ajax()){
         //echo "<pre>"; print_r($request->all());die;
         $data = $request->all();
         $couponCount = Coupon::where('coupon_code',$data['code'])->count();
         $userCartItems = Cart::userCartItems();
         $totalCartItems = totalCartItems();
         if($couponCount == 0){
           return response()->json([
             'status'=> false,
             'message'=> 'This coupon is not valid!',
             'totalCartItems' => $totalCartItems,
             'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))
            ]);
         }
         else
         {
            //Get Coupon details
            $couponDetails = Coupon::where('coupon_code',$data['code'])->first();
            //Check Coupon Inactive
            if($couponDetails->status==0){
              $message = "The coupon code is inactive";
            }
            //Check if coupon is expired
            $expiry_date = $couponDetails->expiry_date;
            $current_data = date('Y-m-d');
            if($expiry_date<$current_data){
              $message = "The coupon is expired!";
            }
            //check if coupon is selected categories
            //Get all selected categories from coupon
            $categoryArr = explode(',',$couponDetails->categories);
            //Check if coupon belongs to logged in users
            //Get all selected users of coupon
            if(!empty($couponDetails->users)){
              $userArr = explode(',',$couponDetails->users);//users= emails 
              foreach($userArr as $user){
                $getUserId = User::select('id')->where('email',$user)->first()->toArray();
                $userId[] = $getUserId['id'];
              }
            }
            
            
            //Total Amount
            $total_amount = 0;
            foreach($userCartItems as $item){
              if(!in_array($item->product->category_id,$categoryArr)){
                $message = "This coupon is not for one of the selected products!";
              }
              if(!empty($couponDetails->users)){
                  if(!in_array($item->user_id,$userId)){
                    $message = "This coupon is not for you!";
                  }
              }
              //get Total price
              $attrPrice = Product::getAttrDiscountedPrice($item->product_id,$item->size);
              $total_amount = $total_amount + ($attrPrice['final_price']*$item->quantity);
              
            }
            
            if(isset($message)){
              return response()->json([
                'status'=> false,
                'message'=> $message,
                'totalCartItems' => $totalCartItems,
                'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))
               ]);
             }
             else
             {
                //Check amount type  Fixed or Percentage
                if($couponDetails->amount_type == "Fixed"){
                    $couponAmount = $couponDetails->amount_type;
                }
                else
                {
                    $couponAmount = $total_amount * ($couponDetails->amount/100);
                }
                $grand_total = $total_amount - $couponAmount;
                //Add coupon code and amount in session variable
                Session::put('couponAmount',$couponAmount);
                Session::put('couponCode',$data['code']);
                $message = "Coupon code successfully applied.You are availing discount!";
                $userCartItems = Cart::userCartItems();
                $totalCartItems = totalCartItems();
                return response()->json([
                  'status'=> true,
                  'message'=> $message,
                  'totalCartItems' => $totalCartItems,
                  'couponAmount' => $couponAmount,
                  'grand_total' => $grand_total,
                  'view'=>(String)View::make('front.products.cart_items')->with(compact('userCartItems'))
                ]);
             }
         }

       }
    }

  //Place Order
  public function checkout(Request $request){
    if($request->isMethod('post')){

      $data = $request->all();
      if(empty($data['address_id'])){
        $message = "Please select delivery address!";
        Session::flash('error_message',$message);
        return redirect()->back();
      }
      if(empty($data['payment_gateway'])){
        $message = "Please select payment method!";
        Session::flash('error_message',$message);
        return redirect()->back();
      }
      
      if($data['payment_gateway']=="COD"){
        $payment_method = "COD";
      }
      else
      {
        echo "Prepaid Method Coming Soon";die;
        $payment_method = "Prepaid";
      }
      //get delivery address from address_id
      $deliveryAddress = DeliveryAddress::where('id',$data['address_id'])->first()->toArray();
      DB::beginTransaction();
      //dd($deliveryAddress);
      $order = new Order();
      $order->user_id = Auth::user()->id;
      $order->name = $deliveryAddress['name'];
      $order->address = $deliveryAddress['address'];
      $order->city = $deliveryAddress['city'];
      $order->state = $deliveryAddress['state'];
      $order->country = $deliveryAddress['country'];
      $order->pincode = $deliveryAddress['pincode'];
      $order->mobile = $deliveryAddress['mobile'];
      $order->email = Auth::user()->email;
      $order->shipping_charges = 0;
      $order->coupon_code = Session::get('couponCode');
      $order->coupon_amount =Session::get('couponAmount');
      $order->order_status = "New";
      $order->payment_method = $payment_method;
      $order->payment_gateway = $data['payment_gateway'];
      $order->grand_total = Session::get('grand_total');
      $order->save();


      //Get Last Insert Order ID
      $order_id = DB::getPdo()->lastInsertId();

     //Get User Cart Items
     $cartItems = Cart::where('user_id',Auth::user()->id)->get()->toArray();
     foreach($cartItems as $item){
      $cartItem = new OrdersProduct();//Store OrdersProduct Table
      $cartItem->order_id = $order_id;
      $cartItem->user_id = Auth::user()->id;
      $getProductDetails = Product::select('product_name','product_code','product_color')->where('id',$item['product_id'])->first()->toArray();
      $cartItem->product_id = $item['product_id'];
      $cartItem->product_code = $getProductDetails['product_code'];
      $cartItem->product_name = $getProductDetails['product_name'];
      $cartItem->product_color = $getProductDetails['product_color'];
      $cartItem->product_size = $item['size'];
      //Get Discount Price
      $getAttrDiscountedPrice = Product::getAttrDiscountedPrice($item['product_id'],$item['size']);
      $cartItem->product_price = $getAttrDiscountedPrice['final_price'];
      $cartItem->product_qty = $item['quantity'];
      $cartItem->save();

     }
     //Empty The user cart
     Cart::where('user_id',Auth::user()->id)->delete();
     //Insert order_id in session  Variable
     Session::put('order_id',$order_id);
     DB::commit();
     
     if($data['payment_gateway']=="COD"){
        $message = "Dear Customer,Your order".$order_id."has been successfully placed with Ecom Shop BD. We will intimate you once your order is shipped";
        $mobile = Auth::user()->mobile;
        //Sms::sendSms($message,$mobile);
        $orderDetails = Order::with('orders_products')->where('id',$order_id)->first()->toArray();
        //Send Email 
        $email = Auth::user()->email;
        $messageData = [
          'email' => $email,
          'name' => Auth::user()->name,
          'order_id' => $order_id,
          'orderDetails' => $orderDetails,
        ];
        Mail::send('emails.order',$messageData,function($message) use($email){
          $message->to($email)->subject('Order Placed - EcomShopBD Cloth Store');
        });
        return redirect('/thanks');
     }
     else
     {
        echo "Prepaid Method Coming Soon";die;
     }
    }

    $userCartItems = Cart::userCartItems();
    if(count($userCartItems)==0){
      $message = "Shopping Cart is empty! Please add product to checkout.";
      Session::flash('success_message',$message);
      return redirect('/cart');
    }
    $deliveryAddresses = DeliveryAddress::deliveryAddresses();
    return view('front.products.checkout')->with(compact('userCartItems','deliveryAddresses'));
  }
  public function thanks(){
    //Empty The User Cart
    if(Session::has('order_id')){
      Cart::where('user_id',Auth::user()->id)->delete();
      return view('front.products.thanks');
    }
    else
    {
      return redirect('/cart');
    }
  
  }
  public function validation($request){
    $rules = [
      'name' => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
      'address' => 'required',
      'city' => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
      'state' => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
      'country' => 'required',
      'pincode' => 'required|numeric|digits:4',
      'mobile' => 'required|numeric|digits:11'
    ];
    $customMessage = [
      'name.required' => 'Name is required',
      'name.regex' => 'Valid name is required',
      'address.required' => 'Address is required',
      'city.required' => 'City is required',
      'city.regex' => 'Valid city is required',
      'state.required' => "The state is required",
      'country.required' => 'Country is required',
      'pincode.required' => 'Pincode is required',
      'pincode.numeric' => 'Valid pincode is required',
      'pincode.digits' => 'Pincode must be 4 digits',
      'mobile.required' => 'Mobile number is required',
      'mobile.numeric' => 'Valid mobile number is required',
      'mobile.digits' => 'Mobile number must be 11 digits'
    ];
    $this->validate($request,$rules,$customMessage);

}
  //Delivery Address
  public function addEditDeliveryAddress($id=null,Request $request){
    if($id == null)
    {
      $title = "Add Delivery Address";
      $message = "Your delivery address have been saved successfully";
      $deliveryAddresse = new DeliveryAddress();
    }
    else
    {
      $title = "Edit Delivery Address";
      $message = "Your delivery address have been updated successfully";
      $deliveryAddresse = DeliveryAddress::find($id);
    }
    if($request->isMethod('post')){
      //validation
      $this->validation($request);
    //save delivery address
      $deliveryAddresse->user_id = Auth::User()->id;
      $deliveryAddresse->name = $request->name;
      $deliveryAddresse->address = $request->address;
      $deliveryAddresse->city = $request->city;
      $deliveryAddresse->state = $request->state;
      $deliveryAddresse->country = $request->country ;
      $deliveryAddresse->pincode = $request->pincode;
      $deliveryAddresse->mobile = $request->mobile;
      $deliveryAddresse->status = 1;
      $deliveryAddresse->save();

      
    
      Session::flash('success_message',$message);
      Session::forget('error_message');
      return redirect('/checkout');
    }
    $countries = Country::where('status',1)->get()->toArray();
    return view('front.products.add_edit_delivery_address')->with(compact('countries','title','deliveryAddresse'));
  }
  public function deleteDeliveryAddress(Request $request){
    if($request->ajax()){
      DeliveryAddress::where('id',$request->id)->delete();
      $message = "Your delivery address have been deleted successfully";
      return response()->json(['id'=>$request->id,'success_message'=>$message]);
    }
  }
}
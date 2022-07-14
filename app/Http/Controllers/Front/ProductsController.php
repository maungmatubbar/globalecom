<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Mail;
use App\Cart;
use App\Coupon;
use App\User;
use App\DeliveryAddress;
use App\Country;
use App\Order;
use App\OrdersProduct;
use App\Sms;
use App\Category;
use App\Product;
use App\ProductsAttribute;
use App\ShippingCharge;
use App\Currency;
use App\Rating;
use Auth;
use DB;
use Session;
use Validator;
class ProductsController extends Controller
{
    public function listing(Request $request)
    {
        Paginator::useBootstrap();
        if ($request->ajax()) 
        {
            $data = $request->all();
            //echo "<pre>";print_r($data);die;
            Paginator::useBootstrap();
            $url = $data["url"];
            $categoryCount = Category::where(["url" => $url,"status" => 1])->count();
            if ($categoryCount > 0) {
                $categoryDetails = Category::categoryDetails($url); //-->this categoryDetails in Category Model
                
                $categoryProducts = Product::with("brand")->whereIn("category_id", $categoryDetails["categoryIds"])->where("status", 1);

                //If fabric filter is selected
                if (isset($data["fabric"]) && !empty($data["fabric"])) {
                    //database products and column fabric
                    $categoryProducts->whereIn(
                        "products.fabric",
                        $data["fabric"]
                    );
                }
                //If sleeve is selected
                if (isset($data["sleeve"]) && !empty($data["sleeve"])) {
                    //database products and column fabric
                    $categoryProducts->whereIn(
                        "products.sleeve",
                        $data["sleeve"]
                    );
                }
                //If pattern is selected
                if (isset($data["pattern"]) && !empty($data["pattern"])) {
                    //database products and column fabric
                    $categoryProducts->whereIn("products.pattern",$data["pattern"]);
                }
                //If fit is selected
                if (isset($data["fit"]) && !empty($data["fit"])) {
                    //database products and column fabric
                    $categoryProducts->whereIn("products.fit", $data["fit"]);
                }
                //If occasion is selected
                if (isset($data["occasion"]) && !empty($data["occasion"])) {
                    //database products and column fabric
                    $categoryProducts->whereIn("products.occasion",$data["occasion"]);
                }
                //If sort option ise selected
                if (isset($data["sort"]) && !empty($data["sort"])) {
                    if ($data["sort"] == "product_latest") {
                        $categoryProducts->orderBy("id", "Desc");
                    } elseif ($data["sort"] == "product_name_a_z") {
                        $categoryProducts->orderBy("product_name", "Asc");
                    } elseif ($data["sort"] == "product_name_z_a") {
                        $categoryProducts->orderBy("product_name", "Desc");
                    } elseif ($data["sort"] == "lowest_price_first") {
                        $categoryProducts->orderBy("product_price", "Asc");
                    } elseif ($data["sort"] == "highest_price_first") {
                        $categoryProducts->orderBy("product_price", "Desc");
                    }
                }
                else
                {
                    $categoryProducts->orderBy("id", "Asc");
                }
                $categoryProducts = $categoryProducts->paginate(3);
                return view("front.products.ajax_products_list")->with(
                    compact("categoryDetails", "categoryProducts", "url")
                );
                // echo"<pre>";print_r($categoryProducts);die;
            }
            else 
            {
                abort(404, "Page Not Found");
            }
        }
        else 
        {
            //Give Request current url
            $url = Route::getFacadeRoot()->current()->uri();
            //print_r($url);die;
            $categoryCount = Category::where(["url" => $url,"status" => 1])->count();
            
           
            if(isset($_REQUEST['search']) && !empty($_REQUEST['search']))
            {
                $search_product = $_REQUEST['search'];
                $categoryDetails['breadcrumbs']                 =  $search_product;
                $categoryDetails['catDetails']['category_name'] =   $search_product;
                $categoryDetails['catDetails']['description']   = 'Search Results for '. $search_product;
                $categoryProducts = Product::with('brand')->where(function($query)use($search_product){
                  $query->where('product_name','like','%'.$search_product.'%')
                  ->orWhere('product_code','like','%'.$search_product.'%')
                  ->orWhere('product_color','like','%'.$search_product.'%')
                  ->orWhere('description','like','%'.$search_product.'%');
                })->where('status',1)->get();
                $page_name = "listing";
                return view("front.products.listing")->with(compact("categoryDetails","categoryProducts","page_name"));
            }
            else if ($categoryCount > 0)
            {
                $categoryDetails  = Category::categoryDetails($url); //-->this categoryDetails in Category Model
                $category= Category::select('section_id')->where(["url" => $url,"status" => 1])->first();
                Session::put('section_id',$category->section_id);
                $categoryProducts = Product::with("brand")->whereIn("category_id", $categoryDetails["categoryIds"])->where("status", 1);
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
                //Paginate link show products
                $categoryProducts = $categoryProducts->paginate(3);
                //Products filers
                $productFilters = Product::productFilters();
                $fabricArray    = $productFilters["fabricArray"];
                $sleeveArray    = $productFilters["sleeveArray"];
                $fitArray       = $productFilters["fitArray"];
                $occasionArray  = $productFilters["occasionArray"];
                $patternArray   = $productFilters["patternArray"];
                $page_name      = "listing";
                return view("front.products.listing")->with(
                    compact(
                        "categoryDetails",
                        "categoryProducts",
                        "url",
                        "fabricArray",
                        "sleeveArray",
                        "fitArray",
                        "occasionArray",
                        "patternArray",
                        "page_name"
                    )
                );
                // echo"<pre>";print_r($categoryProducts);die;
            }
            else
            {
                abort(404, "Page Not Found");
            }
        }
    }
    public function detail(Product $data ,$id)
    {
        $productDetails = Product::with(["brand","category","section","attributes" =>function ($query) { $query->where("status", 1);},"images" => function ($query) { $query->where("status", 1);}, ])->find($id);
        $productDetails = json_decode(json_encode($productDetails));
        $total_stock = ProductsAttribute::where("product_id", $id)->sum(
            "stock"
        );
        
        $relatedProducts = Product::where("category_id",$productDetails->category->id)->where("id", "!=", $id)->limit(3)->inRandomOrder()->get();
        $relatedProducts = json_decode(json_encode($relatedProducts));
        //Group Code Products Show
        $groupProducts = [];
        if(!empty($productDetails->group_code))
        {
            $groupProducts = Product::select('id','main_image')->where('id','!=',$id)->where(['group_code'=>$productDetails->group_code,'status'=>1])->get();
        }
        //Currencies 
        //$currencies = Currency::where('status',1)->get(['currency_code','exchange_rate']);
        $currencies = Currency::select('currency_code','exchange_rate')->where('status',1)->orderBy('id','ASC')->limit(3)->get();
        $currencies = json_decode(json_encode($currencies));
        //Get all ratings
        $ratings = Rating::where(['product_id'=>$id,'status'=>1])->orderBy('id','desc')->get();  
        $ratingsSum = Rating::where(['product_id'=>$id,'status'=>1])->sum('rating');  
        $ratingsCount = Rating::where(['product_id'=>$id,'status'=>1])->count();  
        $ratingsCount = $ratingsCount > 0 ? $ratingsCount : 1;
        $avgStarRatings = round($ratingsSum / $ratingsCount);
        return view("front.products.detail")->with(
            compact("productDetails", "total_stock", "relatedProducts","groupProducts","currencies","ratings","avgStarRatings")
        );
    }
    public function getPrice(Request $request)
    {
        if ($request->ajax()) {
            $data = $request->all();
            // $getPrice = ProductsAttribute::where(['product_id'=>$data['product_id'],'size'=>$data['size']])->first();
            $getPrice = Product::getAttrDiscountedPrice($data["product_id"],$data["size"]);
            //Currency get and calculate
            $currencies = Currency::select('currency_code','exchange_rate')->where('status',1)->limit(3)->get();

            $currencies = json_decode(json_encode($currencies));
            $getPrice['currency'] = '';
            foreach($currencies as $currency)
            {
                $getPrice['currency'] .= "<br>";
                $getPrice['currency'] .= $currency->currency_code;
                $getPrice['currency'] .= ' '.round($getPrice['final_price']/$currency->exchange_rate,2);
            }
             return $getPrice;
        }
    }
    //Add to cart
    public function addtocart(Request $request)
    {
        if ($request->isMethod("post")) {
            if($request->quantity<=0 || $request->quantity=="")
            {
                $request->quantity = 1;
            }
            //check stock product are available or not
            $getProductStock = ProductsAttribute::where([
                "product_id" => $request->product_id,
                "size"       => $request->size,
            ])->first();
            if ($getProductStock->stock < $request->quantity) {
                $message = "Required quantity is not available!";
                session::flash("error_message", $message);
                return redirect()->back();
            }
            // Generate session id if not exists
            $session_id = Session::get("session_id");
            if (empty($session_id)) {
                $session_id = Session::getId();
                Session::put("session_id", $session_id);
            }
            //Check Product already exists in cart

            if (Auth::check()) {
                $countProduct = Cart::where([
                    "product_id" => $request->product_id,
                    "size"       => $request->size,
                    "user_id"    => Auth::user()->id,
                ])->count();
            } else {
                $countProduct = Cart::where([
                    "product_id" => $request->product_id,
                    "size"       => $request->size,
                    "session_id" => Session::get("session_id"),
                ])->count();
            }
            if ($countProduct > 0) {
                $message = "Product already exists in cart!";
                session::flash("error_message", $message);
                return redirect()->back();
            }
            //
            if (Auth::check()) {
                $user_id = Auth::user()->id;
            } else {
                $user_id = 0;
            }
            //Save product in cart
            Cart::insert([
                "session_id" => $session_id,
                "user_id"    => $user_id,
                "product_id" => $request->product_id,
                "size"       => $request->size,
                "quantity"   => $request->quantity,
            ]);
            $message = "Product has been added in cart!";
            session::flash("success_message", $message);
            return redirect("cart");
        }
    }
    //Cart
    public function cart()
    {
        $userCartItems = Cart::userCartItems();
        if (empty($userCartItems)) {
            return redirect("/");
        }
        return view("front.products.cart")->with(compact("userCartItems"));
    }
    //Update Cart Item Quantity
    public function updateCartItemQty(Request $request)
    {
        if ($request->ajax()) {
            $data = $request->all();

            //Get Cart Details
            $cartDetails = Cart::find($data["cartid"]);
            // //Get Available Product stock
            $availableStock = ProductsAttribute::select("stock")
                ->where([
                    "product_id" => $cartDetails["product_id"],
                    "size"       => $cartDetails["size"],
                ])
                ->first()
                ->toArray();

            // //Check stock is availabe or not.
            if ($data["qty"] > $availableStock["stock"]) {
                $userCartItems = Cart::userCartItems();
                return response()->json([
                    "status"  => false,
                    "message" => "Product stock is not available!",
                    "view"    => (string) View::make(
                        "front.products.cart_items"
                    )->with(compact("userCartItems")),
                ]);
            }

            //Check Size Available
            $availableSize = ProductsAttribute::where([
                "product_id" => $cartDetails["product_id"],
                "size"       => $cartDetails["size"],
                "status"     => 1,
            ])->count();
            if ($availableSize == 0) {
                $userCartItems = Cart::userCartItems();
                return response()->json([
                    "status"  => false,
                    "message" => "Product size is not available!",
                    "view"    => (string) View::make(
                        "front.products.cart_items"
                    )->with(compact("userCartItems")),
                ]);
            }

            Cart::where("id", $data["cartid"])->update([
                "quantity" => $data["qty"],
            ]);
            $userCartItems = Cart::userCartItems();
            $totalCartItems = totalCartItems();
            return response()->json([
                "status" => true,
                "totalCartItems" => $totalCartItems,
                "view" => (string) View::make(
                    "front.products.cart_items"
                )->with(compact("userCartItems")),
            ]);
        }
    }
    public function deleteCartItem(Request $request)
    {
        if ($request->ajax()) {
            $data = $request->all();
            Cart::where("id", $data["cartid"])->delete();
            $userCartItems = Cart::userCartItems();
            $totalCartItems = totalCartItems();
            return response()->json([
                "totalCartItems" => $totalCartItems,
                "view" => (string) View::make(
                    "front.products.cart_items"
                )->with(compact("userCartItems")),
            ]);
        }
    }
    //Apply Coupon code
    public function applyCoupon(Request $request)
    {
        if ($request->ajax()) {
            //echo "<pre>"; print_r($request->all());die;
            $data = $request->all();
            $couponCount = Coupon::where("coupon_code", $data["code"])->count();
            $userCartItems = Cart::userCartItems();
            $totalCartItems = totalCartItems();
            session::forget('couponCode');
            session::forget('couponAmount');
            if ($couponCount == 0) {
                return response()->json([
                    "status" => false,
                    "message" => "This coupon is not valid!",
                    "totalCartItems" => $totalCartItems,
                    "view" => (string) View::make(
                        "front.products.cart_items"
                    )->with(compact("userCartItems")),
                ]);
            } else {
                //Get Coupon details
                $couponDetails = Coupon::where(
                    "coupon_code",
                    $data["code"]
                )->first();
                //Check Coupon Inactive
                if ($couponDetails->status == 0) {
                    $message = "The coupon code is inactive";
                }
                //Check if coupon is expired
                $expiry_date = $couponDetails->expiry_date;
                $current_data = date("Y-m-d");
                if ($expiry_date < $current_data) {
                    $message = "The coupon is expired!";
                }
                //Check coupon is for single or multiple
                if ($couponDetails->coupon_type == "Single Times") {
                    //check orders table if coupon is already availed by the user
                    $couponCount = Order::where([
                        "coupon_code" => $data["code"],
                        "user_id" => Auth::user()->id,
                    ])->count();
                    if ($couponCount >= 1) {
                        $message = "This coupon code is already used by you!";
                    }
                }
                //check if coupon is selected categories
                //Get all selected categories from coupon
                $categoryArr = explode(",", $couponDetails->categories);
                //Check if coupon belongs to logged in users
                //Get all selected users of coupon
                if (!empty($couponDetails->users)) {
                    $userArr = explode(",", $couponDetails->users); //users= emails
                    foreach ($userArr as $user) {
                        $getUserId = User::select("id")
                            ->where("email", $user)
                            ->first()
                            ->toArray();
                        $userId[] = $getUserId["id"];
                    }
                }

                //Total Amount
                $total_amount = 0;
                foreach ($userCartItems as $item) {
                    if (!in_array($item->product->category_id, $categoryArr)) {
                        $message =
                            "This coupon is not for one of the selected products!";
                    }
                    if (!empty($couponDetails->users)) {
                        if (!in_array($item->user_id, $userId)) {
                            $message = "This coupon is not for you!";
                        }
                    }
                    //Get Attr Total price
                    $attrPrice = Product::getAttrDiscountedPrice(
                        $item->product_id,
                        $item->size
                    );
                    $total_amount =
                        $total_amount +
                        $attrPrice["final_price"] * $item->quantity;
                }

                if (isset($message)) {
                    return response()->json([
                        "status" => false,
                        "message" => $message,
                        "totalCartItems" => $totalCartItems,
                        "view" => (string) View::make(
                            "front.products.cart_items"
                        )->with(compact("userCartItems")),
                    ]);
                } else {
                    //Check amount type  Fixed or Percentage
                    if ($couponDetails->amount_type == "Fixed") {
                        $couponAmount = $couponDetails->amount_type;
                    } else {
                        $couponAmount =
                            $total_amount * ($couponDetails->amount / 100);
                    }
                    $grand_total = $total_amount - $couponAmount;
                    //Add coupon code and amount in session variable
                    Session::put("couponAmount", $couponAmount);
                    Session::put("couponCode", $data["code"]);
                    $message =
                        "Coupon code successfully applied.You are availing discount!";
                    $userCartItems = Cart::userCartItems();
                    $totalCartItems = totalCartItems();
                    return response()->json([
                        "status" => true,
                        "message" => $message,
                        "totalCartItems" => $totalCartItems,
                        "couponAmount" => $couponAmount,
                        "grand_total" => $grand_total,
                        "view" => (string) View::make(
                            "front.products.cart_items"
                        )->with(compact("userCartItems")),
                    ]);
                }
            }
        }
    }

    //Place Order Checkout
    public function checkout(Request $request)
    {
        $userCartItems = Cart::userCartItems();
        if (count($userCartItems) == 0) {
            $message =
                "Shopping Cart is empty! Please add product to checkout.";
            Session::flash("success_message", $message);
            return redirect("/cart");
        }
        $deliveryAddresses = DeliveryAddress::deliveryAddresses();
        
       
        $total_price = 0;
        $total_weight = 0;
        foreach ($userCartItems as $item)
        {
            //Calculate Total Product weight
            $product_weight = $item->product->product_weight;
            $total_weight = $total_weight + ($product_weight * $item->quantity);
            //Get Attribute Price
            $attrPrice = Product::getAttrDiscountedPrice($item->product_id,$item->size);
            $total_price = $total_price + ( $attrPrice['final_price']*$item->quantity);
         
        }

        foreach($deliveryAddresses as $key=> $value)
        {
            $shippingCharges = ShippingCharge::getShippingCharges($total_weight,$value['country']);
            //Make shipping charges insert array
            $deliveryAddresses[$key]['shipping_charges'] = $shippingCharges;
            //Check if delivery pincode exists In COD pincode list
            $deliveryAddresses[$key]['cod_pincode_count'] = DB::table('cod_pincodes')->where('pincode',$value['pincode'])->count();
             //Check if delivery pincode exists In Prepaid pincode list
             $deliveryAddresses[$key]['prepaid_pincode_count'] = DB::table('prepaid_pincodes')->where('pincode',$value['pincode'])->count();
            
        }
        //Web security Check
        // echo "<pre>";
        // print_r($userCartItems);die;
        //Fatch user cart item
        foreach($userCartItems as $kry => $cart)
        {
            $product_status = Product::getProductStatus($cart->product_id);
            if($product_status == 0 )
            {
                //Product::deleteCartProduct($cart->product_id);
                $message = $cart->product->product_code.' is not available so please removed from cart.';
                Session::flash('error_message',$message);
                return redirect('/cart');
            }
            //Prevent out of stock products to order
            $product_stock = Product::getProductStock($cart->product_id,$cart->size);
            if($product_stock==0)
            {
                $message = $cart->product->product_code.' is not available so please removed from cart.';
                Session::flash('error_message',$message);
                return redirect('/cart');
            }
            //Prevent disabled or Delete Product Attributes to order
            $productCount = Product::getAttributeCount($cart->product_id,$cart->size);
            if($productCount==0)
            {
                $message = $cart->product->product_code.' is not available so please removed from cart.';
                Session::flash('error_message',$message);
                return redirect('/cart');
            }
             //Prevent disabled Categories Products to order
             $categoryStatus = Product::getCategoryStatus($cart->product->category_id);
             if($categoryStatus == 0)
             {
                $message = $cart->product->product_code.' is not available so please removed from cart.';
                Session::flash('error_message',$message);
                return redirect('/cart');
             }


        }
        
        if ($request->isMethod("post")) {
            $data = $request->all();
            
            if (empty($data["address_id"])) {
                $message = "Please select delivery address!";
                Session::flash("error_message", $message);
                return redirect()->back();
            }
            if (empty($data["payment_gateway"])) {
                $message = "Please select payment method!";
                Session::flash("error_message", $message);
                return redirect()->back();
            }

            if ($data["payment_gateway"] == "COD") {
                $payment_method = "COD";
            }
            else if ($data["payment_gateway"] == "Paypal")
            {
                $payment_method = "Paypal";
            }
            else
            {
                echo "Prepaid Method Coming Soon";
                die();
                $payment_method = "Prepaid";
            }
            //get delivery address from address_id
            $deliveryAddress = DeliveryAddress::where("id", $data["address_id"])
                ->first()
                ->toArray();
            //Get shipping charges
            $shippingCharges = ShippingCharge::getShippingCharges($total_weight,$deliveryAddress['country']);
            //Calculate total Price
            $grand_total = $total_price + $shippingCharges - Session::get('couponAmount');
            
            //Insert grand total in Session variable
            Session::put('grand_total',$grand_total);

            DB::beginTransaction();
            //Insert Order Details
            $order = new Order();
            $order->user_id = Auth::user()->id;
            $order->name = $deliveryAddress["name"];
            $order->address = $deliveryAddress["address"];
            $order->city = $deliveryAddress["city"];
            $order->state = $deliveryAddress["state"];
            $order->country = $deliveryAddress["country"];
            $order->pincode = $deliveryAddress["pincode"];
            $order->mobile = $deliveryAddress["mobile"];
            $order->email = Auth::user()->email;
            $order->shipping_charges = $shippingCharges;
            $order->coupon_code = Session::get("couponCode");
            $order->coupon_amount = Session::get("couponAmount");
            $order->order_status = "New";
            $order->payment_method = $payment_method;
            $order->payment_gateway = $data["payment_gateway"];
            $order->grand_total = Session::get("grand_total");
            $order->save();

            //Get Last Insert Order ID
            $order_id = DB::getPdo()->lastInsertId();

            //Get User Cart Items
            $cartItems = Cart::where("user_id", Auth::user()->id)
                ->get()
                ->toArray();
            foreach ($cartItems as $item) {
                $cartItem = new OrdersProduct(); //Store OrdersProduct Table
                $cartItem->order_id = $order_id;
                $cartItem->user_id = Auth::user()->id;
                $getProductDetails = Product::select(
                    "product_name",
                    "product_code",
                    "product_color"
                )
                    ->where("id", $item["product_id"])
                    ->first()
                    ->toArray();
                $cartItem->product_id = $item["product_id"];
                $cartItem->product_code = $getProductDetails["product_code"];
                $cartItem->product_name = $getProductDetails["product_name"];
                $cartItem->product_color = $getProductDetails["product_color"];
                $cartItem->product_size = $item["size"];
                //Get Discount Price
                $getAttrDiscountedPrice = Product::getAttrDiscountedPrice($item["product_id"],$item["size"]);
                $cartItem->product_price = $getAttrDiscountedPrice["final_price"];
                $cartItem->product_qty = $item["quantity"];
                $cartItem->save();
                
                //Reduce Stock Management Script Start
                if($data['payment_gateway'] == "COD")
                {
                    //Current stock
                    $getProductStock = ProductsAttribute::where(['product_id'=>$item['product_id'],'size'=>$item['size']])->first()->toArray();
                    //Calculate Stock
                    $newStock = $getProductStock['stock'] - $item['quantity'];
                    //Update Stock
                    ProductsAttribute::where(['product_id'=>$item['product_id'],'size'=>$item['size']])->update(['stock'=>$newStock]);
                }
                //Reduce Stock Management Script End
            }
            //Empty The user cart
            Cart::where("user_id", Auth::user()->id)->delete();
            //Insert order_id in session  Variable
            Session::put("order_id", $order_id);
            DB::commit();

            if ($data["payment_gateway"] == "COD") {
                $message =
                    "Dear Customer,Your order" .
                    $order_id .
                    "has been successfully placed with Ecom Shop BD. We will intimate you once your order is shipped";
                //Send SMS Mobile
                $mobile = Auth::user()->mobile;
                //Sms::sendSms($message,$mobile);
                $orderDetails = Order::with("orders_products")
                    ->where("id", $order_id)
                    ->first()
                    ->toArray();
                //Send Email
                $email = Auth::user()->email;
                $messageData = [
                    "email" => $email,
                    "name" => Auth::user()->name,
                    "order_id" => $order_id,
                    "orderDetails" => $orderDetails,
                ];
                Mail::send("emails.order", $messageData, function (
                    $message
                ) use ($email) {
                    $message
                        ->to($email)
                        ->subject("Order Placed - EcomShopBD Cloth Store");
                });
                return redirect("/thanks");
            }
            elseif($data["payment_gateway"] == "Paypal")
            {
                return redirect('paypal');
            }
            else
            {
                echo "Other Prepaid Method Coming Soon";
                die();
            }
        }

         
        return view("front.products.checkout")->with(
            compact("userCartItems", "deliveryAddresses",'total_price')
        );
    }
    public function thanks()
    {
        //Empty The User Cart
        if (Session::has("order_id")) {
            Session::forget("couponAmount");
            Session::forget("couponCode");
            Cart::where("user_id", Auth::user()->id)->delete();
            return view("front.products.thanks");
        } else {
            return redirect("/cart");
        }
    }
    public function validation($request)
    {
        $rules = [
            "name" => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
            "address" => "required",
            "city" => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
            "state" => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
            "country" => "required",
            "pincode" => "required|numeric|digits:4",
            "mobile" => "required|numeric|digits:11",
        ];
        $customMessage = [
            "name.required" => "Name is required",
            "name.regex" => "Valid name is required",
            "address.required" => "Address is required",
            "city.required" => "City is required",
            "city.regex" => "Valid city is required",
            "state.required" => "The state is required",
            "country.required" => "Country is required",
            "pincode.required" => "Pincode is required",
            "pincode.numeric" => "Valid pincode is required",
            "pincode.digits" => "Pincode must be 4 digits",
            "mobile.required" => "Mobile number is required",
            "mobile.numeric" => "Valid mobile number is required",
            "mobile.digits" => "Mobile number must be 11 digits",
        ];
        $this->validate($request, $rules, $customMessage);
    }
    //Delivery Address
    public function addEditDeliveryAddress(Request $request,$id=null)
    {
       if ($id=="") {
            $title = "Add Delivery Address";
            $message = "Your delivery address have been saved successfully";
            $deliveryAddresse = new DeliveryAddress();
        } else {
            $title = "Edit Delivery Address";
            $message = "Your delivery address have been updated successfully";
            $deliveryAddresse = DeliveryAddress::find($id);
        }
        if ($request->isMethod("post")) 
        {
            //validation
            $this->validation($request);
            //save delivery address
            $deliveryAddresse->user_id = Auth::User()->id;
            $deliveryAddresse->name = $request->name;
            $deliveryAddresse->address = $request->address;
            $deliveryAddresse->city = $request->city;
            $deliveryAddresse->state = $request->state;
            $deliveryAddresse->country = $request->country;
            $deliveryAddresse->pincode = $request->pincode;
            $deliveryAddresse->mobile = $request->mobile;
            $deliveryAddresse->status = 1;
            $deliveryAddresse->save();

            Session::flash("success_message", $message);
            Session::forget("error_message");
            return redirect("/checkout");
        }
        $countries = Country::where("status", 1)->get()->toArray();
        return view("front.products.add_edit_delivery_address")->with(compact("countries", "title", "deliveryAddresse"));
        echo "hello";
    }
    public function deleteDeliveryAddress(Request $request)
    {
        if ($request->ajax()) {
            DeliveryAddress::where("id", $request->id)->delete();
            $message = "Your delivery address have been deleted successfully";
            return response()->json([
                "id" => $request->id,
                "success_message" => $message,
            ]);
        }
    }
    public function checkPincode(Request $request)
    {
        if($request->isMethod('post'))
        {
           $validator = Validator::make($request->all(),['pincode'=>'numeric']);
           if(!$validator->passes())
           {
                return response()->json(['status'=>0,'error'=>$validator->errors()->toArray()]);
           }
        
            
           $codPincodeCount = DB::table('cod_pincodes')->where('pincode',$request->pincode)->count();
           $prepaidPincodeCount = DB::table('prepaid_pincodes')->where('pincode',$request->pincode)->count();
           if($codPincodeCount == 0 && $prepaidPincodeCount == 0)
           {
                $status = 1;
                $message = "This pincode is not available for delivery.";
           }
           else
           {
                $status = 2;
                $message = "This pincode is available for delivery.";
           }
            return response()->json(['status' => $status,'message'=>$message]);
        }
    }
}
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

use App\Category;
use App\CmsPage;
Route::middleware('visitor')->namespace('Front')->group(function(){
    //Home Page Route
    //Route::get('/','IndexController@index');
    Route::match(['get','post'],'/','IndexController@index');
    //Listing Categories Route
    //Route::get('/{url}','ProductsController@listing');
    $catUrls = Category::select('url')->where('status',1)->get()->pluck('url')->toArray();// not working 
    //$catUrls = Category::select('url')->where('status',1)->get();
    foreach( $catUrls  as $catUrl){
      // echo "<pre>";print($catUrl['url']);
      //$url = $catUrl['url'];
     // Route::get('/'.$url,'ProductsController@listing');
      Route::get('/'.$catUrl,'ProductsController@listing');
    }
    //CMSPages
    $cmsUrls = CmsPage::select('url')->where('status',1)->get()->pluck('url')->toArray();
    // echo "<pre>";
    // print_r($cmsUrls);die;
    foreach( $cmsUrls  as $cmsUrl){
        
        Route::get('/'.$cmsUrl,'CmsController@cmsPage');
    }
    Route::get('/ajax-pagination','ProductsController@ajaxPagination');
    //Product Detail Route
    //Route::get('/product/{id}','ProductsController@detail');
    Route::get('/product/{id}','ProductsController@detail');
    Route::get('/contact-us',function(){
        echo "test"; die;
    });
    //Get Product price details product
    Route::post('/get-product-price','ProductsController@getPrice');
    //Add to cart
    Route::post('/add-to-cart','ProductsController@addtocart');
    //Cart Route
    Route::get('/cart','ProductsController@cart');
    //Update Cart Item Quantity
    Route::post('/update-cart-item-qty','ProductsController@updateCartItemQty');
    //Delete Cart Item 
    Route::post('/delete-cart-item','ProductsController@deleteCartItem');
     //User Login and Register
    Route::get('/login-register','UsersController@loginRegister');
    //Login user
    Route::post('/login','UsersController@loginUser');
    //Register user
    Route::post('/register','UsersController@registerUser');
    //Check Email
    Route::match(['get', 'post'], '/check-email','UsersController@checkEmail');
    //Logout user
    Route::get('/logout','UsersController@logout');
    //User Login
    Route::post('/login','UsersController@login');
    //Confirm account
    Route::match(['GET','POST'],'/confirm/{code}','UsersController@confirmAccount');
    //Forget Password
    Route::match(['get', 'post'], '/forgot-password','UsersController@forgotPassword');
    //Check Delivery Pincode
    Route::post('/check-pincode','ProductsController@checkPincode');
    //Search Products
    Route::post('/search-products','ProductsController@listing');
    //Contact
    Route::match(['get','post'],'/contact','CmsController@contact');
    //Rating and Review
    Route::post('/add-rating','RatingsController@addRating');
    //For Customer Login a Or Registration
    Route::group(['middleware'=>['checkUser']],function(){
        //My Account
         Route::match(['get', 'post'], '/account','UsersController@account');
        //check current current password
        Route::post('/check-user-pwd','UsersController@chkUserPassword');
        //update user password
        Route::post('/update-user-pwd','UsersController@updateUserPassword');
        //Added Coupon code
        Route::post('/apply-coupon','ProductsController@applyCoupon');
        //Checkout
        Route::match(['get','post'],'/checkout','ProductsController@checkout');
        //delivery address
        Route::match(['get', 'post'], '/add-edit-delivery-address/{id?}','ProductsController@addEditDeliveryAddress');
        //Delete Delivery Address
        Route::get('/delete-delivery-address/{id}','ProductsController@deleteDeliveryAddress');
        //Thanks
        Route::get('/thanks','ProductsController@thanks');
        //Users Orders
        Route::get('/orders','OrdersController@orders');
        //Order Details
        Route::get('/orders/{id}','OrdersController@ordersDetails');
        //Paypal Payment method
        Route::get('/paypal','PaypalController@paypal');
        //Paypal success
        Route::get('/paypal/success','PaypalController@success');
        //Paypal Fail
        Route::get('/paypal/fail','PaypalController@fail');
        // Paypal IPN
        Route::any('/paypal/ipn','PaypalController@ipn');
        
    });
   
});
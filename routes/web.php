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
Route::prefix('/admin')->namespace('Admin')->group(function () {
    //All the admin routes will be defined here:-
    Route::match(['get', 'post'], '/', 'AdminController@login');
    Route::group(['middleware' => ['admin']], function () {
        Route::get('/dashboard', 'AdminController@dashboard')->name('dashboard');
        Route::get('/settings', 'AdminController@settings');
        Route::post('/logout', 'AdminController@logout');
        Route::post('/check-current-pass', 'AdminController@currentPassCheck');
        Route::post('/update-password', 'AdminController@updatePassword');
        Route::match(['get', 'post'], '/update-admin-info', 'AdminController@updateAdminInfo');

        //sections
        Route::get('/sections', 'SectionController@sections');
        Route::post('/update-section-status', 'SectionController@updateSectionStatus');
        //brands
        Route::get('/brands', 'BrandController@brands');
        Route::post('/update-brand-status', 'BrandController@updateBrandStatus');
        Route::match(['get', 'post'],'add-edit-brand/{id?}', 'BrandController@addEditBrand');
        Route::get('delete-product-brand/{id}','BrandController@deleteBrand');
        //categories
        Route::get('/categories', 'CategoryController@categories');
        Route::post('/update-category-status', 'CategoryController@updateCategoryStatus');
        Route::match(['get', 'post'], '/add-edit-category/{url?}', 'CategoryController@addEditCategory');
        Route::post('/appand-categories-level','CategoryController@appandCategoriesLevel');
        Route::post('/delete-category-image','CategoryController@deleteCategoryImage');
        Route::get('/delete-category/{url}','CategoryController@deleteCategory');
        //Products
        Route::get('/products','ProductsController@products');
        Route::post('/update-product-status', 'ProductsController@updateProductStatus');
        Route::get('/delete-product/{url}', 'ProductsController@deleteProduct');
        Route::match(['get', 'post'], '/add-edit-product/{url?}','ProductsController@addEditProduct');
        Route::post('/delete-product-image','ProductsController@deleteProductImage');
        Route::get('/delete-product-video/{id}','ProductsController@deleteProductVideo');
        //Add Attributes
        Route::match(['get', 'post'], 'add-attributes/{id}','ProductsController@addAttributes');
        Route::post('edit-attributes/{id}','ProductsController@editAttributes');
        Route::post('update-attribute-status','ProductsController@updateProductAttributeStatus');
        Route::get('delete-product-attribute/{id}','ProductsController@deleteProductAttribute');
        //Product Images
        Route::match(['get', 'post'], 'add-images/{id}', 'ProductsController@addImages');
        Route::post('update-image-status','ProductsController@updateProductImageStatus');
        Route::get('delete-product-image/{id}','ProductsController@deleteImage');
        //Banners
        Route::get('/banners','BannersController@banners');
        Route::post('/update-banner-status', 'BannersController@updateBannerStatus');
        Route::get('/delete-banner/{id}','BannersController@deleteBanner');
        Route::match(['get', 'post'], 'add-edit-banner/{id?}', 'BannersController@addEditBanner');
        //Coupons
        Route::get('/coupons','CouponsController@coupons');
        Route::post('/update-coupon-status', 'CouponsController@updateCouponStatus');
        Route::get('/delete-coupon/{id}','CouponsController@deleteCoupon');
        Route::match(['get','post'],'add-edit-coupon/{id?}', 'CouponsController@addEditCoupon');
        //Get Orders 
        Route::get('/orders','OrdersController@orders');
        //Get Order Details
        Route::get('/orders/{id}','OrdersController@orderDetails');
        //Update Order Stauts
        Route::post('/update-order-status','OrdersController@updateOrderStatus');
        //View Order Invoice
        Route::get('/view-order-invoice/{id}','OrdersController@viewOrderInvoice');
    });
});

Route::namespace('Front')->group(function(){
    //Home Page Route
    Route::get('/','IndexController@index');
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
    });
   

});
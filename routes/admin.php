<?php
use Illuminate\Support\Facades\Route;


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
        //View orders Chart
        Route::get('/view-orders-charts','OrdersController@viewOrdersChats');
        //Update Order Stauts
        Route::post('/update-order-status','OrdersController@updateOrderStatus');
        //View Order Invoice
        Route::get('/view-order-invoice/{id}','OrdersController@viewOrderInvoice');
        //Print Order Invoice
        Route::get('/print-pdf-invoice/{id}','OrdersController@printPdfInvoice');
        //View Shipping Charges
        Route::get('/view-shipping-charges','ShippingController@viewShippingCharges');
        Route::post('/update-shipping-status','ShippingController@updateShippingStatus');
        Route::match(['get','post'],'edit-shipping-charges/{id}','ShippingController@editShippingCharges');
       
        //Get All User
        Route::get('/users','UsersController@users');
        Route::post('/update-user-status','UsersController@updateUserStatus');
        //View Users Chart
        Route::get('/view-users-charts','UsersController@viewUsersCharts');
        Route::get('/view-users-countries-charts','UsersController@viewUsersCountriesCharts');
      
        //CMS
        Route::get('/cms-pages','CmsController@cmsPages');
        Route::post('/update-cms-page-status','CmsController@updateCmsPageStatus');
        Route::match(['get','post'],'add-edit-cms-page/{id?}','CmsController@addEditCmsPage');
        //Admin/Sub-Admin Roles And Permissions
        Route::get('/admins-subadmins','AdminController@adminsSubadmins');
        Route::get('/update-admin-status','AdminController@updateAdminStatus');
        Route::get('/delete-admin/{id}','AdminController@deleteAdminSubadmin');
        Route::match(['get','post'],'/add-edit-admin-subadmin/{id?}','AdminController@addEditAdminSubadmin');
        Route::match(['get','post'],'/update-role/{id?}','AdminController@updateRole');
        //Currencies
        Route::get('/currencies','CurrencyController@currencies');
        Route::match(['get','post'],'/add-edit-currency/{id?}','CurrencyController@addEditCurrency');
        Route::get('/update-currency-status','CurrencyController@updateCurrencyStatus');
        Route::get('/delete-currency/{id}','CurrencyController@deleteCurrency');
        //Reviews and Ratings
        Route::get('/ratings','RatingsController@ratings');
        Route::get('/update-rating-status','RatingsController@updateRatingStatus');
    });
});
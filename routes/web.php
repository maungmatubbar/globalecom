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

Route::get('/', function () {
    return view('welcome');
});

// Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('/admin')->namespace('Admin')->group(function () {
    //All the admin routes will be defined here:-
    Route::match(['get', 'post'], '/', 'AdminController@login');
    Route::group(['middleware' => ['admin']], function () {
        Route::get('/dashboard', 'AdminController@dashboard')->name('dashboard');
        Route::get('/settings', 'AdminController@settings');
        Route::get('/logout', 'AdminController@logout');
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
    });
});
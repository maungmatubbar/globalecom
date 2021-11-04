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
        //categories
        Route::get('/categories', 'CategoryController@categories');
        Route::post('/update-category-status', 'CategoryController@updateCategoryStatus');
        Route::match(['get', 'post'], '/add-edit-category/{url?}', 'CategoryController@addEditCategory');
        Route::post('/appand-categories-level','CategoryController@appandCategoriesLevel');
        Route::post('/delete-category-image','CategoryController@deleteCategoryImage');
        Route::get('/delete-category/{url}','CategoryController@deleteCategory');
    });
});
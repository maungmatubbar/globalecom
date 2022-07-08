<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use View;
use App\Section;
use App\Product;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('*', function ($view) {
            $view->with(['sections'=>Section::sections()]);
        });
    }
}
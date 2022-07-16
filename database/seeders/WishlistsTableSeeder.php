<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Wishlist;
class WishlistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $wishlistRecords = [
            ['id'=>1,'user_id'=>6,'product_id'=>8],
            ['id'=>2,'user_id'=>6,'product_id'=>9],
        ];
        Wishlist::insert($wishlistRecords);
    }
}
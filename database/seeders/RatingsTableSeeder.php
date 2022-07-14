<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Rating;
class RatingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ratingRecords = [
            ['id'=>1,'user_id'=>5,'product_id'=>1,'review'=>'Very Good Product','rating'=>3,'status'=>0],
            ['id'=>2,'user_id'=>5,'product_id'=>2,'review'=>'Excellent Product','rating'=>5,'status'=>0],
            ['id'=>3,'user_id'=>6,'product_id'=>3,'review'=>'Product is not good at all','rating'=>1,'status'=>0],
            ['id'=>4,'user_id'=>6,'product_id'=>4,'review'=>'Good Produt Product','rating'=>3,'status'=>0],
        ];
        Rating::insert($ratingRecords);
    }
}
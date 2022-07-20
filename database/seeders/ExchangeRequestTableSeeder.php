<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\ExchangeRequest;
class ExchangeRequestTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $exchangeRequestRecords = [
            ['id'=>1,'order_id'=>4,'user_id'=>6,'product_size'=>'Small','required_size'=>'Large','product_code'=>'BL456','exchange_reason'=>'Required Large Size','exchange_status'=>'Pending','comment'=>'']
        ];
        ExchangeRequest::insert($exchangeRequestRecords);
    }
}
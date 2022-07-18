<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\ReturnRequest;
class ReturnRequestTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $returnRequestRecords = [
            ['id'=>1,'order_id'=>1,'user_id'=>6,'product_code'=>'BL456','return_reason'=>'Item arrived too late','return_status'=>'Pending']
        ];
        ReturnRequest::insert($returnRequestRecords);
    }
}
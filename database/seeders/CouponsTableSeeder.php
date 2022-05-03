<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Coupon;
class CouponsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $couponRecords = [
            'id'=>1,'coupon_option'=>'Manual','coupon_code'=>'test30','categories'=>'1,2','users'=>'maung1607@yopmail.com,maungmatubbar@gmail.com','coupon_type'=>'Single','amount_type'=>'Percentage','amount'=>'10','expiry_date'=>'2022-04-10','status'=>1
        ];
        Coupon::insert($couponRecords);
    }
}
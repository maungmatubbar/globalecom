<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\DeliveryAddress;
class DeliveryAddresseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $deliveryAddressRecords = [
            ['id'=>1,'user_id'=>1,'name'=>'mong','address'=>'kuakata','city'=>'patuakhali','state'=>'Barishal','country'=>'Bangladesh','pincode'=>8651,'mobile'=>'01864022723','status'=>1],
            ['id'=>2,'user_id'=>1,'name'=>'mong','address'=>'Notun Bazar','city'=>'Gulshan','state'=>'Dhaka','country'=>'Bangladesh','pincode'=>1212,'mobile'=>'01756125269','status'=>1]
        ];
        DeliveryAddress::insert($deliveryAddressRecords);
    }
}
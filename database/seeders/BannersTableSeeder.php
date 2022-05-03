<?php

use Illuminate\Database\Seeder;
use App\Banner;
class BannersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bannerRecords = [
            ['id'=>1,'image'=>'banner1.jpg','title'=>'Black Jacket','link'=>'','alt'=>'Black Jacket','status'=>1],
            ['id'=>2,'image'=>'banner2.jpg','title'=>'Helf Sleeve T Shirt','link'=>'','alt'=>'Helf Sleev T Shirt','status'=>1],
            ['id'=>3,'image'=>'banner2.jpg','title'=>'Full Sleeve T Shirt','link'=>'','alt'=>'Full Sleev T Shirt','status'=>1],
            
        ];
        Banner::insert($bannerRecords);

    }
}
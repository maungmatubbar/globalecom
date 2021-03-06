<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productRecords = [
            [
                'id'=>1,
                'category_id'=>3,
                'section_id'=>1,
                'product_name'=>'Blue Catual T-Shirt',
                'product_url'=>'blue-catual-t-shirt',
                'product_code'=>'BT001',
                'product_color'=>'Blue',
                'product_price'=>1500,
                'product_discount'=>10,
                'product_weight'=>200,
                'product_video'=>'',
                'main_image'=>'',
                'description'=>'Blue Catual T-Shirt',
                'wash_care'=>'',
                'fabric'=>'',
                'pattern'=>'',
                'sleeve'=>'',
                'fit'=>'',
                'occasion'=>'',
                'meta_title'=>'',
                'meta_description'=>'',
                'meta_keywords'=>'',
                'is_featured'=>'No',
                'status'=>1

            ],
            [
                'id'=>2,
                'category_id'=>3,
                'section_id'=>1,
                'product_name'=>'Red Catual T-Shirt',
                'product_url'=>'red-catual-t-shirt',
                'product_code'=>'RT002',
                'product_color'=>'Red',
                'product_price'=>2000,
                'product_discount'=>10,
                'product_weight'=>200,
                'product_video'=>'',
                'main_image'=>'',
                'description'=>'Red Catual T shirt',
                'wash_care'=>'',
                'fabric'=>'',
                'pattern'=>'',
                'sleeve'=>'',
                'fit'=>'',
                'occasion'=>'',
                'meta_title'=>'',
                'meta_description'=>'',
                'meta_keywords'=>'',
                'is_featured'=>'Yes',
                'status'=>1

            ],
        ];
        Product::insert($productRecords);
    }
}
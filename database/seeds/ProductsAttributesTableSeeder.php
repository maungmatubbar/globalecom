<?php

use Illuminate\Database\Seeder;
use App\ProductsAttribute;
class ProductsAttributesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productsAttributesRecords = [
            [
            'id'=>1,
            'product_id'=>2,
            'size' =>'Small',
            'price' => 1200,
            'stock'=>10,
            'sku'=>'RT002-S',
            'status'=>1
            ],
            [
                'id'=>2,
                'product_id'=>2,
                'size' =>'Medium',
                'price' => 1300,
                'stock'=>20,
                'sku'=>'RT002-M',
                'status'=>1
            ],
            [
                'id'=>3,
                'product_id'=>2,
                'size' =>'Large',
                'price' => 1400,
                'stock'=>10,
                'sku'=>'RT002-L',
                'status'=>1
            ],
            
        ];
        ProductsAttribute::insert($productsAttributesRecords);
    }
}
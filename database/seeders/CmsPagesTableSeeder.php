<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\CmsPage;
class CmsPagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $cmsPageRecords;
    public function run()
    {
        $this->cmsPageRecords = [
                [
                    'id'=>1,'title'=>'About Us','description'=>'Lorem Ipsum dolor description','url'=>'about-us','meta_title'=>'About Us','meta_description'=>'About Ecommerce Website','meta_keywords'=>'about us,about ecommerce','status'=>1
                ],
                [
                    'id'=>2,'title'=>'Privacy Policy','description'=>'Privacy Policy Ipsum dolor description','url'=>'privacy-policy','meta_title'=>'Privacy Policy','meta_description'=>'Privacy of Ecommerce Website','meta_keywords'=>'privac,policy','status'=>1
                ]
            ];
            CmsPage::insert($this->cmsPageRecords);
    }
}
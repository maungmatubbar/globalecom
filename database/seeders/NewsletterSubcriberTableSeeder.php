<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\NewsletterSubscriber;
class NewsletterSubcriberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $newsletterRecords = [
            ['id'=>1,'email'=>'tanzilaullah@yopmail.com','status'=>1],
            ['id'=>2,'email'=>'humayun@yopmail.com','status'=>1],
        ];
        NewsletterSubscriber::insert($newsletterRecords);
    }
}
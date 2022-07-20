<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //$this->call(AdminsTableSeeder::class);
        // $this->call(UserSeeder::class);
        //$this->call(SectionsTableSeeder::class);
        //$this->call(CategoryTableSeeder::class);
        //$this->call(ProductsTableSeeder::class);
        //$this->call(ProductsAttributesTableSeeder::class);
        //$this->call(ProductsImagesTableSeeder::class);
       // $this->call(BrandsTableSeeder::class);
        //$this->call(BannersTableSeeder::class);
        //$this->call(CouponsTableSeeder::class);
       // $this->call(DeliveryAddresseTableSeeder::class);
       //$this->call(OrderStatusTableSeeder::class);
       //$this->call(CmsPagesTableSeeder::class);
       //$this->call(CurrenciesTableSeeder::class);
       //$this->call(RatingsTableSeeder::class);
      // $this->call(WishlistsTableSeeder::class);
       //$this->call(ReturnRequestTableSeeder::class);
       //$this->call(ExchangeRequestTableSeeder::class);
       $this->call(NewsletterSubcriberTableSeeder::class);
    }
}
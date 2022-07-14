<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Currency;
class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencyRecords = [
            ['id'=>1,'currency_code'=>'USD','exchange_rate'=>93.28,'status'=>1],
            ['id'=>2,'currency_code'=>'GBP','exchange_rate'=>111.83,'status'=>1],
            ['id'=>3,'currency_code'=>'EUR','exchange_rate'=>94.69,'status'=>1],
            ['id'=>4,'currency_code'=>'AUD','exchange_rate'=>63.67,'status'=>1],
            ['id'=>5,'currency_code'=>'CAD','exchange_rate'=>71.90,'status'=>1],
        ];
        Currency::insert($currencyRecords);
    }
}
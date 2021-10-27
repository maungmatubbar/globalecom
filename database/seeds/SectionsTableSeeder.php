<?php

use App\Section;
use Illuminate\Database\Seeder;

class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sectionRecords = [
            ['id' => 1, 'name' => 'Man', 'status' => 1],
            ['id' => 2, 'name' => 'Woman', 'status' => 1],
            ['id' => 3, 'name' => 'Kids', 'status' => 1],
        ];
        Section::insert($sectionRecords);
    }
}
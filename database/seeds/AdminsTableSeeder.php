<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->delete();
        $adminRecords = [
            [
                'id' => '1',
                'name' => 'admin',
                'type' => 'admin',
                'mobile' => '01700000000',
                'email' => 'admin@gmail.com',
                'password' => '$2y$10$M6Aox0EplCSZJlXIRf30TOKsCtPEZ/vCCEsDror2wTVWPqNXB6Bw6',
                'image' => '',
                'status' => 1

            ],
            [
                'id' => '2',
                'name' => 'Noman',
                'type' => 'subadmin',
                'mobile' => '01700000000',
                'email' => 'noman@gmail.com',
                'password' => '$2y$10$M6Aox0EplCSZJlXIRf30TOKsCtPEZ/vCCEsDror2wTVWPqNXB6Bw6',
                'image' => '',
                'status' => 1

            ],
            [
                'id' => '3',
                'name' => 'tanjila',
                'type' => 'subadmin',
                'mobile' => '01700000000',
                'email' => 'tanjila@gmail.com',
                'password' => '$2y$10$M6Aox0EplCSZJlXIRf30TOKsCtPEZ/vCCEsDror2wTVWPqNXB6Bw6',
                'image' => '',
                'status' => 1

            ],
            [
                'id' => '4',
                'name' => 'Mong',
                'type' => 'admin',
                'mobile' => '01700000000',
                'email' => 'mong@gmail.com',
                'password' => '$2y$10$M6Aox0EplCSZJlXIRf30TOKsCtPEZ/vCCEsDror2wTVWPqNXB6Bw6',
                'image' => '',
                'status' => 1

            ]
        ];
        DB::table('admins')->insert($adminRecords);
        // foreach ($adminRecords as $key => $record) {
        //     \App\Admin::create($record);
        // }
    }
}
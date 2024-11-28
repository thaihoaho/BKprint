<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SPSOSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('spsos')->insert([
            [ 'Name' => 'Admin 1', 'Role' => 'Administrator', 'Permissions' => 'Full Access'],
            [ 'Name' => 'Operator 1', 'Role' => 'Operator', 'Permissions' => 'Manage Printers'],
            [ 'Name' => 'Technician 1', 'Role' => 'Technician', 'Permissions' => 'Repair Printers'],
        ]);
    }
}

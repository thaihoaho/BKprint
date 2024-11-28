<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')->insert([
            [ 'Name' => 'Nguyen Van A', 'Email' => 'nguyenvana@example.com', 'PageBalance' => 120],
            [ 'Name' => 'Le Thi B', 'Email' => 'lethib@example.com', 'PageBalance' => 80],
            [ 'Name' => 'Tran Van C', 'Email' => 'tranvanc@example.com', 'PageBalance' => 50],
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('documents')->insert([
            [
                'DocumentID' => 1, 
                'StudentID' => 1001, 
                'FileName' => 'Assignment1.pdf', 
                'FileType' => 'PDF', 
                'UploadedDate' => '2024-11-20 09:00:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'DocumentID' => 2, 
                'StudentID' => 1002, 
                'FileName' => 'ProjectReport.docx', 
                'FileType' => 'DOCX', 
                'UploadedDate' => '2024-11-21 14:30:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'DocumentID' => 3, 
                'StudentID' => 1003, 
                'FileName' => 'LectureNotes.pptx', 
                'FileType' => 'PPTX', 
                'UploadedDate' => '2024-11-22 16:45:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

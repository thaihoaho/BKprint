<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //
    protected $primaryKey = 'StudentID';
    protected $fillable = ['Amount', 'PaymentMethod'];
    public function student()
    {
        return $this->belongsTo(Student::class, 'StudentID', 'StudentID');
    }
}

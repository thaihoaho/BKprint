<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $primaryKey = 'PaymentID';
    protected $fillable = ['Name', 'Email','password','PageBalance'];
    public function payments()
    {
        return $this->hasMany(Payment::class, 'StudentID', 'StudentID');
    }
}

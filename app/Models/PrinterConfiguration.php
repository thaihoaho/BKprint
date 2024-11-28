<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrinterConfiguration extends Model
{
    use HasFactory;

    protected $primaryKey = 'ConfigID ';
    protected $fillable = [
        'SPSOID',
        'PrinterID',
        'DefaultPages',
        'AllowedFileTypes',
        'ConfigDate',
        'ConfigPrinterStatus',
    ];
}

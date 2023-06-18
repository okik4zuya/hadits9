<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hadits extends Model
{
    use HasFactory;

    protected $table = 'hadits';

    protected $fillable = [
        'kitab',
        'number',
        'arabic',
        'terjemah'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quran extends Model
{
    use HasFactory;

    protected $table = 'quran';

    protected $fillable = [
        'surat',
        'no_surat',
        'ayat',
        'arabic',
        'translate',
        'terjemah',
        'tafsir'
    ];
}

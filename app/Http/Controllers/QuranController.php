<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Quran;
use Illuminate\Http\Request;

class QuranController extends Controller
{
    public function single(Request $request, $surat, $ayat)
    {
        $ayat_content = Quran::where('no_surat', $surat)->where('ayat', $ayat)->first();
        return inertia('Quran/Single', [
            'ayat_content' => $ayat_content
        ]);
    }
}

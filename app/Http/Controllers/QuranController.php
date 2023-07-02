<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Quran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuranController extends Controller
{
    public function index(Request $request)
    {
        
        if (!request()->q) {
            //dd('fill search term!');
            $results = [];
        } else {
            if (preg_match('/[اأإء-ي]/ui', $request->q)) {
                $results = DB::select(
                    DB::raw(
                        "
                SELECT surat,no_surat,ayat FROM quran
                WHERE
                REPLACE(
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE(
                                    REPLACE(
                                        REPLACE(
                                            REPLACE(
                                                REPLACE(arabic, '-', ''), 'َ', ''
                                            ), 'ِ', ''
                                        ), 'ُ', ''
                                    ), 'ً', ''
                                ), 'ٍ',''
                            ), 'ٌ', ''
                        ), 'ّ',''
                    ), 'ْ', ''
                )
                like '%" . request()->q . "%' 
                ;
                "
                    )
                );
            } else {
                $results = DB::select(
                    DB::raw("
                SELECT surat,no_surat,ayat FROM quran
                WHERE
                terjemah
                like '%" . request()->q . "%' 
                ;
                
                ")

                );
            }
            //dd($results);
        }
        return inertia('Quran/Index', [
            'results' => $results
        ]);
    }
    public function single(Request $request, $surat, $ayat)
    {
        $ayat_content = Quran::where('no_surat', $surat)->where('ayat', $ayat)->first();
        return inertia('Quran/Single', [
            'ayat_content' => $ayat_content
        ]);
    }
}

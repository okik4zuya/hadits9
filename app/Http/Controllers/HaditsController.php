<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Hadits;
use I18N_Arabic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HaditsController extends Controller
{
    public function single(Request $request, $kitab, $number)
    {
        $hadits = Hadits::where('kitab', $kitab)->where('number', $number)->first();
        return inertia('Hadits/Single', [
            'hadits' => $hadits
        ]);
    }

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
                SELECT kitab,number FROM hadits
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
                SELECT kitab,number FROM hadits
                WHERE
                terjemah
                like '%" . request()->q . "%' 
                ;
                
                ")

                );
            }
            //dd($results);
        }
        return inertia('Hadits/Index', [
            'results' => $results
        ]);
    }
}

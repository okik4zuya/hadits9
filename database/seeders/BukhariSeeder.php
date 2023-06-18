<?php

namespace Database\Seeders;

use App\Models\Hadits;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class BukhariSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = Storage::disk('local')->get('/json/bukhari.json');
        $bukhari = json_decode($json, true);

        foreach($bukhari as $hadits){
            Hadits::query()->updateOrCreate([
                'kitab' => $hadits['kitab'],
                'number' => $hadits['number'],
                'arabic' => $hadits['arabic'],
                'terjemah' => $hadits['terjemah'],
            ]);

        }
    }
}

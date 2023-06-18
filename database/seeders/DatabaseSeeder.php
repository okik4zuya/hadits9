<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Hadits;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    public function seed_hadits($kitab)
    {
        $json = Storage::disk('local')->get('/json/' . $kitab . '.json');
        $data = json_decode($json, true);

        foreach ($data as $hadits) {
            Hadits::query()->updateOrCreate([
                'kitab' => $hadits['kitab'],
                'number' => $hadits['number'],
                'arabic' => $hadits['arabic'],
                'terjemah' => $hadits['terjemah'],
            ]);
            echo $kitab . ' ' . $hadits['number'] . " added\n";
        }
    }
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //$this->seed_hadits('bukhari');
        //$this->seed_hadits('muslim');
        //$this->seed_hadits('malik');
        //$this->seed_hadits('tirmidzi');


        // $this->seed_hadits('abudaud');
        // $this->seed_hadits('ibnumajah');
        // $this->seed_hadits('nasai');
        // $this->seed_hadits('darimi');

        //belum
        $this->seed_hadits('ahmad');
    }
}

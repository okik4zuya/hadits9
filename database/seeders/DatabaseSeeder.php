<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Hadits;
use App\Models\Quran;
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
    public function seed_quran($path)
    {
        $json = Storage::disk('local')->get($path);
       $data = json_decode($json, true);


        foreach ($data as $item) {
            Quran::query()->updateOrCreate([
                'no_surat' => $item['no_surat'],
                'ayat' => $item['ayat'],
                'arabic' => $item['arabic'],
                'translate' => $item['translate'],
                'terjemah' => $item['terjemah'],
            ]);
            echo "surat ". $item['no_surat'] . " ayat " . $item['ayat'] . " added\n";
        }
    }

    public function seed_tafsir($path){
        $json = Storage::disk('local')->get($path);
       $data = json_decode($json, true);


        foreach ($data as $item) {
            Quran::query()->updateOrCreate([
                'no_surat' => $item['no_surat'],
                'ayat' => $item['ayat']
            ],[
                'surat' => $item['surat'],
                'tafsir' => json_encode($item['tafsir'])
            ]);
            echo "surat ". $item['no_surat'] . " ayat " . $item['ayat'] . " added\n";
        }

    }
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //seed quran
        //$this->seed_quran('16an-nahl');

        // $files = Storage::disk('local')->files('/json/quran');
        // foreach($files as $path){
        //     $this->seed_quran($path);
        // }
        //print_r($files);

        $files = Storage::disk('local')->files('/json/tafsir');
        foreach($files as $path){
            $this->seed_tafsir($path);
        }



        //seed hadits
        //$this->seed_hadits('bukhari');
        //$this->seed_hadits('muslim');
        //$this->seed_hadits('malik');
        //$this->seed_hadits('tirmidzi');
        // $this->seed_hadits('abudaud');
        // $this->seed_hadits('ibnumajah');
        // $this->seed_hadits('nasai');
        // $this->seed_hadits('darimi');
        //$this->seed_hadits('ahmad');
    }
}

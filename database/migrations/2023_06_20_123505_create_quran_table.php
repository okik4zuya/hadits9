<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quran', function (Blueprint $table) {
            $table->id();
            $table->string('surat')->nullable();
            $table->integer('no_surat');
            $table->integer('ayat');
            $table->longText('arabic');
            $table->longText('translate');
            $table->longText('terjemah');
            $table->json('tafsir')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quran');
    }
};

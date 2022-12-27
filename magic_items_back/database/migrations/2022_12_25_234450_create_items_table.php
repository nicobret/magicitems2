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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->jsonb('data')->nullable(
                // 'data' is a JSONB column, which means it can store JSON data.
                // The JSON data is stored as a string, but it can be queried
                // and manipulated as if it were a JSON object.
                // 
                // The JSONB data type is new in PostgreSQL 9.4.
                // 
                // https://www.postgresql.org/docs/9.4/datatype-json.html
            );
            $table->foreignId('user_id')->nullable();
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
        Schema::dropIfExists('items');
    }
};

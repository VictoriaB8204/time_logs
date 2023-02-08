<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ActionTypesSeeder::class);
        $this->call(SoftwareSeeder::class);
        $this->call(RolesSeeder::class);
    }
}

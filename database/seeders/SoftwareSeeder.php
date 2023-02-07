<?php

namespace Database\Seeders;

use App\Models\Software;
use Illuminate\Database\Seeder;

class SoftwareSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $software = [
            'CRM',
            '1С',
            'Личный кабинет',
            'BPM',
            'MAS',
            'SSO',
        ];
        foreach ($software as $software_name)
            Software::updateOrCreate(['name' => $software_name], ['name' => $software_name]);
    }
}

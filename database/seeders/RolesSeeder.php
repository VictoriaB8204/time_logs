<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            'admin',
            'payer',
            'employee',
        ];

        foreach ($roles as $role)
            Role::updateOrCreate(['name' => $role], ['name' => $role]);

        $admin = Role::where('name', 'admin')->first();
        $employee = Role::where('name', 'employee')->first();
        $users = User::all();
        foreach ($users as $user){
            if($user->email == 'barishnikova.va@yandex.ru')
                $user->roles()->attach($admin);
            $user->roles()->attach($employee);
        }
    }
}

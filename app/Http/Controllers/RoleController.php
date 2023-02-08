<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param User $user
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index(User $user)
    {
        return view('users.roles.index', [
           'roles' => Role::all(),
           'user' => $user,
        ]);
    }

    public function update(Request $request, User $user){
        $user->roles()->sync($request->input('roles'));
        $user->save();
    }
}

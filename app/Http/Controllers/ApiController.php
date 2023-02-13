<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getCurrentWeekTimelogs($email){
        $user = User::where('email', $email)->first();
//        return $user->id;
        return $user->time_logs_for_payment->toJson();
    }
}

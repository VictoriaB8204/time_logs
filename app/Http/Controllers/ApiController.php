<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;

class ApiController extends Controller
{
    public function getCurrentWeekTimelogs($email){
        $user = User::where('email', $email)->first();
//        return $user->time_logs_for_payment
//            ->pluck('id')
//            ->toJson();
        return $user->time_logs->first()->toJson();
    }
}

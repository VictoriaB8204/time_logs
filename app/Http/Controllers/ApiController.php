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
        return $user->time_logs()
            ->with('creator', 'action_type', 'software')
//            ->where('start_time_date', '<', Carbon::now()->startOfWeek())
//            ->where('is_payed', false)
            ->get()
            ->toJson();
    }
}

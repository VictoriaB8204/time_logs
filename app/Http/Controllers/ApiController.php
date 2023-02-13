<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;

class ApiController extends Controller
{
    public function getCurrentWeekTimelogs($email){
        $user = User::where('email', $email)->first();

        return $user->time_logs()
            ->with('creator', 'action_type', 'software')
            ->where('start_time_date', '>', Carbon::now()->startOfWeek())
            ->orderBy('start_time_date')
            ->get()
            ->toJson();
    }
}

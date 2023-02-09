<?php

namespace App\Http\Controllers;

use App\Models\TimeLog;
use App\Models\User;
use App\Services\ExcelServices\TimeLogsExcelService;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(){
        return view('payments.index', [
            'timeLogs' => TimeLog::where('start_time_date', '>', Carbon::now()->startOfWeek())
                ->orderBy('creator_id')
                ->orderBy('start_time_date')
                ->get(),
            'users' => User::all()->whereNotNull('time_logs_for_payment'),
        ]);
    }

    public function getExcel(){
        $timeLogs = TimeLog::where('start_time_date', '>', Carbon::now()->startOfWeek())
            ->orderBy('creator_id')
            ->orderBy('start_time_date')
            ->get();
        $excelService = new TimeLogsExcelService();
        return $excelService->makeDocument($timeLogs);
    }

    public function payForTheTime(User $user){
        $user->time_logs_for_payment->each(function ($timeLog){
            $timeLog->is_payed = true;
            $timeLog->save();
        });

        return view('payments.index.users_table', [
            'users' => User::all()->whereNotNull('time_logs_for_payment'),
        ]);
    }
}

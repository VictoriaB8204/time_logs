<?php

namespace App\Http\Controllers;

use App\Models\TimeLog;
use App\Models\User;
use App\Services\DocumentServices\DocumentService;
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
        return TimeLogsExcelService::getInstance()->makeDocument($timeLogs);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function generateInvoice(Request $request){
        $generator = DocumentService::getInstance();
        $filePath = $generator->generateInvoice($request);

        return response()->json([
            'file' => base64_encode(file_get_contents($filePath)),
            'filename' => $generator->generatedFileName,
            'mime' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function generateAct(Request $request){
        $generator = DocumentService::getInstance();
        $filePath = $generator->generateAct($request);

        return response()->json([
            'file' => base64_encode(file_get_contents($filePath)),
            'filename' => $generator->generatedFileName,
            'mime' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]);
    }
}

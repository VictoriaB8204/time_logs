<?php

namespace App\Services\TimeLogsServices;

use App\Models\TimeLog;
use App\Services\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class TimeLogService extends Service
{
    public function getCurrentTimeLogs($sortOrder = 'desc')
    {
        return TimeLog::where('creator_id', Auth::user()->id)
            ->where('start_time_date', '>=', DateIntervalService::getInstance()->getDateFrom())
            ->where('start_time_date', '<=', DateIntervalService::getInstance()->getDateTo())
            ->orderBy('start_time_date', $sortOrder)
            ->get();
    }

    public function store(Request $request){
        $previousTimeLog = TimeLog::where('creator_id', Auth::user()->id)->get()->last();

        if($previousTimeLog)
            $timelog = $previousTimeLog->replicate();
        else
            $timelog = TimeLog::create([
                'creator_id' => Auth::user()->id,
            ]);

        $timelog = $timelog->fill($request->all());
        $timelog->rate = Auth::user()->current_rate;

        $timelog->save();
    }

    public function summarize(Request $request){
        $timeLogs = TimeLog::whereIn('id', $request->input('id_list'))->orderBy('start_time_date')->get();
        $firstTimeLog = $timeLogs->shift();

        while ($timeLogs->count() > 0){
            $nextTimeLog = $timeLogs->shift();
            $firstTimeLog->end_time_date = Carbon::make($firstTimeLog->end_time_date)
                ->addMinutes($nextTimeLog->time_spent_in_minutes);
            $firstTimeLog->action_description .= '. ' . $nextTimeLog->action_description;
            $nextTimeLog->delete();
        }

        $firstTimeLog->save();
    }

}

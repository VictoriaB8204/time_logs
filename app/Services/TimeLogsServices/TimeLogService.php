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
    private function getCurrentLogsDateInterval(): array
    {
        return [
            'from' => Carbon::
                parse(
                    session('current_logs_date_from', Carbon::now()->startOfWeek())
                )
                ->startOfDay(),

            'to' => Carbon::
                parse(
                    session('current_logs_date_to', Carbon::now()->endOfWeek())
                )
                ->endOfDay()
        ];
    }

    public function refreshCurrentLogsDateInterval(): array
    {
        $dateInterval = $this->getCurrentLogsDateInterval();

        if(Carbon::now()->greaterThan($dateInterval['to'])){
            session(['current_logs_date_from' => $dateInterval['to']->addDay()]);
            session(['current_logs_date_to' => Carbon::now()->endOfWeek()]);
        }

        return $this->getCurrentLogsDateInterval();
    }

    public function getCurrentTimeLogs()
    {
        $dateInterval = $this->getCurrentLogsDateInterval();

        return TimeLog::where('creator_id', Auth::user()->id)
            ->where('start_time_date', '>=', $dateInterval['from'])
            ->where('start_time_date', '<=', $dateInterval['to'])
            ->orderBy('start_time_date', 'desc')
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

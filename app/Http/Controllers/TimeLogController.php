<?php

namespace App\Http\Controllers;

use App\Models\ActionType;
use App\Models\Software;
use App\Models\TimeLog;
use App\Models\User;
use App\Services\ExcelServices\TimeLogsExcelService;
use App\Services\TimeLogsServices\TimeLogService;
use Carbon\Carbon;
use Cassandra\Time;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class TimeLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $dateInterval = TimeLogService::getInstance()->refreshCurrentLogsDateInterval();

        return view('time_logs.index',[
            'timeLogs' => TimeLogService::getInstance()->getCurrentTimeLogs(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
            'currentLogsDateFrom' => $dateInterval['from'],
            'currentLogsDateTo' => $dateInterval['to'],
        ]);
    }

    public function archive(){
        return view('time_logs.archive', [
            'timeLogs' => TimeLog::where('creator_id', Auth::user()->id)->orderBy('start_time_date', 'desc')->paginate(50)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('time_logs.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function store(Request $request)
    {
        TimeLogService::getInstance()->store($request);
        return $this->index();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function update(Request $request, $id)
    {
        TimeLog::where('id', $id)->update($request->all());

        return view('time_logs.table', [
            'timeLogs' => TimeLogService::getInstance()->getCurrentTimeLogs(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }

    public function summarize(Request $request)
    {
        TimeLogService::getInstance()->summarize($request);

        return view('time_logs.table', [
            'timeLogs' => TimeLogService::getInstance()->getCurrentTimeLogs(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function destroy($id)
    {
        $timeLog = TimeLog::find($id);
        $timeLog->delete();

        return view('time_logs.table', [
            'timeLogs' => TimeLogService::getInstance()->getCurrentTimeLogs(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }

    public function getExcel(){
        $timeLogs = TimeLogService::getInstance()->getCurrentTimeLogs();
        return TimeLogsExcelService::getInstance()->makeDocument($timeLogs);
    }

    public function getArchiveExcel(){
        $timeLogs = TimeLog::where('creator_id', Auth::user()->id)->orderBy('start_time_date')->get();
        return TimeLogsExcelService::getInstance()->makeDocument($timeLogs);
    }

    public function updateCurrentLogsDates(Request $request){
        $request->session()->put($request->all());

        return view('time_logs.table', [
            'timeLogs' => TimeLogService::getInstance()->getCurrentTimeLogs(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\ActionType;
use App\Models\Software;
use App\Models\TimeLog;
use App\Services\ExcelServices\TimeLogsExcelService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TimeLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('time_logs.index',[
            'timeLogs' => TimeLog::where('creator_id', Auth::user()->id)
                ->where('start_time_date', '>', Carbon::now()->startOfWeek())
                ->orderBy('start_time_date', 'desc')
                ->get(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }

    public function archive(){
        return view('time_logs.archive', [
            'timeLogs' => TimeLog::where('creator_id', Auth::user()->id)->orderBy('start_time_date')->get()
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
        $previousTimeLog = TimeLog::where('creator_id', Auth::user()->id)->get()->last();

        $timelog = TimeLog::create($request->all());
        $timelog->creator()->associate(Auth::user()->id);
        $timelog->rate = Auth::user()->current_rate;

        if($previousTimeLog && $previousTimeLog->action_type)
            $timelog->action_type()->associate($previousTimeLog->action_type->id);

        if($previousTimeLog && $previousTimeLog->software)
            $timelog->software()->associate($previousTimeLog->software->id);

        $timelog->save();
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
        $timeLog = TimeLog::find($id);
        $timeLog->fill($request->all());
        $timeLog->save();

        return view('time_logs.table', [
            'timeLogs' => TimeLog::where('creator_id', Auth::user()->id)
                ->where('start_time_date', '>', Carbon::now()->startOfWeek())
                ->orderBy('start_time_date', 'desc')
                ->get(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }

    public function summarize(Request $request)
    {
        $timeLogs = TimeLog::whereIn('id', $request->input('id_list'))->orderBy('start_time_date')->get();
        $firstTimeLog = $timeLogs->shift();

        while ($timeLogs->count() > 0){
            $nextTimeLog = $timeLogs->shift();
            $firstTimeLog->end_time_date = Carbon::make($firstTimeLog->end_time_date)->addRealHours($nextTimeLog->time_spent);
            $firstTimeLog->action_description .= '. ' . $nextTimeLog->action_description;
            $nextTimeLog->delete();
        }

        $firstTimeLog->save();

        return view('time_logs.table', [
            'timeLogs' => TimeLog::where('creator_id', Auth::user()->id)
                ->where('start_time_date', '>', Carbon::now()->startOfWeek())
                ->orderBy('start_time_date', 'desc')
                ->get(),
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
            'timeLogs' => TimeLog::where('creator_id', Auth::user()->id)
                ->where('start_time_date', '>', Carbon::now()->startOfWeek())
                ->orderBy('start_time_date', 'desc')
                ->get(),
            'actionTypes' => ActionType::orderBy('name')->get(),
            'allSoftware' => Software::orderBy('name')->get(),
        ]);
    }

    public function getExcel(){
        $timeLogs = TimeLog::where('creator_id', Auth::user()->id)
            ->where('start_time_date', '>', Carbon::now()->startOfWeek())
            ->orderBy('start_time_date', 'desc')
            ->get();
        $excelService = new TimeLogsExcelService();
        return $excelService->makeDocument($timeLogs);
    }
}

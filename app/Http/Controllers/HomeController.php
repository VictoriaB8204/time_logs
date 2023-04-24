<?php

namespace App\Http\Controllers;

use App\Models\TimeLog;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function index()
    {
        if(Auth::user()->hasRole('employee'))
            return redirect()->route('time_logs.index');

        if(Auth::user()->hasRole('payer'))
            return redirect()->route('payments.index');

        return redirect()->route('time_logs.index');
    }
}

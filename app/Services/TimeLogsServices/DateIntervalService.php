<?php

namespace App\Services\TimeLogsServices;

use App\Services\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class DateIntervalService extends Service
{
    private $dateFrom = null;
    private $dateTo = null;
    // Геттер для dateFrom
    public function getDateFrom()
    {
        if(!$this->dateFrom){
            if (Cookie::has('current_logs_date_from')) {
                $this->dateFrom = Carbon::parse(Cookie::get('current_logs_date_from'));
            } else {
                $this->setDateFrom(Carbon::now()->startOfWeek());
            }
        }

        return $this->dateFrom->startOfDay();
    }

    // Геттер для dateTo
    public function getDateTo()
    {
        if(!$this->dateTo){
            if (Cookie::has('current_logs_date_to')) {
                $this->dateTo = Carbon::parse(Cookie::get('current_logs_date_to'));
            } else {
                $this->setDateTo(
                    Carbon::now()->endOfWeek()
                );
            }
        }

        return $this->dateTo->endOfDay();
    }

    // Сеттер для dateFrom
    public function setDateFrom($value)
    {
        $this->dateFrom = $value instanceof Carbon ? $value : Carbon::parse($value);
        Cookie::queue('current_logs_date_from', $this->dateFrom->format('Y-m-d'), 60 * 24 * 14);
    }

    // Сеттер для dateTo
    public function setDateTo($value)
    {
        $this->dateTo = $value instanceof Carbon ? $value : Carbon::parse($value);
        Cookie::queue('current_logs_date_to', $this->dateTo->format('Y-m-d'), 60 * 24 * 14);
    }

    // Остальные методы класса
    public function refreshCurrentLogsDateInterval()
    {
        $this->dateTo = $this->getDateTo();

        if (Carbon::now()->greaterThan($this->dateTo)) {
            $dateFrom = $this->getDateTo()->addDay();
            $newDateTo = Carbon::now()->endOfWeek();

            $this->setDateFrom($dateFrom);
            $this->setDateTo($newDateTo);
        }
    }

    public function setFromRequest(Request $request)
    {
        if ($request->has('current_logs_date_from')) {
            $this->setDateFrom($request->input('current_logs_date_from'));
        }

        if ($request->has('current_logs_date_to')) {
            $this->setDateTo($request->input('current_logs_date_to'));
        }
    }
}
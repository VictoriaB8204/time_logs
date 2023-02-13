<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeLog extends Model
{
    public $timestamps = false;

    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'start_time_date' => 'datetime:d.m.Y H:i',
        'end_time_date' => 'datetime:d.m.Y H:i',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function action_type()
    {
        return $this->belongsTo(ActionType::class);
    }

    public function software()
    {
        return $this->belongsTo(Software::class);
    }

    public function getTimeSpentAttribute(){
        $start = Carbon::make($this->start_time_date);
        $end = Carbon::make($this->end_time_date);

        if(!$end)
            return null;

        return round($end->floatDiffInRealHours($start), 2);
    }

    public function getCostAttribute(){
        return round($this->rate * $this->time_spent, 2);
    }
}

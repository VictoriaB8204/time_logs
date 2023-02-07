<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Software extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = ['id'];

    public function time_logs()
    {
        return $this->hasMany(TimeLog::class);
    }
}

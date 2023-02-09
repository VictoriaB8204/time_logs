<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'current_rate',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function boot() {
        parent::boot();

        static::deleting(function($user) {
            $user->time_logs()->delete();
            $user->roles()->detach();
        });
    }

    public function time_logs()
    {
        return $this->hasMany(TimeLog::class, 'creator_id', 'id');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole($roleName){
        return (bool) $this->roles
            ->where('name', $roleName)
            ->count() > 0;
    }

    public function hasAccess($roleName){
        return (bool) $this->roles
            ->whereIn('name', ['admin', $roleName])
            ->count() > 0;
    }

    public function getTimeLogsForPaymentAttribute(){
        return $this->time_logs()
            ->where('start_time_date', '<', Carbon::now()->startOfWeek())
            ->where('is_payed', false)
            ->get();
    }
}

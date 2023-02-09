@extends('layouts.app')

@section('content')
    <h2>Archive</h2>

    <div class="table-responsive">
        <table class="table table-striped table-sticky-header">
            <thead>
            <tr>
                <th scope="col" class="w-12-em">Start time</th>
                <th scope="col" class="w-12-em">End time</th>
                <th scope="col" class="w-0">Action type</th>
                <th scope="col" class="w-0">Software</th>
                <th scope="col">Actions</th>
                <th scope="col" class="w-0">Time spent</th>
                <th scope="col" class="w-0">Cost</th>
                <th scope="col" class="w-0">Rate</th>
            </tr>
            </thead>
            <tbody>
            @foreach($timeLogs as $timeLog)
                <tr class="time_log_form {{ $timeLog->is_payed ? 'table-success' : ''}}"
                >
                    <td>{{ $timeLog->start_time_date ? $timeLog->start_time_date : '' }}</td>
                    <td>{{ $timeLog->end_time_date ? $timeLog->end_time_date : '' }}</td>
                    <td>{{ $timeLog->action_type ? $timeLog->action_type->name : '' }}</td>
                    <td>{{ $timeLog->software ? $timeLog->software->name : '' }}</td>
                    <td>{{ $timeLog->action_description }}</td>
                    <td>{{ $timeLog->time_spent }}</td>
                    <td>{{ $timeLog->cost }}</td>
                    <td>{{ $timeLog->rate }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection

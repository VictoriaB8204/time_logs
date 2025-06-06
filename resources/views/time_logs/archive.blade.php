@extends('layouts.app')

@section('content')
    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap bg-light sticky-top">
        <button class="btn p-0 dropdown-toggle text-start"
                type="button" data-bs-toggle="collapse" data-bs-target="#archiveTable"
                aria-expanded="true" aria-controls="archiveTable"
        >
            <h3 class="d-inline-block">Archive</h3>
        </button>
        <div>
            {{ $timeLogs->links('vendor.pagination.bootstrap-4') }}
        </div>
        <div>
            <button class="btn btn-primary" id="get_archive_excel_button">Get Excel</button>
        </div>
    </div>

    <div class="mb-5 collapse show" id="archiveTable">
        <table class="table table-striped table-sticky-header">
            <thead>
            <tr>
                <th scope="col" class="top-3-em w-12-em">Start time</th>
                <th scope="col" class="top-3-em w-12-em">End time</th>
                <th scope="col" class="top-3-em w-0">Action type</th>
                <th scope="col" class="top-3-em w-0">Software</th>
                <th scope="col" class="top-3-em">Actions</th>
                <th scope="col" class="top-3-em w-8-em">Time spent</th>
                <th scope="col" class="top-3-em w-0">Cost</th>
                <th scope="col" class="top-3-em w-0">Rate</th>
            </tr>
            </thead>
            <tbody>
            @foreach($timeLogs as $timeLog)
                <tr class="time_log_form {{ $timeLog->is_payed ? 'table-success' : ''}}"
                >
                    <td>{{ $timeLog->start_time_date ? $timeLog->start_time_date->format('d.m.Y H:i') : '' }}</td>
                    <td>{{ $timeLog->end_time_date ? $timeLog->end_time_date->format('d.m.Y H:i') : '' }}</td>
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

@section('scripts')
    <script src="{{ mix('public/js/archive/index.js') }}" defer></script>
@endsection

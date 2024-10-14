@extends('layouts.app')

@section('content')
    <div id="page_content">
        @include('time_logs.create')

        <div class="d-flex align-items-baseline">
            <h2 class="me-5">Current logs</h2>
            <div class="form-group d-flex align-items-center me-3">
                <label class="me-3" for="currentLogsDateFrom">from</label>
                <input type="date" class="form-control session-date"
                       id="currentLogsDateFrom"
                       name="current_logs_date_from"
                       value="{{ $currentLogsDateFrom->format('Y-m-d') }}"
                >
            </div>
            <div class="form-group d-flex align-items-center me-3">
                <label class="me-3" for="currentLogsDateTo">to</label>
                <input type="date" class="form-control session-date"
                       id="currentLogsDateTo"
                       name="current_logs_date_to"
                       value="{{ $currentLogsDateTo->format('Y-m-d') }}"
                >
            </div>
        </div>
        @include('time_logs.table')
    </div>
@endsection

@section('scripts')
    <script src="{{ mix('/js/time_logs/index.js') }}" defer></script>
@endsection


<div class="d-flex justify-content-between align-items-center mb-3 flex-wrap">
    <button class="btn p-0 dropdown-toggle text-start flex-grow-1"
            type="button" data-bs-toggle="collapse" data-bs-target="#currentWeekTimeLogTable"
            aria-expanded="true" aria-controls="currentWeekTimeLogTable"
    >
        <h3 class="d-inline-block">Current week detalization</h3>
    </button>
    <div>
        <button class="btn btn-primary" id="get_payment_excel_button">Get Excel</button>
    </div>
</div>

<div class="table-responsive mb-5 collapse show" id="currentWeekTimeLogTable">
    <table class="table table-striped table-sticky-header">
        <thead>
        <tr>
            <th scope="col" class="w-12-em">Start time</th>
            <th scope="col" class="w-12-em">End time</th>
            <th scope="col" class="w-0">Action type</th>
            <th scope="col" class="w-0">Software</th>
            <th scope="col">Actions</th>
            <th scope="col">User</th>
            <th scope="col" class="w-8-em">Time spent</th>
        </tr>
        </thead>
        <tbody>
        @foreach($timeLogs as $timeLog)
            <tr class="time_log_form">
                <td>{{ $timeLog->start_time_date ? $timeLog->start_time_date : '' }}</td>
                <td>{{ $timeLog->end_time_date ? $timeLog->end_time_date : '' }}</td>
                <td>{{ $timeLog->action_type ? $timeLog->action_type->name : '' }}</td>
                <td>{{ $timeLog->software ? $timeLog->software->name : '' }}</td>
                <td>{{ $timeLog->action_description }}</td>
                <td>{{ $timeLog->creator->name }}</td>
                <td>{{ $timeLog->time_spent }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>

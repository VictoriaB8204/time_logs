<div id="time_logs_table" class="table-responsive">
    <table class="table table-striped table-sticky-header">
        <thead>
        <tr>
            <th scope="col" class="w-0"></th>
            <th scope="col" class="w-14-em">Start time</th>
            <th scope="col" class="w-14-em">End time</th>
            <th scope="col" class="w-12-em">Action type</th>
            <th scope="col" class="w-6-em">Software</th>
            <th scope="col">Actions</th>
            <th scope="col" class="w-0">Time spent</th>
            <th scope="col" class="w-0">Cost</th>
            <th scope="col" class="w-0">
                <button class="btn btn-outline-secondary btn-sm border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" id="get_excel_button">Get Excel</button></li>
                    <li><button class="dropdown-item" id="summarize_button">Summarize</button></li>
                </ul>
            </th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>{{ $timeLogs->sum('time_spent') }}</td>
                <td>{{ $timeLogs->sum('cost') }}</td>
                <td></td>
            </tr>
        @foreach($timeLogs as $timeLog)
            @include('time_logs.table_row')
        @endforeach
        </tbody>
    </table>
</div>

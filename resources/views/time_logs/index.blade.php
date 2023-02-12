<div id="page_content">
{{--    @include('time_logs.create')--}}

    <div class="d-flex">
        <h2 class="me-5">Current week</h2>
        <div>
            <button type="button" id="create_button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add time log">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </div>
    </div>
    @include('time_logs.table')
</div>


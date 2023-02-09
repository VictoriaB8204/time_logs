<div class="mb-5" id="create_form_layout">
    <div class="card">
        <div class="card-header p-0 border-0">
            <button class="w-100 h-100 btn m-0 text-start dropdown-toggle"
                    type="button" data-bs-toggle="collapse" data-bs-target="#createFormCardBody"
                    aria-expanded="true" aria-controls="createFormCardBody"
            >
                {{ __('Make new time log') }}
            </button>
        </div>

        <div class="card-body collapse show" id="createFormCardBody">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

                <div class="d-flex justify-content-center">
                    <button id="start_time_log" class="btn text-success" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        </svg>
                    </button>
                    <button hidden id="end_time_log" class="btn text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="End">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                        </svg>
                    </button>
                </div>

                <form action="#" id="create_form">
                    <div class="d-flex justify-content-center align-items-end flex-wrap">
                        <div class="form-group m-1">
                            <label for="start_time_date">Start time</label>
                            <input type="datetime-local" class="form-control" id="start_time_date" name="start_time_date">
                        </div>
                        <div class="form-group m-1">
                            <label for="end_time_date">End time</label>
                            <input type="datetime-local" class="form-control" id="end_time_date" name="end_time_date">
                        </div>
                        <div class="form-group m-1 flex-grow-1">
                            <label for="action_description">Actions</label>
                            <textarea rows="1" class="form-control" id="action_description" name="action_description"></textarea>
                        </div>
                        <div class="m-1">
                            <button type="button" id="create_button" class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add time log">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
        </div>
    </div>
</div>



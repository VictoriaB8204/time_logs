<tr class="time_log_form">
    <td>
        <input type="text" hidden class="time_log_id" value="{{ $timeLog->id }}">
        <input class="form-check-input serialize-disable" type="checkbox">
    </td>
    <td class="p-0">
        <input type="datetime-local" class="form-control w-14-em" id="start_time_date" name="start_time_date"
               value="{{ $timeLog->start_time_date ? $timeLog->start_time_date : '' }}"
        >
    </td>
    <td class="p-0">
        <input type="datetime-local" class="form-control w-14-em" id="end_time_date" name="end_time_date"
               value="{{ $timeLog->end_time_date ? $timeLog->end_time_date : '' }}"
        >
    </td>
    <td class="p-0">
        <select class="form-select" id="action_type_id" name="action_type_id">
            <option {{ !$timeLog->action_type ? 'selected' : '' }}></option>
            @foreach($actionTypes as $actionType)
                <option {{ $timeLog->action_type && $timeLog->action_type->id == $actionType->id ? 'selected' : '' }}
                        value="{{ $actionType->id }}">
                    {{ $actionType->name }}
                </option>
            @endforeach
        </select>
    </td>
    <td class="p-0">
        <select class="form-select" id="software_id" name="software_id">
            <option {{ !$timeLog->software ? 'selected' : '' }}></option>
            @foreach($allSoftware as $software)
                <option {{ $timeLog->software && $timeLog->software->id == $software->id ? 'selected' : '' }}
                        value="{{ $software->id }}">
                    {{ $software->name }}
                </option>
            @endforeach
        </select>
    </td>
    <td class="p-0">
        <textarea rows="1" class="form-control" id="action_description" name="action_description"
        >{{ $timeLog->action_description }}</textarea>
    </td>
    <td>{{ $timeLog->time_spent }}</td>
    <td>{{ $timeLog->cost }}</td>
    <td class="w-0">
        <button class="btn text-danger bg-white p-0 destroy_time_log">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
            </svg>
        </button>
    </td>
</tr>

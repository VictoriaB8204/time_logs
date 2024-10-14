import {handleError} from "../../handle_errors";
import {refresh} from "../../refresh_block";
import {hideFailToast, showSuccessToast} from "../../toasts";

function updateCurrentLogsDate(date){
    $.ajax({
        url: 'time_logs/current_logs/dates/',
        method: 'put',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: date.serialize(),
        error: function(error){
            handleError(error, 'Time log date interval update failed');
        },
        success: function (result) {
            refresh($('#time_logs_table'), $(result));
            hideFailToast();
            showSuccessToast('Time log date interval successfully updated');
        }
    })
}

$(document).on('change', '.session-date', function () {
    updateCurrentLogsDate($(this));
})

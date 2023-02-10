import {serializeTr} from "../../serialize_tr";
import {handleError} from "../../handle_errors";
import {hideFailToast, showSuccessToast} from "../../toasts";
import {refresh} from "../../refresh_block";

$(document).on('change', '.time_log_form input:not(.serialize-disable), .time_log_form textarea:not(.serialize-disable), .time_log_form select:not(.serialize-disable)', function () {
    let tr = $(this).closest('tr.time_log_form');
    $.ajax({
        url: 'time_logs/' + tr.find('.time_log_id').val(),
        method: 'put',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: serializeTr(tr),
        error: function(error){
            handleError(error, 'Time log update failed');
        },
        success: function (result) {
            refresh($('#time_logs_table'), $(result));
            hideFailToast();
            showSuccessToast('Time log successfully updated');
        }
    })
})

import {handleError} from "../../handle_errors";
import {hideFailToast} from "../../toasts";
import {refresh} from "../../refresh_block";

function getSelected(table){
    let data = [];
    table.find('input:checked').each(function () {
        data.push($(this).closest('tr').find('.time_log_id').val());
    });
    return data;
}

$(document).on('click', '#summarize_button', function () {
    console.log(getSelected($('#time_logs_table')));
    $.ajax({
        url: 'time_logs/summarize',
        method: 'post',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            id_list: getSelected($('#time_logs_table'))
        },
        error: function(error){
            handleError(error, 'Time log summarize failed');
        },
        success: function (result) {
            refresh($('#time_logs_table'), $(result));
            hideFailToast();
        }
    })
})

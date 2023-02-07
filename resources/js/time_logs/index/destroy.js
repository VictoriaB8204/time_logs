import {handleError} from "../../handle_errors";

$(document).on('click', '.destroy_time_log', function () {
    if(confirm('Do you really want to delete time log?')){
        $.ajax({
            url: 'time_logs/' + $(this).closest('tr').find('.time_log_id').val(),
            method: 'delete',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            error: function(error){
                handleError(error, 'Time log delete failed');
            },
            success: function (result) {
                $('#time_logs_table').replaceWith($(result));
            }
        })
    }
})

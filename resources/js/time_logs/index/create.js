import {handleError} from "../../handle_errors";
import {refresh} from "../../refresh_block";
import {now} from "../../date";

$(document).on('click', '#create_button', function () {
    $.ajax({
        url: 'time_logs',
        method: 'post',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: [
            {
                'name': 'start_time_date',
                'value': now()
            }
        ],
        error: function(error){
            handleError(error, 'Time log create failed');
        },
        success: function (result) {
            refresh($('#page_content'), $(result));
        }
    })
})

import {handleError} from "../../handle_errors";
import {refresh} from "../../refresh_block";

$(document).on('click', '#create_button', function () {
    $.ajax({
        url: 'time_logs',
        method: 'post',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: $('#create_form').serialize(),
        error: function(error){
            handleError(error, 'Time log create failed');
        },
        success: function (result) {
            refresh($('#page_content'), $(result));
        }
    })
})

import {handleError} from "../../handle_errors";

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
            $('#page_content').replaceWith($(result));
        }
    })
})

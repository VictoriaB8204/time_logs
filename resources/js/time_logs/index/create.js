import {handleError} from "../../handle_errors";
import {refresh} from "../../refresh_block";
import {forget} from "./localStorage";

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
            refresh($('#time_logs_table'), $(result));

            $('#create_form input, #create_form textarea').each(function () {
                forget($(this));
            })
        }
    })
})

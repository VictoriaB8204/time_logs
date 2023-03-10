import {handleError} from "../../../handle_errors";
import {refresh} from "../../../refresh_block";

$(document).on('click', '.show_roles_button', function () {
    $.ajax({
        url: 'users/' + $(this).closest('tr').find('.user_id').val() + '/roles',
        method: 'get',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        error: function(error){
            handleError(error, 'Load user roles failed');
        },
        success: function (result) {
            refresh($('#role_list'), $(result));
        }
    })
})

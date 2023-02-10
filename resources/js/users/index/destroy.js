import {handleError} from "../../handle_errors";
import {refresh} from "../../refresh_block";

$(document).on('click', '.destroy_user', function () {
    if(confirm('Do you really want to delete user?')){
        $.ajax({
            url: 'users/' + $(this).closest('tr').find('.user_id').val(),
            method: 'delete',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            error: function(error){
                handleError(error, 'User delete failed');
            },
            success: function (result) {
                refresh($('#users_table'), $(result));
            }
        })
    }
})

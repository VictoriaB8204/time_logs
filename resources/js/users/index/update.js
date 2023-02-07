import {handleError} from "../../handle_errors";
import {hideFailToast, showSuccessToast} from "../../toasts";
import {serializeTr} from "../../serialize_tr";

$(document).on('change', '.user_form input', function () {
    $.ajax({
        url: 'users/' + $(this).closest('tr.user_form').find('.user_id').val(),
        method: 'put',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: serializeTr($(this).closest('tr.user_form')),
        error: function(error){
            handleError(error, 'User update failed');
        },
        success: function () {
            hideFailToast();
            showSuccessToast('User successfully updated');
        }
    })
})

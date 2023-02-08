import {handleError} from "../../../handle_errors";
import {showSuccessToast} from "../../../toasts";

function serializeRoles(){
    let data = [];
    $('#role_list .user_role:checked').each(function () {
        data.push($(this).val());
    });
    return data;
}

$(document).on('change', '.user_role', function () {
    $.ajax({
        url: 'users/' + $(this).closest('#role_list').find('#user_id').val() + '/roles',
        method: 'post',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            'roles': serializeRoles()
        },
        error: function(error){
            handleError(error, 'Updating user roles failed');
        },
        success: function () {
            showSuccessToast('User roles updated');
        }
    })
})

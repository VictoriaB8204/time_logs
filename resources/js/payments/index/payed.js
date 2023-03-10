import {handleError} from "../../handle_errors";
import {showSuccessToast} from "../../toasts";
import {refresh} from "../../refresh_block";

$(document).on('click', '.payed_button', function () {
    if(confirm('Do you really want to pay for this time?')){
        $.ajax({
            url: 'payments/pay_for_the_time/' + $(this).closest('tr').find('.user_id').val(),
            method: 'post',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            error: function(error){
                handleError(error, 'Paying failed');
            },
            success: function (result) {
                refresh($('#users_table'), $(result));
                showSuccessToast('The time was successfully payed');
            }
        })
    }
})

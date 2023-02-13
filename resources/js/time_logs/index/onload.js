import {resizeTextArea} from "../../resize_textarea";
import {showValue} from "./localStorage";

export function documentOnLoad() {
    resizeTextArea();

    $('#create_form input, #create_form textarea').each(function () {
        showValue($(this));
    })

    if($('#start_time_date').val() && !$('#end_time_date').val()){
        $('#start_time_log').attr('hidden', true);
        $('#end_time_log').removeAttr('hidden');
    }
}

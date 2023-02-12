import {resizeTextArea} from "../../resize_textarea";

export function documentOnLoad() {
    resizeTextArea();

    $('#create_form input, #create_form textarea').each(function () {
        let name = $(this).attr('name');
        let val = localStorage.getItem(name);
        $(this).val(val);
    })

    if($('#start_time_date').val() && !$('#end_time_date').val()){
        $('#start_time_log').attr('hidden', true);
        $('#end_time_log').removeAttr('hidden');
    }
}

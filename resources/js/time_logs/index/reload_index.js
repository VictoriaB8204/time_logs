import {handleError} from "../../handle_errors";

export function reloadIndex(){
    $.ajax({
        url: 'time_logs/',
        method: 'get',
        error: function(error){
            handleError(error, 'Time log reload failed');
        },
        success: function (result) {
            $('#page_content').replaceWith($(result));
        }
    })
}

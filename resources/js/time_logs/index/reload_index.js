import {handleError} from "../../handle_errors";
import {refresh} from "../../refresh_block";

export function reloadIndex(){
    $.ajax({
        url: 'time_logs/',
        method: 'get',
        error: function(error){
            handleError(error, 'Time log reload failed');
        },
        success: function (result) {
            refresh($('#page_content'), $(result));
        }
    })
}

import {handleError} from "../handle_errors";

$(document).on('click', '#get_archive_excel_button', function () {
    $.ajax({
        url: '/time_logs/get_archive_excel',
        method: 'get',
        error: function(error){
            handleError(error, 'Export to Excel failed');
        },
        success: function (path) {
            let link = document.createElement('a');
            link.setAttribute('href', path);
            link.setAttribute('download', '');
            link.click();
        }
    })
})

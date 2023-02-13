import {forget} from "./localStorage";

$(document).on('click', '#clean_create_form', function () {
    if(confirm('Do you really want to clear the creation form?'))
        $('#create_form input, #create_form textarea').each(function () {
            forget($(this));
        })
})

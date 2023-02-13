import {forget} from "./localStorage";

$(document).on('click', '#clean_create_form', function () {
    $('#create_form input, #create_form textarea').each(function () {
        forget($(this));
    })
})

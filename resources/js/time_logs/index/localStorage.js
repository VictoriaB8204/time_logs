$(document).on('change', '#create_form input, #create_form textarea', function () {
    let name = $(this).attr('name');
    let val = $(this).val();
    localStorage.setItem(name, val);
})

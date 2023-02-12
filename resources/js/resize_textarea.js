export function resizeTextArea(){
    $('textarea').each(function(){
        $(this).outerHeight(38).outerHeight(this.scrollHeight);
    })
}

export function resizeTextArea(){
    $('textarea').each(function(){
        console.log(this.scrollHeight);
        $(this).outerHeight(38).outerHeight(this.scrollHeight);
    })
}

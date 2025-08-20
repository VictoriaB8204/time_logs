$(document).on('click', '#generate_invoice', function () {
    console.log($('#billGenerationForm').serialize());
    $.ajax({
        url: '/payments/generate_invoice',
        method: 'post',
        data: $('#billGenerationForm').serialize(),
        success: function(response) {
            downloadFile(response)
        },
        error: function(xhr) {
            alert('Ошибка: ' + xhr.responseText);
        }
    })
})

$(document).on('click', '#generate_act', function () {
    console.log($('#billGenerationForm').serialize());
    $.ajax({
        url: '/payments/generate_act',
        method: 'post',
        data: $('#billGenerationForm').serialize(),
        success: function(response) {
            downloadFile(response)
        },
        error: function(xhr) {
            alert('Ошибка: ' + xhr.responseText);
        }
    })
})

function downloadFile(response){
    if (response.file) {
        // Вариант 1: Скачивание через base64
        const byteCharacters = atob(response.file);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: response.mime});

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = response.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (response.url) {
        // Вариант 2: Скачивание по ссылке
        window.location.href = response.url;
    }
}

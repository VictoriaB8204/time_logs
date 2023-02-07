export function showSuccessToast(text) {
    $('.toastSuccess').find('.toast-body').text(text);
    bootstrap.Toast.getOrCreateInstance($('.toastSuccess')).show();
}

export function showFailToast(text) {
    $('.toastFail').find('.toast-body').text(text);
    bootstrap.Toast.getOrCreateInstance($('.toastFail')).show();
}

export function hideFailToast() {
    bootstrap.Toast.getOrCreateInstance($('.toastFail')).hide();
}

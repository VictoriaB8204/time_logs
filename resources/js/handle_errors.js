import {showFailToast} from "./toasts";

export function handleError(error, infoMessage) {
    console.log(error);
    showFailToast(infoMessage + ' Ошибка ' + error.status + ' ' + error.statusText);
}

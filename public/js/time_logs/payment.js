/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/handle_errors.js":
/*!***************************************!*\
  !*** ./resources/js/handle_errors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleError": () => (/* binding */ handleError)
/* harmony export */ });
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts */ "./resources/js/toasts.js");

function handleError(error, infoMessage) {
  console.log(error);
  (0,_toasts__WEBPACK_IMPORTED_MODULE_0__.showFailToast)(infoMessage + ' Ошибка ' + error.status + ' ' + error.statusText);
}

/***/ }),

/***/ "./resources/js/time_logs/payment/get_payment_excel.js":
/*!*************************************************************!*\
  !*** ./resources/js/time_logs/payment/get_payment_excel.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");

$(document).on('click', '#get_payment_excel_button', function () {
  $.ajax({
    url: '/time_logs/get_payment_excel',
    method: 'get',
    error: function error(_error) {
      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Export to Excel failed');
    },
    success: function success(path) {
      var link = document.createElement('a');
      link.setAttribute('href', path);
      link.setAttribute('download', '');
      link.click();
    }
  });
});

/***/ }),

/***/ "./resources/js/toasts.js":
/*!********************************!*\
  !*** ./resources/js/toasts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideFailToast": () => (/* binding */ hideFailToast),
/* harmony export */   "showFailToast": () => (/* binding */ showFailToast),
/* harmony export */   "showSuccessToast": () => (/* binding */ showSuccessToast)
/* harmony export */ });
function showSuccessToast(text) {
  $('.toastSuccess').find('.toast-body').text(text);
  bootstrap.Toast.getOrCreateInstance($('.toastSuccess')).show();
}
function showFailToast(text) {
  $('.toastFail').find('.toast-body').text(text);
  bootstrap.Toast.getOrCreateInstance($('.toastFail')).show();
}
function hideFailToast() {
  bootstrap.Toast.getOrCreateInstance($('.toastFail')).hide();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./resources/js/time_logs/payment.js ***!
  \*******************************************/
__webpack_require__(/*! ./payment/get_payment_excel */ "./resources/js/time_logs/payment/get_payment_excel.js");
})();

/******/ })()
;
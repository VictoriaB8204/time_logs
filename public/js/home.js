/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/date.js":
/*!******************************!*\
  !*** ./resources/js/date.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now)
/* harmony export */ });
Date.prototype.yyyymmdd = function () {
  var yyyy = this.getFullYear().toString();
  var MM = (this.getMonth() + 1).toString(); // getMonth() is zero-based
  var dd = this.getDate().toString();
  var hh = this.getHours().toString();
  var mm = this.getMinutes().toString();
  return yyyy + "-" + (MM[1] ? MM : "0" + MM[0]) + "-" + (dd[1] ? dd : "0" + dd[0]) + "T" + (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]); // padding
};

function now() {
  var date = new Date();
  return date.yyyymmdd();
}

/***/ }),

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

/***/ "./resources/js/serialize_tr.js":
/*!**************************************!*\
  !*** ./resources/js/serialize_tr.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeTr": () => (/* binding */ serializeTr)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function serializeTr(tr) {
  var data = [];
  tr.find('input, textarea, select').not('.serialize-disable').each(function () {
    data.push.apply(data, _toConsumableArray($(this).serializeArray()));
  });
  return data;
}

/***/ }),

/***/ "./resources/js/time_logs/index.js":
/*!*****************************************!*\
  !*** ./resources/js/time_logs/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_reload_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/reload_index */ "./resources/js/time_logs/index/reload_index.js");

__webpack_require__(/*! ./index/time_buttons */ "./resources/js/time_logs/index/time_buttons.js");
__webpack_require__(/*! ./index/create */ "./resources/js/time_logs/index/create.js");
__webpack_require__(/*! ./index/update */ "./resources/js/time_logs/index/update.js");
__webpack_require__(/*! ./index/destroy */ "./resources/js/time_logs/index/destroy.js");
__webpack_require__(/*! ./index/get_excel */ "./resources/js/time_logs/index/get_excel.js");
__webpack_require__(/*! ./index/summarize */ "./resources/js/time_logs/index/summarize.js");
(0,_index_reload_index__WEBPACK_IMPORTED_MODULE_0__.reloadIndex)();

/***/ }),

/***/ "./resources/js/time_logs/index/create.js":
/*!************************************************!*\
  !*** ./resources/js/time_logs/index/create.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");

$(document).on('click', '#create_button', function () {
  $.ajax({
    url: 'time_logs',
    method: 'post',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: $('#create_form').serialize(),
    error: function error(_error) {
      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Time log create failed');
    },
    success: function success(result) {
      $('#page_content').replaceWith($(result));
    }
  });
});

/***/ }),

/***/ "./resources/js/time_logs/index/destroy.js":
/*!*************************************************!*\
  !*** ./resources/js/time_logs/index/destroy.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");

$(document).on('click', '.destroy_time_log', function () {
  if (confirm('Do you really want to delete time log?')) {
    $.ajax({
      url: 'time_logs/' + $(this).closest('tr').find('.time_log_id').val(),
      method: 'delete',
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      error: function error(_error) {
        (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Time log delete failed');
      },
      success: function success(result) {
        $('#time_logs_table').replaceWith($(result));
      }
    });
  }
});

/***/ }),

/***/ "./resources/js/time_logs/index/get_excel.js":
/*!***************************************************!*\
  !*** ./resources/js/time_logs/index/get_excel.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");

$(document).on('click', '#get_excel_button', function () {
  $.ajax({
    url: 'time_logs/get_excel',
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

/***/ "./resources/js/time_logs/index/reload_index.js":
/*!******************************************************!*\
  !*** ./resources/js/time_logs/index/reload_index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reloadIndex": () => (/* binding */ reloadIndex)
/* harmony export */ });
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");

function reloadIndex() {
  $.ajax({
    url: 'time_logs/',
    method: 'get',
    error: function error(_error) {
      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Time log reload failed');
    },
    success: function success(result) {
      $('#page_content').replaceWith($(result));
    }
  });
}

/***/ }),

/***/ "./resources/js/time_logs/index/summarize.js":
/*!***************************************************!*\
  !*** ./resources/js/time_logs/index/summarize.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toasts */ "./resources/js/toasts.js");


function getSelected(table) {
  var data = [];
  table.find('input:checked').each(function () {
    data.push($(this).closest('tr').find('.time_log_id').val());
  });
  return data;
}
$(document).on('click', '#summarize_button', function () {
  console.log(getSelected($('#time_logs_table')));
  $.ajax({
    url: 'time_logs/summarize',
    method: 'post',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: {
      id_list: getSelected($('#time_logs_table'))
    },
    error: function error(_error) {
      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Time log summarize failed');
    },
    success: function success(result) {
      $('#time_logs_table').replaceWith($(result));
      (0,_toasts__WEBPACK_IMPORTED_MODULE_1__.hideFailToast)();
    }
  });
});

/***/ }),

/***/ "./resources/js/time_logs/index/time_buttons.js":
/*!******************************************************!*\
  !*** ./resources/js/time_logs/index/time_buttons.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date */ "./resources/js/date.js");

$(document).on('click', '#start_time_log', function () {
  $(this).attr('hidden', true);
  $('#end_time_log').removeAttr('hidden');
  $('#start_time_date').val((0,_date__WEBPACK_IMPORTED_MODULE_0__.now)());
});
$(document).on('click', '#end_time_log', function () {
  $(this).attr('hidden', true);
  $('#start_time_log').removeAttr('hidden');
  $('#end_time_date').val((0,_date__WEBPACK_IMPORTED_MODULE_0__.now)());
});

/***/ }),

/***/ "./resources/js/time_logs/index/update.js":
/*!************************************************!*\
  !*** ./resources/js/time_logs/index/update.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serialize_tr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../serialize_tr */ "./resources/js/serialize_tr.js");
/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handle_errors */ "./resources/js/handle_errors.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toasts */ "./resources/js/toasts.js");



$(document).on('change', '.time_log_form input:not(.serialize-disable), .time_log_form textarea:not(.serialize-disable), .time_log_form select:not(.serialize-disable)', function () {
  var tr = $(this).closest('tr.time_log_form');
  $.ajax({
    url: 'time_logs/' + tr.find('.time_log_id').val(),
    method: 'put',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: (0,_serialize_tr__WEBPACK_IMPORTED_MODULE_0__.serializeTr)(tr),
    error: function error(_error) {
      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_1__.handleError)(_error, 'Time log update failed');
    },
    success: function success(result) {
      $('#time_logs_table').replaceWith($(result));
      (0,_toasts__WEBPACK_IMPORTED_MODULE_2__.hideFailToast)();
      (0,_toasts__WEBPACK_IMPORTED_MODULE_2__.showSuccessToast)('Time log successfully updated');
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
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
__webpack_require__(/*! ./time_logs/index */ "./resources/js/time_logs/index.js");
})();

/******/ })()
;
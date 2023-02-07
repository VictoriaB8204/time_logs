/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/date.js":
/*!******************************!*\
  !*** ./resources/js/date.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/time_logs/index/reload_index.js":
/*!******************************************************!*\
  !*** ./resources/js/time_logs/index/reload_index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reloadIndex": () => (/* binding */ reloadIndex)
/* harmony export */ });
function reloadIndex() {
  console.log('reloadIndex');
  $.ajax({
    url: 'time_logs/',
    method: 'get',
    success: function success(result) {
      $('#page_content').replaceWith($(result));
    }
  });
}

/***/ }),

/***/ "./resources/js/time_logs/index/time_buttons.js":
/*!******************************************************!*\
  !*** ./resources/js/time_logs/index/time_buttons.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!*****************************************!*\
  !*** ./resources/js/time_logs/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_reload_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/reload_index */ "./resources/js/time_logs/index/reload_index.js");

__webpack_require__(/*! ./index/time_buttons */ "./resources/js/time_logs/index/time_buttons.js");
(0,_index_reload_index__WEBPACK_IMPORTED_MODULE_0__.reloadIndex)();
})();

/******/ })()
;
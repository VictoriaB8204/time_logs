/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/handle_errors.js":
/*!***************************************!*\
  !*** ./resources/js/handle_errors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleError\": () => (/* binding */ handleError)\n/* harmony export */ });\n/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts */ \"./resources/js/toasts.js\");\n\nfunction handleError(error, infoMessage) {\n  console.log(error);\n  (0,_toasts__WEBPACK_IMPORTED_MODULE_0__.showFailToast)(infoMessage + ' Ошибка ' + error.status + ' ' + error.statusText);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvaGFuZGxlX2Vycm9ycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUVoQyxTQUFTQyxXQUFXLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFO0VBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0VBQ2xCRixzREFBYSxDQUFDRyxXQUFXLEdBQUcsVUFBVSxHQUFHRCxLQUFLLENBQUNJLE1BQU0sR0FBRyxHQUFHLEdBQUdKLEtBQUssQ0FBQ0ssVUFBVSxDQUFDO0FBQ25GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hhbmRsZV9lcnJvcnMuanM/MGJjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Nob3dGYWlsVG9hc3R9IGZyb20gXCIuL3RvYXN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IsIGluZm9NZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHNob3dGYWlsVG9hc3QoaW5mb01lc3NhZ2UgKyAnINCe0YjQuNCx0LrQsCAnICsgZXJyb3Iuc3RhdHVzICsgJyAnICsgZXJyb3Iuc3RhdHVzVGV4dCk7XG59XG4iXSwibmFtZXMiOlsic2hvd0ZhaWxUb2FzdCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJpbmZvTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdGF0dXNUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/handle_errors.js\n");

/***/ }),

/***/ "./resources/js/refresh_block.js":
/*!***************************************!*\
  !*** ./resources/js/refresh_block.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refresh\": () => (/* binding */ refresh)\n/* harmony export */ });\n/* harmony import */ var _time_logs_index_onload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time_logs/index/onload */ \"./resources/js/time_logs/index/onload.js\");\n\nfunction refresh(block, replace) {\n  var ret = block.replaceWith(replace); // Call replaceWith\n\n  (0,_time_logs_index_onload__WEBPACK_IMPORTED_MODULE_0__.documentOnLoad)();\n  return ret; // For chaining\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcmVmcmVzaF9ibG9jay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDtBQUdqRCxTQUFTQyxPQUFPLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFDO0VBQ25DLElBQUlDLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxXQUFXLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0VBRXRDSCx1RUFBYyxFQUFFO0VBRWhCLE9BQU9JLEdBQUcsQ0FBQyxDQUFFO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JlZnJlc2hfYmxvY2suanM/NGQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RvY3VtZW50T25Mb2FkfSBmcm9tIFwiLi90aW1lX2xvZ3MvaW5kZXgvb25sb2FkXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2goYmxvY2ssIHJlcGxhY2Upe1xuICAgIGxldCByZXQgPSBibG9jay5yZXBsYWNlV2l0aChyZXBsYWNlKTsgLy8gQ2FsbCByZXBsYWNlV2l0aFxuXG4gICAgZG9jdW1lbnRPbkxvYWQoKTtcblxuICAgIHJldHVybiByZXQ7ICAvLyBGb3IgY2hhaW5pbmdcbn1cbiJdLCJuYW1lcyI6WyJkb2N1bWVudE9uTG9hZCIsInJlZnJlc2giLCJibG9jayIsInJlcGxhY2UiLCJyZXQiLCJyZXBsYWNlV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/refresh_block.js\n");

/***/ }),

/***/ "./resources/js/resize_textarea.js":
/*!*****************************************!*\
  !*** ./resources/js/resize_textarea.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resizeTextArea\": () => (/* binding */ resizeTextArea)\n/* harmony export */ });\nfunction resizeTextArea() {\n  $('textarea').each(function () {\n    $(this).outerHeight(38).outerHeight(this.scrollHeight);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcmVzaXplX3RleHRhcmVhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxjQUFjLEdBQUU7RUFDNUJDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVU7SUFDekJELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDQSxXQUFXLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUM7RUFDMUQsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcmVzaXplX3RleHRhcmVhLmpzP2YzZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVRleHRBcmVhKCl7XG4gICAgJCgndGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykub3V0ZXJIZWlnaHQoMzgpLm91dGVySGVpZ2h0KHRoaXMuc2Nyb2xsSGVpZ2h0KTtcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbInJlc2l6ZVRleHRBcmVhIiwiJCIsImVhY2giLCJvdXRlckhlaWdodCIsInNjcm9sbEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/resize_textarea.js\n");

/***/ }),

/***/ "./resources/js/serialize_tr.js":
/*!**************************************!*\
  !*** ./resources/js/serialize_tr.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serializeTr\": () => (/* binding */ serializeTr)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction serializeTr(tr) {\n  var data = [];\n  tr.find('input, textarea, select').not('.serialize-disable').each(function () {\n    data.push.apply(data, _toConsumableArray($(this).serializeArray()));\n  });\n  tr.find('input, textarea, select, button').each(function () {\n    $(this).attr('disabled', true);\n  });\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvc2VyaWFsaXplX3RyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxXQUFXLENBQUNDLEVBQUUsRUFBQztFQUMzQixJQUFJQyxJQUFJLEdBQUcsRUFBRTtFQUNiRCxFQUFFLENBQUNFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVk7SUFDMUVILElBQUksQ0FBQ0ksSUFBSSxPQUFUSixJQUFJLHFCQUFTSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNDLGNBQWMsRUFBRSxFQUFDO0VBQzFDLENBQUMsQ0FBQztFQUNGUCxFQUFFLENBQUNFLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsWUFBVztJQUN2REUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztFQUNsQyxDQUFDLENBQUM7RUFDRixPQUFPUCxJQUFJO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2VyaWFsaXplX3RyLmpzPzMwZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVRyKHRyKXtcbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIHRyLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jykubm90KCcuc2VyaWFsaXplLWRpc2FibGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YS5wdXNoKC4uLiQodGhpcykuc2VyaWFsaXplQXJyYXkoKSk7XG4gICAgfSk7XG4gICAgdHIuZmluZCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbicpLmVhY2goZnVuY3Rpb24gKCl7XG4gICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbiJdLCJuYW1lcyI6WyJzZXJpYWxpemVUciIsInRyIiwiZGF0YSIsImZpbmQiLCJub3QiLCJlYWNoIiwicHVzaCIsIiQiLCJzZXJpYWxpemVBcnJheSIsImF0dHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/serialize_tr.js\n");

/***/ }),

/***/ "./resources/js/time_logs/index/localStorage.js":
/*!******************************************************!*\
  !*** ./resources/js/time_logs/index/localStorage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forget\": () => (/* binding */ forget),\n/* harmony export */   \"remember\": () => (/* binding */ remember),\n/* harmony export */   \"showValue\": () => (/* binding */ showValue)\n/* harmony export */ });\nfunction remember(input) {\n  var name = input.attr('name');\n  var val = input.val();\n  localStorage.setItem(name, val);\n}\nfunction showValue(input) {\n  var name = input.attr('name');\n  var val = localStorage.getItem(name);\n  input.val(val);\n}\nfunction forget(input) {\n  var name = input.attr('name');\n  localStorage.removeItem(name);\n  input.val('');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdGltZV9sb2dzL2luZGV4L2xvY2FsU3RvcmFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxTQUFTQSxRQUFRLENBQUNDLEtBQUssRUFBQztFQUMzQixJQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUM3QixJQUFJQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0csR0FBRyxFQUFFO0VBQ3JCQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0osSUFBSSxFQUFFRSxHQUFHLENBQUM7QUFDbkM7QUFFTyxTQUFTRyxTQUFTLENBQUNOLEtBQUssRUFBQztFQUM1QixJQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUM3QixJQUFJQyxHQUFHLEdBQUdDLFlBQVksQ0FBQ0csT0FBTyxDQUFDTixJQUFJLENBQUM7RUFDcENELEtBQUssQ0FBQ0csR0FBRyxDQUFDQSxHQUFHLENBQUM7QUFDbEI7QUFFTyxTQUFTSyxNQUFNLENBQUNSLEtBQUssRUFBQztFQUN6QixJQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUM3QkUsWUFBWSxDQUFDSyxVQUFVLENBQUNSLElBQUksQ0FBQztFQUM3QkQsS0FBSyxDQUFDRyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3RpbWVfbG9ncy9pbmRleC9sb2NhbFN0b3JhZ2UuanM/NTVlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVtZW1iZXIoaW5wdXQpe1xuICAgIGxldCBuYW1lID0gaW5wdXQuYXR0cignbmFtZScpO1xuICAgIGxldCB2YWwgPSBpbnB1dC52YWwoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1ZhbHVlKGlucHV0KXtcbiAgICBsZXQgbmFtZSA9IGlucHV0LmF0dHIoJ25hbWUnKTtcbiAgICBsZXQgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaW5wdXQudmFsKHZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JnZXQoaW5wdXQpe1xuICAgIGxldCBuYW1lID0gaW5wdXQuYXR0cignbmFtZScpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuICAgIGlucHV0LnZhbCgnJyk7XG59XG4iXSwibmFtZXMiOlsicmVtZW1iZXIiLCJpbnB1dCIsIm5hbWUiLCJhdHRyIiwidmFsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNob3dWYWx1ZSIsImdldEl0ZW0iLCJmb3JnZXQiLCJyZW1vdmVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/time_logs/index/localStorage.js\n");

/***/ }),

/***/ "./resources/js/time_logs/index/onload.js":
/*!************************************************!*\
  !*** ./resources/js/time_logs/index/onload.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"documentOnLoad\": () => (/* binding */ documentOnLoad)\n/* harmony export */ });\n/* harmony import */ var _resize_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resize_textarea */ \"./resources/js/resize_textarea.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./resources/js/time_logs/index/localStorage.js\");\n\n\nfunction documentOnLoad() {\n  (0,_resize_textarea__WEBPACK_IMPORTED_MODULE_0__.resizeTextArea)();\n  $('#create_form input, #create_form textarea').each(function () {\n    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.showValue)($(this));\n  });\n  if ($('#start_time_date').val() && !$('#end_time_date').val()) {\n    $('#start_time_log').attr('hidden', true);\n    $('#end_time_log').removeAttr('hidden');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdGltZV9sb2dzL2luZGV4L29ubG9hZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFDWjtBQUVsQyxTQUFTRSxjQUFjLEdBQUc7RUFDN0JGLGdFQUFjLEVBQUU7RUFFaEJHLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWTtJQUM1REgsd0RBQVMsQ0FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztFQUVGLElBQUdBLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDRSxHQUFHLEVBQUUsSUFBSSxDQUFDRixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0UsR0FBRyxFQUFFLEVBQUM7SUFDekRGLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztJQUN6Q0gsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDSSxVQUFVLENBQUMsUUFBUSxDQUFDO0VBQzNDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdGltZV9sb2dzL2luZGV4L29ubG9hZC5qcz8xNjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzaXplVGV4dEFyZWF9IGZyb20gXCIuLi8uLi9yZXNpemVfdGV4dGFyZWFcIjtcbmltcG9ydCB7c2hvd1ZhbHVlfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvY3VtZW50T25Mb2FkKCkge1xuICAgIHJlc2l6ZVRleHRBcmVhKCk7XG5cbiAgICAkKCcjY3JlYXRlX2Zvcm0gaW5wdXQsICNjcmVhdGVfZm9ybSB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93VmFsdWUoJCh0aGlzKSk7XG4gICAgfSlcblxuICAgIGlmKCQoJyNzdGFydF90aW1lX2RhdGUnKS52YWwoKSAmJiAhJCgnI2VuZF90aW1lX2RhdGUnKS52YWwoKSl7XG4gICAgICAgICQoJyNzdGFydF90aW1lX2xvZycpLmF0dHIoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICAkKCcjZW5kX3RpbWVfbG9nJykucmVtb3ZlQXR0cignaGlkZGVuJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInJlc2l6ZVRleHRBcmVhIiwic2hvd1ZhbHVlIiwiZG9jdW1lbnRPbkxvYWQiLCIkIiwiZWFjaCIsInZhbCIsImF0dHIiLCJyZW1vdmVBdHRyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/time_logs/index/onload.js\n");

/***/ }),

/***/ "./resources/js/toasts.js":
/*!********************************!*\
  !*** ./resources/js/toasts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideFailToast\": () => (/* binding */ hideFailToast),\n/* harmony export */   \"showFailToast\": () => (/* binding */ showFailToast),\n/* harmony export */   \"showSuccessToast\": () => (/* binding */ showSuccessToast)\n/* harmony export */ });\nfunction showSuccessToast(text) {\n  $('.toastSuccess').find('.toast-body').text(text);\n  bootstrap.Toast.getOrCreateInstance($('.toastSuccess')).show();\n}\nfunction showFailToast(text) {\n  $('.toastFail').find('.toast-body').text(text);\n  bootstrap.Toast.getOrCreateInstance($('.toastFail')).show();\n}\nfunction hideFailToast() {\n  bootstrap.Toast.getOrCreateInstance($('.toastFail')).hide();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdG9hc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLGdCQUFnQixDQUFDQyxJQUFJLEVBQUU7RUFDbkNDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDRixJQUFJLENBQUNBLElBQUksQ0FBQztFQUNqREcsU0FBUyxDQUFDQyxLQUFLLENBQUNDLG1CQUFtQixDQUFDSixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO0FBQ2xFO0FBRU8sU0FBU0MsYUFBYSxDQUFDUCxJQUFJLEVBQUU7RUFDaENDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDRixJQUFJLENBQUNBLElBQUksQ0FBQztFQUM5Q0csU0FBUyxDQUFDQyxLQUFLLENBQUNDLG1CQUFtQixDQUFDSixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO0FBQy9EO0FBRU8sU0FBU0UsYUFBYSxHQUFHO0VBQzVCTCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsbUJBQW1CLENBQUNKLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDUSxJQUFJLEVBQUU7QUFDL0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdG9hc3RzLmpzP2M0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNob3dTdWNjZXNzVG9hc3QodGV4dCkge1xuICAgICQoJy50b2FzdFN1Y2Nlc3MnKS5maW5kKCcudG9hc3QtYm9keScpLnRleHQodGV4dCk7XG4gICAgYm9vdHN0cmFwLlRvYXN0LmdldE9yQ3JlYXRlSW5zdGFuY2UoJCgnLnRvYXN0U3VjY2VzcycpKS5zaG93KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RmFpbFRvYXN0KHRleHQpIHtcbiAgICAkKCcudG9hc3RGYWlsJykuZmluZCgnLnRvYXN0LWJvZHknKS50ZXh0KHRleHQpO1xuICAgIGJvb3RzdHJhcC5Ub2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKCQoJy50b2FzdEZhaWwnKSkuc2hvdygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZhaWxUb2FzdCgpIHtcbiAgICBib290c3RyYXAuVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSgkKCcudG9hc3RGYWlsJykpLmhpZGUoKTtcbn1cbiJdLCJuYW1lcyI6WyJzaG93U3VjY2Vzc1RvYXN0IiwidGV4dCIsIiQiLCJmaW5kIiwiYm9vdHN0cmFwIiwiVG9hc3QiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwic2hvdyIsInNob3dGYWlsVG9hc3QiLCJoaWRlRmFpbFRvYXN0IiwiaGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/toasts.js\n");

/***/ }),

/***/ "./resources/js/users/index.js":
/*!*************************************!*\
  !*** ./resources/js/users/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index/update */ \"./resources/js/users/index/update.js\");\n__webpack_require__(/*! ./index/destroy */ \"./resources/js/users/index/destroy.js\");\n__webpack_require__(/*! ./index/roles/show */ \"./resources/js/users/index/roles/show.js\");\n__webpack_require__(/*! ./index/roles/update */ \"./resources/js/users/index/roles/update.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUFBLG1CQUFPLENBQUMsNERBQWdCLENBQUM7QUFDekJBLG1CQUFPLENBQUMsOERBQWlCLENBQUM7QUFDMUJBLG1CQUFPLENBQUMsb0VBQW9CLENBQUM7QUFDN0JBLG1CQUFPLENBQUMsd0VBQXNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXguanM/YjUzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2luZGV4L3VwZGF0ZScpO1xucmVxdWlyZSgnLi9pbmRleC9kZXN0cm95Jyk7XG5yZXF1aXJlKCcuL2luZGV4L3JvbGVzL3Nob3cnKTtcbnJlcXVpcmUoJy4vaW5kZXgvcm9sZXMvdXBkYXRlJyk7XG4iXSwibmFtZXMiOlsicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/users/index.js\n");

/***/ }),

/***/ "./resources/js/users/index/destroy.js":
/*!*********************************************!*\
  !*** ./resources/js/users/index/destroy.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ \"./resources/js/handle_errors.js\");\n/* harmony import */ var _refresh_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../refresh_block */ \"./resources/js/refresh_block.js\");\n\n\n$(document).on('click', '.destroy_user', function () {\n  if (confirm('Do you really want to delete user?')) {\n    $.ajax({\n      url: 'users/' + $(this).closest('tr').find('.user_id').val(),\n      method: 'delete',\n      headers: {\n        'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n      },\n      error: function error(_error) {\n        (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'User delete failed');\n      },\n      success: function success(result) {\n        (0,_refresh_block__WEBPACK_IMPORTED_MODULE_1__.refresh)($('#users_table'), $(result));\n      }\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvZGVzdHJveS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBZ0Q7QUFDSjtBQUU1Q0UsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWTtFQUNqRCxJQUFHQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsRUFBQztJQUM3Q0gsQ0FBQyxDQUFDSSxJQUFJLENBQUM7TUFDSEMsR0FBRyxFQUFFLFFBQVEsR0FBR0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO01BQzVEQyxNQUFNLEVBQUUsUUFBUTtNQUNoQkMsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFVixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ1csSUFBSSxDQUFDLFNBQVM7TUFDL0QsQ0FBQztNQUNEQyxLQUFLLEVBQUUsZUFBU0EsTUFBSyxFQUFDO1FBQ2xCZCwyREFBVyxDQUFDYyxNQUFLLEVBQUUsb0JBQW9CLENBQUM7TUFDNUMsQ0FBQztNQUNEQyxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtRQUN2QmYsdURBQU8sQ0FBQ0MsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFQSxDQUFDLENBQUNjLE1BQU0sQ0FBQyxDQUFDO01BQ3pDO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvZGVzdHJveS5qcz9kMjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlRXJyb3J9IGZyb20gXCIuLi8uLi9oYW5kbGVfZXJyb3JzXCI7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gXCIuLi8uLi9yZWZyZXNoX2Jsb2NrXCI7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZGVzdHJveV91c2VyJywgZnVuY3Rpb24gKCkge1xuICAgIGlmKGNvbmZpcm0oJ0RvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdXNlcj8nKSl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICd1c2Vycy8nICsgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51c2VyX2lkJykudmFsKCksXG4gICAgICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgJ1VzZXIgZGVsZXRlIGZhaWxlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoKCQoJyN1c2Vyc190YWJsZScpLCAkKHJlc3VsdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOlsiaGFuZGxlRXJyb3IiLCJyZWZyZXNoIiwiJCIsImRvY3VtZW50Iiwib24iLCJjb25maXJtIiwiYWpheCIsInVybCIsImNsb3Nlc3QiLCJmaW5kIiwidmFsIiwibWV0aG9kIiwiaGVhZGVycyIsImF0dHIiLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/users/index/destroy.js\n");

/***/ }),

/***/ "./resources/js/users/index/roles/show.js":
/*!************************************************!*\
  !*** ./resources/js/users/index/roles/show.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handle_errors */ \"./resources/js/handle_errors.js\");\n/* harmony import */ var _refresh_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../refresh_block */ \"./resources/js/refresh_block.js\");\n\n\n$(document).on('click', '.show_roles_button', function () {\n  $.ajax({\n    url: 'users/' + $(this).closest('tr').find('.user_id').val() + '/roles',\n    method: 'get',\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    error: function error(_error) {\n      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Load user roles failed');\n    },\n    success: function success(result) {\n      (0,_refresh_block__WEBPACK_IMPORTED_MODULE_1__.refresh)($('#role_list'), $(result));\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvcm9sZXMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBbUQ7QUFDSjtBQUUvQ0UsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZO0VBQ3RERixDQUFDLENBQUNHLElBQUksQ0FBQztJQUNIQyxHQUFHLEVBQUUsUUFBUSxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxRQUFRO0lBQ3ZFQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxPQUFPLEVBQUU7TUFDTCxjQUFjLEVBQUVULENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDVSxJQUFJLENBQUMsU0FBUztJQUMvRCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxlQUFTQSxNQUFLLEVBQUM7TUFDbEJiLDJEQUFXLENBQUNhLE1BQUssRUFBRSx3QkFBd0IsQ0FBQztJQUNoRCxDQUFDO0lBQ0RDLE9BQU8sRUFBRSxpQkFBVUMsTUFBTSxFQUFFO01BQ3ZCZCx1REFBTyxDQUFDQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUVBLENBQUMsQ0FBQ2EsTUFBTSxDQUFDLENBQUM7SUFDdkM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvcm9sZXMvc2hvdy5qcz9iNjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlRXJyb3J9IGZyb20gXCIuLi8uLi8uLi9oYW5kbGVfZXJyb3JzXCI7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gXCIuLi8uLi8uLi9yZWZyZXNoX2Jsb2NrXCI7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2hvd19yb2xlc19idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAndXNlcnMvJyArICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXNlcl9pZCcpLnZhbCgpICsgJy9yb2xlcycsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgJ0xvYWQgdXNlciByb2xlcyBmYWlsZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVmcmVzaCgkKCcjcm9sZV9saXN0JyksICQocmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcbiJdLCJuYW1lcyI6WyJoYW5kbGVFcnJvciIsInJlZnJlc2giLCIkIiwiZG9jdW1lbnQiLCJvbiIsImFqYXgiLCJ1cmwiLCJjbG9zZXN0IiwiZmluZCIsInZhbCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdHRyIiwiZXJyb3IiLCJzdWNjZXNzIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/users/index/roles/show.js\n");

/***/ }),

/***/ "./resources/js/users/index/roles/update.js":
/*!**************************************************!*\
  !*** ./resources/js/users/index/roles/update.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handle_errors */ \"./resources/js/handle_errors.js\");\n/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toasts */ \"./resources/js/toasts.js\");\n\n\nfunction serializeRoles() {\n  var data = [];\n  $('#role_list .user_role:checked').each(function () {\n    data.push($(this).val());\n  });\n  return data;\n}\n$(document).on('change', '.user_role', function () {\n  $.ajax({\n    url: 'users/' + $(this).closest('#role_list').find('#user_id').val() + '/roles',\n    method: 'post',\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    data: {\n      'roles': serializeRoles()\n    },\n    error: function error(_error) {\n      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Updating user roles failed');\n    },\n    success: function success() {\n      (0,_toasts__WEBPACK_IMPORTED_MODULE_1__.showSuccessToast)('User roles updated');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvcm9sZXMvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFtRDtBQUNGO0FBRWpELFNBQVNFLGNBQWMsR0FBRTtFQUNyQixJQUFJQyxJQUFJLEdBQUcsRUFBRTtFQUNiQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVk7SUFDaERGLElBQUksQ0FBQ0csSUFBSSxDQUFDRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLEdBQUcsRUFBRSxDQUFDO0VBQzVCLENBQUMsQ0FBQztFQUNGLE9BQU9KLElBQUk7QUFDZjtBQUVBQyxDQUFDLENBQUNJLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZO0VBQy9DTCxDQUFDLENBQUNNLElBQUksQ0FBQztJQUNIQyxHQUFHLEVBQUUsUUFBUSxHQUFHUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDTixHQUFHLEVBQUUsR0FBRyxRQUFRO0lBQy9FTyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxPQUFPLEVBQUU7TUFDTCxjQUFjLEVBQUVYLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDWSxJQUFJLENBQUMsU0FBUztJQUMvRCxDQUFDO0lBQ0RiLElBQUksRUFBRTtNQUNGLE9BQU8sRUFBRUQsY0FBYztJQUMzQixDQUFDO0lBQ0RlLEtBQUssRUFBRSxlQUFTQSxNQUFLLEVBQUM7TUFDbEJqQiwyREFBVyxDQUFDaUIsTUFBSyxFQUFFLDRCQUE0QixDQUFDO0lBQ3BELENBQUM7SUFDREMsT0FBTyxFQUFFLG1CQUFZO01BQ2pCakIseURBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDMUM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvcm9sZXMvdXBkYXRlLmpzP2NkZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoYW5kbGVFcnJvcn0gZnJvbSBcIi4uLy4uLy4uL2hhbmRsZV9lcnJvcnNcIjtcbmltcG9ydCB7c2hvd1N1Y2Nlc3NUb2FzdH0gZnJvbSBcIi4uLy4uLy4uL3RvYXN0c1wiO1xuXG5mdW5jdGlvbiBzZXJpYWxpemVSb2xlcygpe1xuICAgIGxldCBkYXRhID0gW107XG4gICAgJCgnI3JvbGVfbGlzdCAudXNlcl9yb2xlOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YS5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy51c2VyX3JvbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAndXNlcnMvJyArICQodGhpcykuY2xvc2VzdCgnI3JvbGVfbGlzdCcpLmZpbmQoJyN1c2VyX2lkJykudmFsKCkgKyAnL3JvbGVzJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICdyb2xlcyc6IHNlcmlhbGl6ZVJvbGVzKClcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCAnVXBkYXRpbmcgdXNlciByb2xlcyBmYWlsZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hvd1N1Y2Nlc3NUb2FzdCgnVXNlciByb2xlcyB1cGRhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcbiJdLCJuYW1lcyI6WyJoYW5kbGVFcnJvciIsInNob3dTdWNjZXNzVG9hc3QiLCJzZXJpYWxpemVSb2xlcyIsImRhdGEiLCIkIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsImNsb3Nlc3QiLCJmaW5kIiwibWV0aG9kIiwiaGVhZGVycyIsImF0dHIiLCJlcnJvciIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/users/index/roles/update.js\n");

/***/ }),

/***/ "./resources/js/users/index/update.js":
/*!********************************************!*\
  !*** ./resources/js/users/index/update.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ \"./resources/js/handle_errors.js\");\n/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toasts */ \"./resources/js/toasts.js\");\n/* harmony import */ var _serialize_tr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serialize_tr */ \"./resources/js/serialize_tr.js\");\n/* harmony import */ var _refresh_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../refresh_block */ \"./resources/js/refresh_block.js\");\n\n\n\n\n$(document).on('change', '.user_form input', function () {\n  $.ajax({\n    url: 'users/' + $(this).closest('tr.user_form').find('.user_id').val(),\n    method: 'put',\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    data: (0,_serialize_tr__WEBPACK_IMPORTED_MODULE_2__.serializeTr)($(this).closest('tr.user_form')),\n    error: function error(_error) {\n      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'User update failed');\n    },\n    success: function success(result) {\n      (0,_refresh_block__WEBPACK_IMPORTED_MODULE_3__.refresh)($('#users_table'), $(result));\n      (0,_toasts__WEBPACK_IMPORTED_MODULE_1__.hideFailToast)();\n      (0,_toasts__WEBPACK_IMPORTED_MODULE_1__.showSuccessToast)('User successfully updated');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMvaW5kZXgvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEO0FBQ2E7QUFDZDtBQUNIO0FBRTVDSyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFlBQVk7RUFDckRGLENBQUMsQ0FBQ0csSUFBSSxDQUFDO0lBQ0hDLEdBQUcsRUFBRSxRQUFRLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNDLEdBQUcsRUFBRTtJQUN0RUMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFVCxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLFNBQVM7SUFDL0QsQ0FBQztJQUNEQyxJQUFJLEVBQUViLDBEQUFXLENBQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xETyxLQUFLLEVBQUUsZUFBU0EsTUFBSyxFQUFDO01BQ2xCakIsMkRBQVcsQ0FBQ2lCLE1BQUssRUFBRSxvQkFBb0IsQ0FBQztJQUM1QyxDQUFDO0lBQ0RDLE9BQU8sRUFBRSxpQkFBVUMsTUFBTSxFQUFFO01BQ3ZCZix1REFBTyxDQUFDQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUVBLENBQUMsQ0FBQ2MsTUFBTSxDQUFDLENBQUM7TUFDckNsQixzREFBYSxFQUFFO01BQ2ZDLHlEQUFnQixDQUFDLDJCQUEyQixDQUFDO0lBQ2pEO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3VzZXJzL2luZGV4L3VwZGF0ZS5qcz8wZGE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlRXJyb3J9IGZyb20gXCIuLi8uLi9oYW5kbGVfZXJyb3JzXCI7XG5pbXBvcnQge2hpZGVGYWlsVG9hc3QsIHNob3dTdWNjZXNzVG9hc3R9IGZyb20gXCIuLi8uLi90b2FzdHNcIjtcbmltcG9ydCB7c2VyaWFsaXplVHJ9IGZyb20gXCIuLi8uLi9zZXJpYWxpemVfdHJcIjtcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSBcIi4uLy4uL3JlZnJlc2hfYmxvY2tcIjtcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXNlcl9mb3JtIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJ3VzZXJzLycgKyAkKHRoaXMpLmNsb3Nlc3QoJ3RyLnVzZXJfZm9ybScpLmZpbmQoJy51c2VyX2lkJykudmFsKCksXG4gICAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHNlcmlhbGl6ZVRyKCQodGhpcykuY2xvc2VzdCgndHIudXNlcl9mb3JtJykpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsICdVc2VyIHVwZGF0ZSBmYWlsZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVmcmVzaCgkKCcjdXNlcnNfdGFibGUnKSwgJChyZXN1bHQpKTtcbiAgICAgICAgICAgIGhpZGVGYWlsVG9hc3QoKTtcbiAgICAgICAgICAgIHNob3dTdWNjZXNzVG9hc3QoJ1VzZXIgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuIl0sIm5hbWVzIjpbImhhbmRsZUVycm9yIiwiaGlkZUZhaWxUb2FzdCIsInNob3dTdWNjZXNzVG9hc3QiLCJzZXJpYWxpemVUciIsInJlZnJlc2giLCIkIiwiZG9jdW1lbnQiLCJvbiIsImFqYXgiLCJ1cmwiLCJjbG9zZXN0IiwiZmluZCIsInZhbCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdHRyIiwiZGF0YSIsImVycm9yIiwic3VjY2VzcyIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/users/index/update.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/users/index.js");
/******/ 	
/******/ })()
;
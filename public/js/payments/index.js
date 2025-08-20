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

/***/ "./resources/js/payments/index.js":
/*!****************************************!*\
  !*** ./resources/js/payments/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _time_logs_index_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../time_logs/index/localStorage */ \"./resources/js/time_logs/index/localStorage.js\");\n\n__webpack_require__(/*! ./index/get_excel */ \"./resources/js/payments/index/get_excel.js\");\n__webpack_require__(/*! ./index/payed */ \"./resources/js/payments/index/payed.js\");\n__webpack_require__(/*! ./index/generate_bill */ \"./resources/js/payments/index/generate_bill.js\");\nwindow.onload = function (event) {\n  $('#billGenerationForm input:not(\"#bill_date\"), #billGenerationForm textarea').each(function () {\n    (0,_time_logs_index_localStorage__WEBPACK_IMPORTED_MODULE_0__.showValue)($(this));\n  });\n  $(\"#bill_date\").val(new Date().toJSON().slice(0, 10));\n};\n$(document).on('change', '#billGenerationForm input, #billGenerationForm textarea', function () {\n  (0,_time_logs_index_localStorage__WEBPACK_IMPORTED_MODULE_0__.remember)($(this));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGF5bWVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0U7QUFFcEVFLG1CQUFPLENBQUMscUVBQW1CLENBQUM7QUFDNUJBLG1CQUFPLENBQUMsNkRBQWUsQ0FBQztBQUN4QkEsbUJBQU8sQ0FBQyw2RUFBdUIsQ0FBQztBQUdoQ0MsTUFBTSxDQUFDQyxNQUFNLEdBQUcsVUFBQ0MsS0FBSyxFQUFLO0VBQ3ZCQyxDQUFDLENBQUMsMkVBQTJFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVk7SUFDNUZOLHdFQUFTLENBQUNLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFFRkEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDRSxHQUFHLENBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sRUFBRSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFREwsQ0FBQyxDQUFDTSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSx5REFBeUQsRUFBRSxZQUFZO0VBQzVGYix1RUFBUSxDQUFDTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BheW1lbnRzL2luZGV4LmpzPzFkM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW1lbWJlciwgc2hvd1ZhbHVlfSBmcm9tIFwiLi4vdGltZV9sb2dzL2luZGV4L2xvY2FsU3RvcmFnZVwiO1xuXG5yZXF1aXJlKCcuL2luZGV4L2dldF9leGNlbCcpO1xucmVxdWlyZSgnLi9pbmRleC9wYXllZCcpO1xucmVxdWlyZSgnLi9pbmRleC9nZW5lcmF0ZV9iaWxsJyk7XG5cblxud2luZG93Lm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICQoJyNiaWxsR2VuZXJhdGlvbkZvcm0gaW5wdXQ6bm90KFwiI2JpbGxfZGF0ZVwiKSwgI2JpbGxHZW5lcmF0aW9uRm9ybSB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93VmFsdWUoJCh0aGlzKSk7XG4gICAgfSlcblxuICAgICQoXCIjYmlsbF9kYXRlXCIpLnZhbChuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApKTtcbn07XG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2JpbGxHZW5lcmF0aW9uRm9ybSBpbnB1dCwgI2JpbGxHZW5lcmF0aW9uRm9ybSB0ZXh0YXJlYScsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1lbWJlcigkKHRoaXMpKTtcbn0pXG4iXSwibmFtZXMiOlsicmVtZW1iZXIiLCJzaG93VmFsdWUiLCJyZXF1aXJlIiwid2luZG93Iiwib25sb2FkIiwiZXZlbnQiLCIkIiwiZWFjaCIsInZhbCIsIkRhdGUiLCJ0b0pTT04iLCJzbGljZSIsImRvY3VtZW50Iiwib24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/payments/index.js\n");

/***/ }),

/***/ "./resources/js/payments/index/generate_bill.js":
/*!******************************************************!*\
  !*** ./resources/js/payments/index/generate_bill.js ***!
  \******************************************************/
/***/ (() => {

eval("$(document).on('click', '#generate_invoice', function () {\n  console.log($('#billGenerationForm').serialize());\n  $.ajax({\n    url: '/payments/generate_invoice',\n    method: 'post',\n    data: $('#billGenerationForm').serialize(),\n    success: function success(response) {\n      downloadFile(response);\n    },\n    error: function error(xhr) {\n      alert('Ошибка: ' + xhr.responseText);\n    }\n  });\n});\n$(document).on('click', '#generate_act', function () {\n  console.log($('#billGenerationForm').serialize());\n  $.ajax({\n    url: '/payments/generate_act',\n    method: 'post',\n    data: $('#billGenerationForm').serialize(),\n    success: function success(response) {\n      downloadFile(response);\n    },\n    error: function error(xhr) {\n      alert('Ошибка: ' + xhr.responseText);\n    }\n  });\n});\nfunction downloadFile(response) {\n  if (response.file) {\n    // Вариант 1: Скачивание через base64\n    var byteCharacters = atob(response.file);\n    var byteNumbers = new Array(byteCharacters.length);\n    for (var i = 0; i < byteCharacters.length; i++) {\n      byteNumbers[i] = byteCharacters.charCodeAt(i);\n    }\n    var byteArray = new Uint8Array(byteNumbers);\n    var blob = new Blob([byteArray], {\n      type: response.mime\n    });\n    var link = document.createElement('a');\n    link.href = window.URL.createObjectURL(blob);\n    link.download = response.filename;\n    document.body.appendChild(link);\n    link.click();\n    document.body.removeChild(link);\n  } else if (response.url) {\n    // Вариант 2: Скачивание по ссылке\n    window.location.href = response.url;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGF5bWVudHMvaW5kZXgvZ2VuZXJhdGVfYmlsbC5qcy5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiY29uc29sZSIsImxvZyIsInNlcmlhbGl6ZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZG93bmxvYWRGaWxlIiwiZXJyb3IiLCJ4aHIiLCJhbGVydCIsInJlc3BvbnNlVGV4dCIsImZpbGUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJieXRlTnVtYmVycyIsIkFycmF5IiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwibWltZSIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkIiwiZmlsZW5hbWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwibG9jYXRpb24iXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYXltZW50cy9pbmRleC9nZW5lcmF0ZV9iaWxsLmpzPzMzZDQiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNnZW5lcmF0ZV9pbnZvaWNlJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCQoJyNiaWxsR2VuZXJhdGlvbkZvcm0nKS5zZXJpYWxpemUoKSk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL3BheW1lbnRzL2dlbmVyYXRlX2ludm9pY2UnLFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgZGF0YTogJCgnI2JpbGxHZW5lcmF0aW9uRm9ybScpLnNlcmlhbGl6ZSgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZG93bmxvYWRGaWxlKHJlc3BvbnNlKVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwOiAnICsgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNnZW5lcmF0ZV9hY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJCgnI2JpbGxHZW5lcmF0aW9uRm9ybScpLnNlcmlhbGl6ZSgpKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvcGF5bWVudHMvZ2VuZXJhdGVfYWN0JyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGRhdGE6ICQoJyNiaWxsR2VuZXJhdGlvbkZvcm0nKS5zZXJpYWxpemUoKSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRvd25sb2FkRmlsZShyZXNwb25zZSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhocikge1xuICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsDogJyArIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZShyZXNwb25zZSl7XG4gICAgaWYgKHJlc3BvbnNlLmZpbGUpIHtcbiAgICAgICAgLy8g0JLQsNGA0LjQsNC90YIgMTog0KHQutCw0YfQuNCy0LDQvdC40LUg0YfQtdGA0LXQtyBiYXNlNjRcbiAgICAgICAgY29uc3QgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKHJlc3BvbnNlLmZpbGUpO1xuICAgICAgICBjb25zdCBieXRlTnVtYmVycyA9IG5ldyBBcnJheShieXRlQ2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBieXRlTnVtYmVyc1tpXSA9IGJ5dGVDaGFyYWN0ZXJzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J5dGVBcnJheV0sIHt0eXBlOiByZXNwb25zZS5taW1lfSk7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSByZXNwb25zZS5maWxlbmFtZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UudXJsKSB7XG4gICAgICAgIC8vINCS0LDRgNC40LDQvdGCIDI6INCh0LrQsNGH0LjQstCw0L3QuNC1INC/0L4g0YHRgdGL0LvQutC1XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UudXJsO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWTtFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDSyxTQUFTLEVBQUUsQ0FBQztFQUNqREwsQ0FBQyxDQUFDTSxJQUFJLENBQUM7SUFDSEMsR0FBRyxFQUFFLDRCQUE0QjtJQUNqQ0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFVCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FB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\n//# sourceURL=webpack-internal:///./resources/js/payments/index/generate_bill.js\n");

/***/ }),

/***/ "./resources/js/payments/index/get_excel.js":
/*!**************************************************!*\
  !*** ./resources/js/payments/index/get_excel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ \"./resources/js/handle_errors.js\");\n\n$(document).on('click', '#get_payment_excel_button', function () {\n  $.ajax({\n    url: '/payments/get_excel',\n    method: 'get',\n    error: function error(_error) {\n      (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Export to Excel failed');\n    },\n    success: function success(path) {\n      var link = document.createElement('a');\n      link.setAttribute('href', path);\n      link.setAttribute('download', '');\n      link.click();\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGF5bWVudHMvaW5kZXgvZ2V0X2V4Y2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWdEO0FBRWhEQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFlBQVk7RUFDN0RGLENBQUMsQ0FBQ0csSUFBSSxDQUFDO0lBQ0hDLEdBQUcsRUFBRSxxQkFBcUI7SUFDMUJDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLEtBQUssRUFBRSxlQUFTQSxNQUFLLEVBQUM7TUFDbEJQLDJEQUFXLENBQUNPLE1BQUssRUFBRSx3QkFBd0IsQ0FBQztJQUNoRCxDQUFDO0lBQ0RDLE9BQU8sRUFBRSxpQkFBVUMsSUFBSSxFQUFFO01BQ3JCLElBQUlDLElBQUksR0FBR1IsUUFBUSxDQUFDUyxhQUFhLENBQUMsR0FBRyxDQUFDO01BQ3RDRCxJQUFJLENBQUNFLFlBQVksQ0FBQyxNQUFNLEVBQUVILElBQUksQ0FBQztNQUMvQkMsSUFBSSxDQUFDRSxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztNQUNqQ0YsSUFBSSxDQUFDRyxLQUFLLEVBQUU7SUFDaEI7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGF5bWVudHMvaW5kZXgvZ2V0X2V4Y2VsLmpzPzgyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoYW5kbGVFcnJvcn0gZnJvbSBcIi4uLy4uL2hhbmRsZV9lcnJvcnNcIjtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNnZXRfcGF5bWVudF9leGNlbF9idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL3BheW1lbnRzL2dldF9leGNlbCcsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgJ0V4cG9ydCB0byBFeGNlbCBmYWlsZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwYXRoKTtcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICcnKTtcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuIl0sIm5hbWVzIjpbImhhbmRsZUVycm9yIiwiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZXJyb3IiLCJzdWNjZXNzIiwicGF0aCIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/payments/index/get_excel.js\n");

/***/ }),

/***/ "./resources/js/payments/index/payed.js":
/*!**********************************************!*\
  !*** ./resources/js/payments/index/payed.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handle_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handle_errors */ \"./resources/js/handle_errors.js\");\n/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toasts */ \"./resources/js/toasts.js\");\n/* harmony import */ var _refresh_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../refresh_block */ \"./resources/js/refresh_block.js\");\n\n\n\n$(document).on('click', '.payed_button', function () {\n  if (confirm('Do you really want to pay for this time?')) {\n    $.ajax({\n      url: 'payments/pay_for_the_time/' + $(this).closest('tr').find('.user_id').val(),\n      method: 'post',\n      headers: {\n        'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n      },\n      error: function error(_error) {\n        (0,_handle_errors__WEBPACK_IMPORTED_MODULE_0__.handleError)(_error, 'Paying failed');\n      },\n      success: function success(result) {\n        (0,_refresh_block__WEBPACK_IMPORTED_MODULE_2__.refresh)($('#users_table'), $(result));\n        (0,_toasts__WEBPACK_IMPORTED_MODULE_1__.showSuccessToast)('The time was successfully payed');\n      }\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGF5bWVudHMvaW5kZXgvcGF5ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnRDtBQUNGO0FBQ0Y7QUFFNUNHLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVk7RUFDakQsSUFBR0MsT0FBTyxDQUFDLDBDQUEwQyxDQUFDLEVBQUM7SUFDbkRILENBQUMsQ0FBQ0ksSUFBSSxDQUFDO01BQ0hDLEdBQUcsRUFBRSw0QkFBNEIsR0FBR0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO01BQ2hGQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUVWLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDVyxJQUFJLENBQUMsU0FBUztNQUMvRCxDQUFDO01BQ0RDLEtBQUssRUFBRSxlQUFTQSxNQUFLLEVBQUM7UUFDbEJmLDJEQUFXLENBQUNlLE1BQUssRUFBRSxlQUFlLENBQUM7TUFDdkMsQ0FBQztNQUNEQyxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtRQUN2QmYsdURBQU8sQ0FBQ0MsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFQSxDQUFDLENBQUNjLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDaEIseURBQWdCLENBQUMsaUNBQWlDLENBQUM7TUFDdkQ7SUFDSixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYXltZW50cy9pbmRleC9wYXllZC5qcz8yNmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlRXJyb3J9IGZyb20gXCIuLi8uLi9oYW5kbGVfZXJyb3JzXCI7XG5pbXBvcnQge3Nob3dTdWNjZXNzVG9hc3R9IGZyb20gXCIuLi8uLi90b2FzdHNcIjtcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSBcIi4uLy4uL3JlZnJlc2hfYmxvY2tcIjtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYXllZF9idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYoY29uZmlybSgnRG8geW91IHJlYWxseSB3YW50IHRvIHBheSBmb3IgdGhpcyB0aW1lPycpKXtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJ3BheW1lbnRzL3BheV9mb3JfdGhlX3RpbWUvJyArICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXNlcl9pZCcpLnZhbCgpLFxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCAnUGF5aW5nIGZhaWxlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoKCQoJyN1c2Vyc190YWJsZScpLCAkKHJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIHNob3dTdWNjZXNzVG9hc3QoJ1RoZSB0aW1lIHdhcyBzdWNjZXNzZnVsbHkgcGF5ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59KVxuIl0sIm5hbWVzIjpbImhhbmRsZUVycm9yIiwic2hvd1N1Y2Nlc3NUb2FzdCIsInJlZnJlc2giLCIkIiwiZG9jdW1lbnQiLCJvbiIsImNvbmZpcm0iLCJhamF4IiwidXJsIiwiY2xvc2VzdCIsImZpbmQiLCJ2YWwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYXR0ciIsImVycm9yIiwic3VjY2VzcyIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/payments/index/payed.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/payments/index.js");
/******/ 	
/******/ })()
;
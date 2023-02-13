(()=>{"use strict";var t,e,r={6099:(t,e,r)=>{r.d(e,{S:()=>n});var o=r(8700);function n(t,e){console.log(t),(0,o.LJ)(e+" Ошибка "+t.status+" "+t.statusText)}},8719:(t,e,r)=>{r.d(e,{b:()=>n});var o=r(9713);function n(t,e){var r=t.replaceWith(e);return(0,o._)(),r}},9553:(t,e,r)=>{function o(){$("textarea").each((function(){$(this).outerHeight(38).outerHeight(this.scrollHeight)}))}r.d(e,{p:()=>o})},3718:(t,e,r)=>{r.r(e);var o=r(7543);$(document).on("click","#clean_create_form",(function(){confirm("Do you really want to clear the creation form?")&&$("#create_form input, #create_form textarea").each((function(){(0,o.forget)($(this))}))}))},7009:(t,e,r)=>{r.r(e);var o=r(6099),n=r(8719),a=r(7543);$(document).on("click","#create_button",(function(){$.ajax({url:"time_logs",method:"post",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:$("#create_form").serialize(),error:function(t){(0,o.S)(t,"Time log create failed")},success:function(t){(0,n.b)($("#page_content"),$(t).find("#page_content")),$("#create_form input, #create_form textarea").each((function(){(0,a.forget)($(this))}))}})}))},156:(t,e,r)=>{r.r(e);var o=r(6099),n=r(8719);$(document).on("click",".destroy_time_log",(function(){confirm("Do you really want to delete time log?")&&$.ajax({url:"time_logs/"+$(this).closest("tr").find(".time_log_id").val(),method:"delete",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},error:function(t){(0,o.S)(t,"Time log delete failed")},success:function(t){(0,n.b)($("#time_logs_table"),$(t))}})}))},8632:(t,e,r)=>{r.r(e);var o=r(6099);$(document).on("click","#get_excel_button",(function(){$.ajax({url:"time_logs/get_excel",method:"get",error:function(t){(0,o.S)(t,"Export to Excel failed")},success:function(t){var e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download",""),e.click()}})}))},7543:(t,e,r)=>{function o(t){var e=t.attr("name"),r=t.val();localStorage.setItem(e,r)}function n(t){var e=t.attr("name"),r=localStorage.getItem(e);t.val(r)}function a(t){var e=t.attr("name");localStorage.removeItem(e),t.val("")}r.r(e),r.d(e,{forget:()=>a,remember:()=>o,showValue:()=>n})},9713:(t,e,r)=>{r.d(e,{_:()=>a});var o=r(9553),n=r(7543);function a(){(0,o.p)(),$("#create_form input, #create_form textarea").each((function(){(0,n.showValue)($(this))})),$("#start_time_date").val()&&!$("#end_time_date").val()&&($("#start_time_log").attr("hidden",!0),$("#end_time_log").removeAttr("hidden"))}},8298:(t,e,r)=>{r.r(e);var o=r(6099),n=r(8700),a=r(8719);$(document).on("click","#summarize_button",(function(){var t,e;$.ajax({url:"time_logs/summarize",method:"post",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{id_list:(t=$("#time_logs_table"),e=[],t.find("input:checked").each((function(){e.push($(this).closest("tr").find(".time_log_id").val())})),e)},error:function(t){(0,o.S)(t,"Time log summarize failed")},success:function(t){(0,a.b)($("#time_logs_table"),$(t)),(0,n.QM)()}})}))},2346:(t,e,r)=>{function o(){return(new Date).yyyymmdd()}r.r(e),Date.prototype.yyyymmdd=function(){var t=this.getFullYear().toString(),e=(this.getMonth()+1).toString(),r=this.getDate().toString(),o=this.getHours().toString(),n=this.getMinutes().toString();return t+"-"+(e[1]?e:"0"+e[0])+"-"+(r[1]?r:"0"+r[0])+"T"+(o[1]?o:"0"+o[0])+":"+(n[1]?n:"0"+n[0])},$(document).on("click","#start_time_log",(function(){$(this).attr("hidden",!0),$("#end_time_log").removeAttr("hidden"),$("#start_time_date").val(o()).trigger("change")})),$(document).on("click","#end_time_log",(function(){$(this).attr("hidden",!0),$("#start_time_log").removeAttr("hidden"),$("#end_time_date").val(o()).trigger("change")}))},3393:(t,e,r)=>{function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function a(t){var e=[];return t.find("input, textarea, select").not(".serialize-disable").each((function(){e.push.apply(e,o($(this).serializeArray()))})),e}r.r(e);var i=r(6099),c=r(8700),l=r(8719);$(document).on("blur",".time_log_form input:not(.serialize-disable), .time_log_form textarea:not(.serialize-disable), .time_log_form select:not(.serialize-disable)",(function(){var t=$(this).closest("tr.time_log_form");$.ajax({url:"time_logs/"+t.find(".time_log_id").val(),method:"put",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:a(t),error:function(t){(0,i.S)(t,"Time log update failed")},success:function(t){(0,l.b)($("#time_logs_table"),$(t)),(0,c.QM)(),(0,c.XA)("Time log successfully updated")}})}))},8700:(t,e,r)=>{function o(t){$(".toastSuccess").find(".toast-body").text(t),bootstrap.Toast.getOrCreateInstance($(".toastSuccess")).show()}function n(t){$(".toastFail").find(".toast-body").text(t),bootstrap.Toast.getOrCreateInstance($(".toastFail")).show()}function a(){bootstrap.Toast.getOrCreateInstance($(".toastFail")).hide()}r.d(e,{LJ:()=>n,QM:()=>a,XA:()=>o})}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var a=o[t]={exports:{}};return r[t](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=n(9713),e=n(7543),n(2346),n(7009),n(3393),n(156),n(8632),n(8298),n(7543),n(3718),window.onload=function(e){(0,t._)()},$(document).on("change","#create_form input, #create_form textarea",(function(){(0,e.remember)($(this))}))})();
//# sourceMappingURL=index.js.map
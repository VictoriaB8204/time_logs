(()=>{"use strict";var t,e,o={6099:(t,e,o)=>{o.d(e,{S:()=>n});var r=o(8700);function n(t,e){console.log(t),(0,r.LJ)(e+" Ошибка "+t.status+" "+t.statusText)}},8719:(t,e,o)=>{o.d(e,{b:()=>n});var r=o(9713);function n(t,e){var o=t.replaceWith(e);return(0,r._)(),o}},9553:(t,e,o)=>{function r(){$("textarea").each((function(){$(this).outerHeight(38).outerHeight(this.scrollHeight)}))}o.d(e,{p:()=>r})},3718:(t,e,o)=>{o.r(e);var r=o(7543);$(document).on("click","#clean_create_form",(function(){confirm("Do you really want to clear the creation form?")&&($("#end_time_log").trigger("click"),$("#create_form input, #create_form textarea").each((function(){(0,r.forget)($(this))})))}))},7009:(t,e,o)=>{o.r(e);var r=o(6099),n=o(8719),a=o(7543);$(document).on("click","#create_button",(function(){$.ajax({url:"time_logs",method:"post",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:$("#create_form").serialize(),error:function(t){(0,r.S)(t,"Time log create failed")},success:function(t){(0,n.b)($("#page_content"),$(t).find("#page_content")),$("#create_form input, #create_form textarea").each((function(){(0,a.forget)($(this))}))}})}))},156:(t,e,o)=>{o.r(e);var r=o(6099),n=o(8719);$(document).on("click",".destroy_time_log",(function(){confirm("Do you really want to delete time log?")&&$.ajax({url:"time_logs/"+$(this).closest("tr").find(".time_log_id").val(),method:"delete",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},error:function(t){(0,r.S)(t,"Time log delete failed")},success:function(t){(0,n.b)($("#time_logs_table"),$(t))}})}))},8632:(t,e,o)=>{o.r(e);var r=o(6099);$(document).on("click","#get_excel_button",(function(){$.ajax({url:"time_logs/get_excel",method:"get",error:function(t){(0,r.S)(t,"Export to Excel failed")},success:function(t){var e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download",""),e.click()}})}))},7543:(t,e,o)=>{function r(t){var e=t.attr("name"),o=t.val();localStorage.setItem(e,o)}function n(t){var e=t.attr("name"),o=localStorage.getItem(e);t.val(o)}function a(t){var e=t.attr("name");localStorage.removeItem(e),t.val("")}o.r(e),o.d(e,{forget:()=>a,remember:()=>r,showValue:()=>n})},9713:(t,e,o)=>{o.d(e,{_:()=>a});var r=o(9553),n=o(7543);function a(){(0,r.p)(),$("#create_form input, #create_form textarea").each((function(){(0,n.showValue)($(this))})),$("#start_time_date").val()&&!$("#end_time_date").val()&&($("#start_time_log").attr("hidden",!0),$("#end_time_log").removeAttr("hidden"))}},4404:(t,e,o)=>{o.r(e);var r=o(6099),n=o(8719),a=o(8700);$(document).on("change",".session-date",(function(){var t;t=$(this),$.ajax({url:"time_logs/current_logs/dates/",method:"put",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:t.serialize(),error:function(t){(0,r.S)(t,"Time log date interval update failed")},success:function(t){(0,n.b)($("#time_logs_table"),$(t)),(0,a.QM)(),(0,a.XA)("Time log date interval successfully updated")}})}))},8298:(t,e,o)=>{o.r(e);var r=o(6099),n=o(8700),a=o(8719);$(document).on("click","#summarize_button",(function(){var t,e;$.ajax({url:"time_logs/summarize",method:"post",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{id_list:(t=$("#time_logs_table"),e=[],t.find("input:checked").each((function(){e.push($(this).closest("tr").find(".time_log_id").val())})),e)},error:function(t){(0,r.S)(t,"Time log summarize failed")},success:function(t){(0,a.b)($("#time_logs_table"),$(t)),(0,n.QM)()}})}))},2346:(t,e,o)=>{function r(){return(new Date).yyyymmdd()}o.r(e),Date.prototype.yyyymmdd=function(){var t=this.getFullYear().toString(),e=(this.getMonth()+1).toString(),o=this.getDate().toString(),r=this.getHours().toString(),n=this.getMinutes().toString();return t+"-"+(e[1]?e:"0"+e[0])+"-"+(o[1]?o:"0"+o[0])+"T"+(r[1]?r:"0"+r[0])+":"+(n[1]?n:"0"+n[0])},$(document).on("click","#start_time_log",(function(){$(this).attr("hidden",!0),$("#end_time_log").removeAttr("hidden"),$("#start_time_date").val(r()).trigger("change")})),$(document).on("click","#end_time_log",(function(){$(this).attr("hidden",!0),$("#start_time_log").removeAttr("hidden"),$("#end_time_date").val(r()).trigger("change")}))},3393:(t,e,o)=>{function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function a(t){var e=[];return t.find("input, textarea, select").not(".serialize-disable").each((function(){e.push.apply(e,r($(this).serializeArray()))})),t.find("input, textarea, select, button").each((function(){$(this).attr("disabled",!0)})),e}o.r(e);var i=o(6099),c=o(8700),l=o(8719);function s(t){var e=t.closest("tr.time_log_form");$.ajax({url:"time_logs/"+e.find(".time_log_id").val(),method:"put",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:a(e),error:function(t){(0,i.S)(t,"Time log update failed")},success:function(t){(0,l.b)($("#time_logs_table"),$(t)),(0,c.QM)(),(0,c.XA)("Time log successfully updated")}})}$(document).on("change",'.time_log_form input:not(.serialize-disable):not([type="datetime-local"]), .time_log_form textarea:not(.serialize-disable), .time_log_form select:not(.serialize-disable)',(function(){s($(this))})),$(document).on("blur",'.time_log_form input[type="datetime-local"]',(function(){s($(this))}))},8700:(t,e,o)=>{function r(t){$(".toastSuccess").find(".toast-body").text(t),bootstrap.Toast.getOrCreateInstance($(".toastSuccess")).show()}function n(t){$(".toastFail").find(".toast-body").text(t),bootstrap.Toast.getOrCreateInstance($(".toastFail")).show()}function a(){bootstrap.Toast.getOrCreateInstance($(".toastFail")).hide()}o.d(e,{LJ:()=>n,QM:()=>a,XA:()=>r})}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var a=r[t]={exports:{}};return o[t](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=n(9713),e=n(7543),n(2346),n(7009),n(3393),n(156),n(8632),n(8298),n(7543),n(3718),n(4404),window.onload=function(e){(0,t._)()},$(document).on("change","#create_form input, #create_form textarea",(function(){(0,e.remember)($(this))}))})();
//# sourceMappingURL=index.js.map
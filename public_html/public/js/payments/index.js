(()=>{var t={6099:(t,e,o)=>{"use strict";o.d(e,{S:()=>a});var r=o(8700);function a(t,e){console.log(t),(0,r.LJ)(e+" Ошибка "+t.status+" "+t.statusText)}},6954:(t,e,o)=>{"use strict";o.r(e);var r=o(6099);$(document).on("click","#get_payment_excel_button",(function(){$.ajax({url:"/payments/get_excel",method:"get",error:function(t){(0,r.S)(t,"Export to Excel failed")},success:function(t){var e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download",""),e.click()}})}))},6178:(t,e,o)=>{"use strict";o.r(e);var r=o(6099),a=o(8700);function n(){$("textarea").each((function(){$(this).outerHeight(38).outerHeight(this.scrollHeight)})),$("#create_form input, #create_form textarea").each((function(){var t=$(this).attr("name"),e=localStorage.getItem(t);$(this).val(e)})),$("#start_time_date").val()&&!$("#end_time_date").val()&&($("#start_time_log").attr("hidden",!0),$("#end_time_log").removeAttr("hidden"))}$(document).on("click",".payed_button",(function(){confirm("Do you really want to pay for this time?")&&$.ajax({url:"payments/pay_for_the_time/"+$(this).closest("tr").find(".user_id").val(),method:"post",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},error:function(t){(0,r.S)(t,"Paying failed")},success:function(t){var e,o;e=$("#users_table"),o=$(t),e.replaceWith(o),n(),(0,a.XA)("The time was successfully payed")}})}))},8700:(t,e,o)=>{"use strict";function r(t){$(".toastSuccess").find(".toast-body").text(t),bootstrap.Toast.getOrCreateInstance($(".toastSuccess")).show()}function a(t){$(".toastFail").find(".toast-body").text(t),bootstrap.Toast.getOrCreateInstance($(".toastFail")).show()}o.d(e,{LJ:()=>a,XA:()=>r})}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(6954),o(6178)})();
//# sourceMappingURL=index.js.map
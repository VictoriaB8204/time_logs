import {remember, showValue} from "../time_logs/index/localStorage";

require('./index/get_excel');
require('./index/payed');
require('./index/generate_bill');


window.onload = (event) => {
    $('#billGenerationForm input:not("#bill_date"), #billGenerationForm textarea').each(function () {
        showValue($(this));
    })

    $("#bill_date").val(new Date().toJSON().slice(0,10));
};

$(document).on('change', '#billGenerationForm input, #billGenerationForm textarea', function () {
    remember($(this));
})

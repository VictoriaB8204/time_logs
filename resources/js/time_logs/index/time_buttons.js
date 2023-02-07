import {now} from "../../date";

$(document).on('click', '#start_time_log', function () {
    $(this).attr('hidden', true);
    $('#end_time_log').removeAttr('hidden');
    $('#start_time_date').val(now());
})

$(document).on('click', '#end_time_log', function () {
    $(this).attr('hidden', true);
    $('#start_time_log').removeAttr('hidden');
    $('#end_time_date').val(now());
})

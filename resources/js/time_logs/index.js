import {documentOnLoad} from "./index/onload";
import {remember} from "./index/localStorage";


require('./index/time_buttons');
require('./index/create');
require('./index/update');
require('./index/destroy');
require('./index/get_excel');
require('./index/summarize');
require('./index/localStorage');
require('./index/clean_create_form');

window.onload = (event) => {
    documentOnLoad();
};

$(document).on('change', '#create_form input, #create_form textarea', function () {
    remember($(this));
})

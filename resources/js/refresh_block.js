import {resizeTextArea} from "./resize_textarea";

export function refresh(block, replace){
    let ret = block.replaceWith(replace); // Call replaceWith

    resizeTextArea();

    return ret;  // For chaining
}

import {documentOnLoad} from "./time_logs/index/onload";


export function refresh(block, replace){
    let ret = block.replaceWith(replace); // Call replaceWith

    documentOnLoad();

    return ret;  // For chaining
}

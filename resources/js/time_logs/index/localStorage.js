export function remember(input){
    let name = input.attr('name');
    let val = input.val();
    localStorage.setItem(name, val);
}

export function showValue(input){
    let name = input.attr('name');
    let val = localStorage.getItem(name);
    input.val(val);
}

export function forget(input){
    let name = input.attr('name');
    localStorage.removeItem(name);
    input.val('');
}

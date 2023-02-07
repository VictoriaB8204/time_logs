
export function serializeTr(tr){
    let data = [];
    tr.find('input, textarea, select').not('.serialize-disable').each(function () {
        data.push(...$(this).serializeArray());
    });
    return data;
}

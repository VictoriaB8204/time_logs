Date.prototype.yyyymmdd = function() {
    let yyyy = this.getFullYear().toString();
    let MM = (this.getMonth()+1).toString(); // getMonth() is zero-based
    let dd  = this.getDate().toString();
    let hh = this.getHours().toString();
    let mm = this.getMinutes().toString();
    return yyyy + "-" + (MM[1]?MM:"0"+MM[0]) + "-" + (dd[1]?dd:"0"+dd[0]) +
        "T" + (hh[1]?hh:"0"+hh[0]) + ":" + (mm[1]?mm:"0"+mm[0]); // padding
};

export function now() {
    let date = new Date();
    return date.yyyymmdd();
}

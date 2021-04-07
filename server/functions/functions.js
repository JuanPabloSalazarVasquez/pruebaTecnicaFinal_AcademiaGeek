/* Encriptar:
function encript(obj) {
    var crypto = require('crypto')
    var hmac = crypto.createHmac('sha1', process.env.SECRETCRYPTO).update(obj).digest('hex');
    return hmac
}*/

function generateDate() {
    var d = new Date();
    month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return day + "/" + month + "/" + year;
}

function generateHour() {
    var d = new Date();
    hours = '' + (d.getHours() - 5),
    console.log(hours);
    minutes = '' + d.getMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    console.log("Horas: " + hours)
    console.log("Final: " + hours + ":" + minutes)
    return hours + ":" + minutes;
}


module.exports = {
    generateDate,
    generateHour
}
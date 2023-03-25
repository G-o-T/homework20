
const dataTag = document.querySelector('.date-field');
dataTag.innerHTML = getCurrentDate();

function getCurrentDate() {
    const moment = require("moment");
    let currentDate = new Date();
    let date = moment(currentDate).format('LL');
    return date;
}





var params = window.location.search.substring(1).split('&');
var param_1 = params[0];
var param_2 = params[1];

if (param_1) {
    var dateParam = param_1.split('=');
    if (dateParam[0] === 'date' && dateParam[1]) {
        var now = moment().startOf('day');
        var to = moment(dateParam[1], 'YYYY-MM-DD').startOf('day');
        var days = to.diff(now, 'days');
        if (days < 0) {
            days = 0;
        }
        document.querySelector('.counter').innerHTML = days;

        var textParam = param_2.split('=');
        if (textParam[0] === 'text' && textParam[1]) {
            document.querySelector('.event').innerHTML = decodeURIComponent(textParam[1]);
        }
    }
}
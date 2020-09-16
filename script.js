var params = window.location.search.substring(1).split('&');
var param_1 = params[0];
var param_2 = params[1];

if (param_1) {
    var dateParam = param_1.split('=');
    if (dateParam[0] === 'date' && dateParam[1]) {
        var now = dayjs().startOf('day');
        var to = dayjs(dateParam[1]).startOf('day');
        var days = to.diff(now, 'days');
        if (days < 0) {
            days = 0;
        }
        document.querySelector('.counter--content').innerHTML = days;

        var textParam = param_2 && param_2.split('=');
        if (textParam && textParam[0] === 'text' && textParam[1]) {
            var header = document.querySelector('.header--content');
            var event = document.createElement('span');
            event.className = 'event';
            event.innerHTML = decodeURIComponent(textParam[1]);
            header.appendChild(event);
        }
    }
}

var todayEl = $("#currentDay");
var leadEl = $("#lead");
var mainEl = $(".container");

const hours = ["09:00am","10:00am","11:00am","12:00pm","01:00pm","02:00pm","03:00pm","04:00pm","05:00pm","06:00pm","07:00pm","08:00pm"]

function displayHour() {
    for (i = 0; i < hours.length; i++) {
        // DOM element 
        let li = $('<li></li>');
        li.addClass('block');
        let span = $('<span></span>');
        span.attr('id', 'blockTime');
        span.text(hours[i]);

        let textArea= $('<textarea></textarea>');
        textArea.attr('id',"blockText");

        let button = $('<button></button>');
        button.attr('id', 'blockBtn');
        let icon = $('<i class="fa fa-lock" aria-hidden="true"></i>');


        // append
        button.append(icon)
        li.append(span)
        li.append(textArea)
        li.append(button)
        mainEl.append(li)

        button.on('click', saveEvent)
    }
}

function saveEvent(e) {
    
}

displayHour()
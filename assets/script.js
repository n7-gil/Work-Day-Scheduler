let todayEl = $("#currentDay");
let leadEl = $("#lead");
let mainEl = $(".container");

let timeHour = {
"09:00am": "",
"10:00am": "",
"11:00am": "",
"12:00pm": "",
"01:00pm": "",
"02:00pm": "",
"03:00pm": "",
"04:00pm": "",
"05:00pm": "",
"06:00pm": "",
"07:00pm": "",
"08:00pm": "",
}

function displayHour() {
    for (let hour in timeHour) {
        // DOM element 
        let li = $('<li></li>');
        li.addClass('block');
        let span = $('<span></span>');
        span.attr('id', 'blockTime');
        span.text(hour);

        let textArea= $('<textarea></textarea>');
        textArea.attr('id',"blockText");
        textArea.text = timeHour[hour]

        let button = $('<button></button>');
        button.attr('id', 'blockBtn');
        let icon = $('<i class="fa fa-lock" aria-hidden="true"></i>');


        // append
        button.append(icon)
        li.append(span)
        li.append(textArea)
        li.append(button)
        mainEl.append(li)    
    }
}

    // ($('blockBtn'.get().forEach(element => {
//     //     $(element).on('click'), () => {
//     //         let parent = $(element).parent().get()
//     //         let time = $(parent).children('.blockTime').text()
//     //         let msg = $(parent).children('.blockText').val()
//         }

//     //     console.log($(time) is $(msg));
//     // }) 
//     // ))
// }


 // button.on('click', saveEvent)

// button.addEventListener('click', function(event) {
// event.preventDefault();

// var scheduleDay = {
//     span: span.value,
//     textArea: textArea.value.trim()
// };

// localStorage.setItem("scheduleDay", JSON.stringify(scheduleDay));
// saveEvent();

// });

// function saveEvent(e) {
//     var saveDay = JSON.parse(localStorage.getItem("scheduleDay"));
//     if (saveDay !== null) {
//       document.querySelector(".saved").textContent = "Saved to scheduler"  
//     }    
// }

displayHour()
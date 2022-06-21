// let todayEl = $("#currentDay");
let today = moment();
let leadEl = $("#lead");
let mainEl = $(".container");

$("#currentDay").text(today.format("M-D-YYYY"));

let timeHour = {
    "09:00am": "",
    "10:00am": "",
    "11:00am": "",
    "12:00pm": "",
    "1:00pm": "",
    "2:00pm": "",
    "3:00pm": "",
    "4:00pm": "",
    "5:00pm": "",
    "6:00pm": "",
    "7:00pm": "",
}

let specificHour = moment().format("H");

function displayHour() {
    for (let hour in timeHour) {
        // DOM element 
        let li = $('<li></li>');
        li.addClass('block');
        let span = $('<span></span>');
        span.attr('id', 'blockTime');
        span.text(hour);

        let textArea = $('<textarea></textarea>');
        textArea.attr('id', "blockText");
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

        // $("#blockBtn" + hour).on('click', saveEvent($("#blockText" + hour).val())); 

    }

    colorBlocks(specificHour)
}


    displayHour()

function colorBlocks(specificHour) {
    let block = $('.block')
    let blockNum = $('.block').length;
    let numbers = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    for (i = 0; i < blockNum; i++) {
        $(block[i]).attr('data-time', numbers[i])
    }

    for (i = 0; i < blockNum; i++) {

        let blockData = $(block[i]).data().time;
        if (blockData == specificHour) {
            $(block[i]).css("background-color", "grey")
        } else if (blockData < specificHour) {
            $(block[i]).css("background-color", "red")
        } else {
            $(block[i]).css("background-color", "green")
        }

        console.log("this is good");

    }

}



    // if (specificHour > timeHour[hour]) {
    //     console.log("past" + timeHour[hour]);
    //     li.css("background-color", "red");

    // }
    // if (specificHour === timeHour[hour]) {
    //     console.log("present" + timeHour[hour]);
    //     li.css("background-color", "grey");

    // }
    // if (specificHour < timeHour[hour]) {
    //     console.log("future" + timeHour[hour]);
    //     li.css("background-color", "green");
    // }



    // function saveEvent(eventText) {
//     console.log(eventText);


// }


// button.on('click', saveEvent)

// button.addEventListener('click', function(event) {
// event.preventDefault();




// 2) save once using the blockBtn

// -when clicked we want to grab text from input

// 3) save to local Storage
// -text grabbed will save to local storage
// -when refresh, info stays

// 4) add color to indicate past/present or future





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
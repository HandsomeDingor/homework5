
// set value
var todayEl = document.getElementById("currentDay")
var hour09El = document.getElementById("09")
var hour10El = document.getElementById("10")
var hour11El = document.getElementById("11")
var hour12El = document.getElementById("12")
var hour13El = document.getElementById("13")
var hour14El = document.getElementById("14")
var hour15El = document.getElementById("15")
var hour16El = document.getElementById("16")
var hour17El = document.getElementById("17")
var saveBtn9El = document.getElementById("button9")
var saveBtn10El = document.getElementById("button10")
var saveBtn11El = document.getElementById("button11")
var saveBtn12El = document.getElementById("button12")
var saveBtn13El = document.getElementById("button13")
var saveBtn14El = document.getElementById("button14")
var saveBtn15El = document.getElementById("button15")
var saveBtn16El = document.getElementById("button16")
var saveBtn17El = document.getElementById("button17")



// get local time 
function getLocaltime() {
    var today = moment().format('LLLL');
    todayEl.textContent = today;
}



//check currenthour and change the div color
function changeColor() {
    // show the current hour 
    var currentHour = moment().hour(); //number


    // test current hour
    console.log(currentHour)


    //using if to check if any hours are match
    if (currentHour < 9) {
        hour09El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 9) {
        hour09El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 9) {
        hour09El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 10) {
        hour10El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 10) {
        hour10El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 10) {
        hour10El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 11) {
        hour11El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 11) {
        hour11El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 11) {
        hour11El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 12) {
        hour12El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 12) {
        hour12El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 12) {
        hour12El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 13) {
        hour13El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 13) {
        hour13El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 13) {
        hour13El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 14) {
        hour14El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 14) {
        hour14El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 14) {
        hour14El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 15) {
        hour15El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 15) {
        hour15El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 15) {
        hour15El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 16) {
        hour16El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 16) {
        hour16El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 16) {
        hour16El.setAttribute("class", "description col-md-10 past")
    }

    if (currentHour < 17) {
        hour17El.setAttribute("class", "description col-md-10 future")
    }
    if (currentHour == 17) {
        hour17El.setAttribute("class", "description col-md-10 present")
    }
    if (currentHour > 17) {
        hour17El.setAttribute("class", "description col-md-10 past")
    }


}





// save input to local storage
var savecontent9 = function () {
    const key9 = hour09El.value;
    localStorage.setItem("09", key9)
}
var savecontent10 = function () {
    const key10 = hour10El.value;
    localStorage.setItem("10", key10)
}
var savecontent11 = function () {
    const key11 = hour11El.value;
    localStorage.setItem("11", key11)
}
var savecontent12 = function () {
    const key12 = hour12El.value;
    localStorage.setItem("12", key12)
}
var savecontent13 = function () {
    const key13 = hour13El.value;
    localStorage.setItem("13", key13)
}
var savecontent14 = function () {
    const key14 = hour14El.value;
    localStorage.setItem("14", key14)
}
var savecontent15 = function () {
    const key15 = hour15El.value;
    localStorage.setItem("15", key15)
}
var savecontent16 = function () {
    const key16 = hour16El.value;
    localStorage.setItem("16", key16)
}
var savecontent17 = function () {
    const key17 = hour17El.value;
    localStorage.setItem("17", key17)
}



// load data from local storage
hour09El.textContent = localStorage.getItem("09")
hour10El.textContent = localStorage.getItem("10")
hour11El.textContent = localStorage.getItem("11")
hour12El.textContent = localStorage.getItem("12")
hour13El.textContent = localStorage.getItem("13")
hour14El.textContent = localStorage.getItem("14")
hour15El.textContent = localStorage.getItem("15")
hour16El.textContent = localStorage.getItem("16")
hour17El.textContent = localStorage.getItem("17")




// run function 
changeColor()
getLocaltime()



// save button click event
saveBtn9El.addEventListener("click", savecontent9)
saveBtn10El.addEventListener("click", savecontent10)
saveBtn11El.addEventListener("click", savecontent11)
saveBtn12El.addEventListener("click", savecontent12)
saveBtn13El.addEventListener("click", savecontent13)
saveBtn14El.addEventListener("click", savecontent14)
saveBtn15El.addEventListener("click", savecontent15)
saveBtn16El.addEventListener("click", savecontent16)
saveBtn17El.addEventListener("click", savecontent17)




// this is Jquery if require to use

// $(".saveBtn").on("click", function () {
//     console.log("savebutton")
//     var Text = $(this).siblings(".description").val();
//     console.log("Text")
//     var time = $(this).parent().attr("id");
//     console.log("time")
//     localStorage.setItem(time, Text);
    
// }); 



// for (var i = 9; i < 18; i++) {
//     $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
// }

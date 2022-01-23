var todayEl = document.getElementById("currentDay")
var saveBtnEl = document.getElementsByClassName("saveBtn")
var descriptionEl = document.getElementsByClassName("description")
var hour09El = document.getElementById("09")
var hour10El = document.getElementById("10")
var hour11El = document.getElementById("11")
var hour12El = document.getElementById("12")
var hour13El = document.getElementById("13")
var hour14El = document.getElementById("14")
var hour15El = document.getElementById("15")
var hour16El = document.getElementById("16")
var hour17El = document.getElementById("17")

function getLocatime(){
    var today = moment().format('LLLL');
   
    todayEl.textContent = today;
}

getLocatime()

function changeColor(){
    // show the current hour
    var currentHour = moment().format('h');
    console.log(currentHour)

    if (currentHour < 9){
        hour09El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 9){
        hour09El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 9){
        hour09El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 10){
        hour10El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 10){
        hour10El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 10){
        hour10El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 11){
        hour11El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 11){
        hour11El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 11){
        hour11El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 12){
        hour12El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 12){
        hour12El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 12){
        hour12El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 13){
        hour13El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 13){
        hour13El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 13){
        hour13El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 14){
        hour14El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 14){
        hour14El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 14){
        hour14El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 15){
        hour15El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 15){
        hour15El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 15){
        hour15El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 16){
        hour16El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 16){
        hour16El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 16){
        hour16El.setAttribute("class","description col-md-10 past")
    }

    if (currentHour < 17){
        hour17El.setAttribute("class","description col-md-10 future")
    }
    if (currentHour == 17){
        hour17El.setAttribute("class","description col-md-10 present")
    }
    if (currentHour > 17){
        hour17El.setAttribute("class","description col-md-10 past")
    }





}
changeColor()








var saveDescription = function () {
    
    var text = descriptionEl.value;
    console.log(text)
    localStorage.setItem("time", JSON.stringify(text));

}




//saveBtnEl.addEventListener("click",saveDescription)
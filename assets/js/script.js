// set element
var todayEl = document.getElementById("currentDay")

// get local time 
function getLocatime(){
    var today = moment().format('LLLL');
    console.log(today);
    todayEl.textContent = today
}

getLocatime()


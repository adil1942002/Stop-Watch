var hrh1 = document.getElementById("hr")
var minh1 = document.getElementById("min")
var sech1 = document.getElementById("sec")
var startbtn = document.getElementById("start")
var resetbtn = document.getElementById("reset")
var hr = '00';
var min = '00';
var sec = '00';
function timeNow(){
hrh1.innerHTML = hr;
minh1.innerHTML = min;
sech1.innerHTML = sec;

}
timeNow();

var interval;
function timer(){
    sec++
    timeNow();
    if(sec == 10){
        min++
        timeNow();
        sec = 0;
        
    }
     
    if(min == 2){
        hr++;
        timeNow();
        min = 0;
    }
}

function start(){
    interval = setInterval(timer,1000);
    startbtn.innerHTML = "Stop"
    startbtn.setAttribute("onclick","stop()")
}
function stop(){
    clearInterval(interval)
    startbtn.setAttribute("onclick","start()")
    startbtn.innerHTML = "Resume"
}

function reset(){
    clearInterval(interval)
    hr = "00"
    min = "00"
    sec = "00"
    timeNow()
    startbtn.innerHTML = "Start"
    startbtn.setAttribute("onclick","start()")

}
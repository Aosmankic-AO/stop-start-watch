window.onload = function () {

//**VARIABLES*/
let seconds = 00;
let tens = 00;
//append variables
let appendSeconds = document.getElementById("seconds");
let appendTens = document.getElementById("tens");
//start, stop and reset variables]
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

//**Button functions*/
let interval;
//start button
startBtn.onclick = function() {
    console.log("start button clicked");
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};
//stop button
stopBtn.onclick = function() {
    console.log("stop button clicked");
    clearInterval(interval);
};
//reset button
resetBtn.onclick = function() {
    console.log("reset button clicked");
    clearInterval(interval);
    seconds = "00";
    tens = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;9
}

///////////////////////////////////////
//**Start Timer*/
    function startTimer() {
        console.log("startTimer function kicks off");
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        } else if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("tens > 99");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = "0";
        } if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }

}
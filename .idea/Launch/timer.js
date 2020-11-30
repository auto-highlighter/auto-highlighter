
// for formatting (hh:mm:ss:ms)
function timetoString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;
let highlightsArray = [];
let highlightsAsString = "";

function print(time) {
    document.getElementById("display").innerHTML = time;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timetoString(elapsedTime));
    }, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    stop();
    print("00:00:00");
    elapsedTime = 0;
}

function highlightTime() {
    highlightsArray.push(timetoString(elapsedTime));
    highlightsAsString += (timetoString(elapsedTime) + "<br>");
    document.getElementById("highlightTimesBody").innerHTML = highlightsAsString;
}

let startTimerButton = document.getElementById("startButton");
let stopTimerButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
let highlightTimeButton = document.getElementById("markHighlightButton");


startTimerButton.addEventListener("click", start);
stopTimerButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
highlightTimeButton.addEventListener("click", highlightTime);

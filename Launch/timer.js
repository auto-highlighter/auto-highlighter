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

	let formattedMM = mm.toString().padStart(2, '0');
	let formattedSS = ss.toString().padStart(2, '0');
	let formattedMS = ms.toString().padStart(2, '0');

	return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval = null;
let highlightsArray = [];
let highlightsAsString = '';

function print(time) {
	document.getElementById('display').innerHTML = time;
}

function start() {
	startTime = Date.now() - elapsedTime;

	if (timerInterval == null) {
		timerInterval = setInterval(function printTime() {
			elapsedTime = Date.now() - startTime;
			print(timetoString(elapsedTime));
		}, 10);
		startTimerButton.disabled = true;
	}
}

function stop() {
	clearInterval(timerInterval);
	timerInterval = null;
	startTimerButton.disabled = false;
}

function reset() {
	stop();
	print('00:00:00');
	highlightsArray = [];
    elapsedTime = 0;
    document.getElementById(
		'highlightTimesBody',
	).innerHTML = '';
}

function highlightTime() {
	highlightsArray.push(elapsedTime);
	highlightsAsString += timetoString(elapsedTime) + '<br>';
	document.getElementById(
		'highlightTimesBody',
	).innerHTML = highlightsAsString;

	let jsonString =
		'data:text/json;charset=utf-8,' +
		encodeURIComponent(JSON.stringify(highlightsArray));
	downloadButtonInnerAnchor.setAttribute('href', jsonString);
}

let startTimerButton = document.getElementById('startButton');
let stopTimerButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');
let highlightTimeButton = document.getElementById('markHighlightButton');
let downloadButtonInnerAnchor = document.getElementById(
	'downloadButtonInnerAnchor',
);

startTimerButton.addEventListener('click', start);
stopTimerButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
highlightTimeButton.addEventListener('click', highlightTime);

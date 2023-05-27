(function(){
////  ---- add HTML elements into Java Script ------->
	var startstopButton = document.querySelector('.start_stop');
	var	splitButton = document.querySelector('.split');
	var	resetButton = document.querySelector('.reset');
	var	time = document.querySelector('.time');
	var	parent = document.querySelector('.stopwatch');

////  --------------------------  Creat the varibles.____Timer function starts--->
	var Timer =  function() {
		var timerId;
		var	globalDate;
		var	startDateSplit;
		var	deltaMsSplit;
		var	currentDate;
		var	currentMs = 0;
		var	index = 1;
		var	flag = true;
		var	stopflag = false;
////------------------------------------------------------------
		function calcTime (currentTime, obj) {
			var ms = currentTime - globalDate;
			obj.innerHTML = formatTime(ms);
			return currentTime;
		}
////------------------------------------------------------------
		function formatTime(msValue) {
			var dataStr = new Date(msValue).toUTCString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1');
			var msStr = String(msValue%1000);
			while (msStr.length < 3) {
				msStr = '0' + msStr;
			}
			dataStr = dataStr + '.' + msStr;
			return dataStr;
		}
////------------------------------------------------------------
		function addSplitMessage (text, ms) {
			var splitMsg = document.createElement('p');
			splitMsg.innerHTML = index + ' ' + text + ' ' + formatTime(ms);
			splitMsg.setAttribute('class','splitMsg');
            splitMsg.classList.add('h3');
			parent.appendChild(splitMsg);
		}
////------------------------------------------------------------
		this.startTimer = function () {
			if (flag) {
				if (!globalDate) {
					globalDate = startDateSplit = new Date;
				} else {
					startDateSplit = new Date;
				}

				if (stopflag) {
					currentMs = currentDate - new Date;
					globalDate = new Date(globalDate.getTime() - currentMs);
				}
				timerId = setTimeout(function run() {
					currentDate = calcTime(new Date, time);
					timerId = setTimeout(run, 1);
				}, 1);

				flag = false;
				startstopButton.innerHTML = 'Stop';
				splitButton.disabled = false;
			} else {
				clearInterval(timerId);
				startstopButton.innerHTML = "Start";
				deltaMsSplit = currentDate-startDateSplit;
				addSplitMessage ('Stop:',deltaMsSplit);
				index++;
				splitButton.disabled = true;
				flag = true;
				stopflag = true;
			}
		};
////------------------------------------------------------------
		this.splitTimer = function() {
			var deltaMsSplit = new Date -startDateSplit;
			addSplitMessage ('Split:',deltaMsSplit);
			index++;
		},
////------------------------------------------------------------
		this.resetTimer = function () {
			clearInterval(timerId);
			globalDate = currentDate;
			calcTime(globalDate, time);
			startstopButton.innerHTML = "Start";
			index = 1;
			var msgs = document.querySelectorAll('.splitMsg');
			[].forEach.call(msgs, function(el) {
				el.parentNode.removeChild(el);
			});
			splitButton.disabled = true;
			flag = true;
		}
	}
////------------------------------------------------------------
	var stopWatch = new Timer();

	document.addEventListener( "DOMContentLoaded", function() {
		startstopButton.addEventListener('click', stopWatch.startTimer);
		splitButton.addEventListener('click', stopWatch.splitTimer);
		resetButton.addEventListener('click', stopWatch.resetTimer);
	});
})();

window.onload = function(){
	var timer = new TimerDisplayController()
	timer.init()
}

function TimerDisplayController() {
	this.sendingMessages = {
		start: 'start the clock',
		time: 'give me the time',
		stop: 'stop the clock'
	}
}

TimerDisplayController.prototype = {
	init: function() {
		this.requestTheTime()
		this.addButtonListeners()
	},
	requestTheTime: function() {
		var sendingMessage = this.sendingMessages.time
		chrome.runtime.sendMessage({message: sendingMessage}, function(response) {
				TimerDisplayUpdater.updateValues(response)
		})
		setInterval(function() {
			chrome.runtime.sendMessage({message: sendingMessage}, function(response) {
				TimerDisplayUpdater.updateValues(response)
			})
		}, 100)
	},
	addButtonListeners: function() {
		document.getElementById('startButton').addEventListener('click', function() {
			this.sendMessage(this.sendingMessages.start)
		}.bind(this))
		document.getElementById('stopButton').addEventListener('click', function() {
			this.sendMessage(this.sendingMessages.stop)
		}.bind(this))
	},
	sendMessage: function(messageType) {
		console.log('sending message')
		chrome.runtime.sendMessage({message: messageType}, function(){})
	},
}
TimerDisplayUpdater = {
	updateValues: function(timeObject) {
		var time = timeObject
		TimerDisplayUpdater.updateHours(time.hours)
		TimerDisplayUpdater.updateMinutes(time.minutes)
		TimerDisplayUpdater.updateSeconds(time.seconds)
	},
	updateHours: function(hours) {
		document.getElementById('hours').innerText = hours.toString()
	},
	updateMinutes: function(minutes) {
		if (minutes < 10) {
			var minuteDisplay = '0' + minutes.toString()
		} else {
			var minuteDisplay = mintues.toString()
		}
		document.getElementById('minutes').innerText = minuteDisplay
	},
	updateSeconds: function(seconds) {
		if (seconds < 10) {
			var secondDisplay = '0' + seconds.toString()
		} else {
			var secondDisplay = seconds.toString()
		}
		document.getElementById('seconds').innerText = secondDisplay
	}
}


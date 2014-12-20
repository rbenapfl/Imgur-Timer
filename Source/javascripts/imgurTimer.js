window.onload = function(){
	var timer = new TimerDisplayController()
	timer.init()
}

function TimerDisplayController() {
	this.sendingMessages = {
		start: 'start the clock',
		time: 'give me the time',
		reset: 'reset the clock'
	}
}

TimerDisplayController.prototype = {
	init: function() {
		this.requestTheTime()
		this.addButtonListeners()
	},
	requestTheTime: function() {
		var sendingMessage = this.sendingMessages.time
		setInterval(function() {
			chrome.runtime.sendMessage({message: sendingMessage}, function(response) {
				TimerDisplayUpdater.updateValues(response)
			})
		}, 1000)
	},
	addButtonListeners: function() {

	},
	sendMessage: function(messageType) {

	},
	updateDisplay: function() {

	}
}

TimerDisplayUpdater = {
	updateValues: function(timeObject) {
		var time = timeObject
		TimerDisplayUpdater.updateHours(time.hours)
		TimerDisplayUpdater.updateMinutes(time.minutes)
		TimerDisplayUpdater.updateSeconds(time.seconds)
	},
	updateHours: function(hours) {
		console.log(hours)
	},
	updateMinutes: function(minutes) {
		console.log(minutes)
	},
	updateSeconds: function(seconds) {
		console.log(seconds)
	}
}



window.onload = function(){
	var timeController = new TimeController(new TimeModel)
	timeController.init()
}


function TimeController(timeModel) {
	self = this
	this.model = timeModel
	this.interval = ''
}

TimeController.prototype = {
	init: function() {
		chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			self.handleRequest(request, sender, sendResponse)
		})
	},
	handleRequest: function(request, sender, sendResponse) {
		var requestMessage = request.message
		if (requestMessage === 'give me the time') {
			sendResponse(self.returnTimeToClient())
		}
		else if (requestMessage === 'start the clock') {
			self.startTheClock()
		}
		else if (requestMessage === 'reset the clock') {
			self.resetTheClock()
			self.stopTheClock()
		}
	},
	startTheClock: function() {

	},
	resetTheClock: function() {
		this.model.clearTime()
	},
	stopTheClock: function() {

	},
	pollUrls: function() {

	},
	evaluateUrl: function() {

	},
	addSecond: function() {
		this.model.addSecond()
	},
	returnTimeToClient: function() {
		return this.model.returnTimeObject()
	}
}

function TimeModel() {
	this.hours = 0
	this.minutes = 0
	this.seconds = 0
}

TimeModel.prototype = {
	addSecond: function() {
		if (this.seconds === 59) {
			this.seconds = 0
			this.addMinute()
		}
		else {
			this.seconds += 1
		}
	},
	addMinute:function() {
		if (this.minutes === 59) {
			this.minutes = 0
			this.addHour()
		}
		else {
			this.minutes += 1
		}
	},
	addHour: function() {
		this.hours += 1
	},
	clearTime: function() {
		this.hours = 0
		this.minutes = 0
		this.seconds = 0
	},
	returnTimeObject: function() {
		return {hours: this.hours, minutes: this.minutes, seconds: this.seconds}
	}
}

// setInterval(function() {
// 	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
// 		if (tabs.length === 0) {
// 			console.log("all tabs are closed")
// 		}
// 		else {
// 			console.log(tabs[0].url)
// 		}
// 	}) 
// }, 1000);

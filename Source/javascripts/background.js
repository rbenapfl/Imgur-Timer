
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
			self.handleRequest(request.greeting)
		})
	},
	handleRequest: function(requestMessage) {
		console.log(requestMessage)
	},
	startTheClock: function() {

	},
	resetTheClock: function() {

	},
	pollUrls: function() {

	},
	evaluateUrl: function() {

	},
	addSecond: function() {

	},
	returnTimeToClient: function() {

	}
}

function TimeModel() {
	this.hours = 0
	this.minutes = 0
	this.seconds = 0
}

TimeModel.prototype = {
	addSecond: function() {

	},
	addMinute:function() {

	},
	addHour: function() {

	},
	returnTimeObject: function() {

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

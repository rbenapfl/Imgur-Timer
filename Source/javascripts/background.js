var hours = 0
var minutes = 0
var seconds = 0
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.greeting === 'give me the time')
	sendResponse({hours: hours, minutes: minutes, seconds: seconds})
})

setInterval(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
		if (tabs.length === 0) {
			console.log("all tabs are closed")
		}
		else {
			console.log(tabs[0].url)
		}
	}) 
}, 1000);

var number = 2
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	number += 1
	sendResponse({message: number})
})

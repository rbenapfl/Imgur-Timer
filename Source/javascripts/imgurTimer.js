

chrome.runtime.sendMessage({greeting: 'give me the time'}, function(response) {
	console.log(response)
})

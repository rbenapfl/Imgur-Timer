

chrome.runtime.sendMessage({message: 'give me the time'}, function(response) {
	console.log(response)
})

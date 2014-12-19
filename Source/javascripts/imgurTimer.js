

chrome.runtime.sendMessage({message: 'start the clock'}, function(response) {
	console.log(response)
})


//'give me the time'
//'reset the clock'
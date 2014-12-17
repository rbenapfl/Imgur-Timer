// document.addEventListener('DOMContentLoaded', function () {
// 	//only runs when window is open via DOMContentLoaded
// 	// var counter = 0
// 	// var addToCounter = function() {
// 	// 	counter += 1
// 	// 	document.getElementById('timeDisplay').innerText = counter
// 	// }
// 	// setInterval(function(){ addToCounter()}, 3000);

// 	document.getElementById('timeDisplay').innerText = 'Hi'
// })
// setInterval(function() { 
// 	var mytext = document.createTextNode('hi')
// 	document.getElementById('timeDisplay').appendChild(mytext)
// }, 1000)

// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//   	var mytext = document.createTextNode('changed')
// 	document.getElementById('timeDisplay').appendChild(mytext)
//   }
// })

chrome.runtime.sendMessage({greeting: 'load'}, function(response) {
	console.log(response.message)
	return true
})

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//  	if (request.greeting === "heard you") {
//    		var text = request.domText
//    		document.getElementById('timeDisplay').appendChild(text)
//   	}
// });
Imgur-Timer
#####https://chrome.google.com/webstore/detail/imgur-timer/pocknnioahmfjbngbjaipciepgcamnko
===========

Chrome Extension that times hours wasted on imgur sessions!
#####I built this extension as a novelty little gadget for imgur users to use.
#####The main functionality of the extension is that it is a timer that will only count up if the user is browsing on imgur.
#####It provided a few challenges such as having code loaded into an extension that won't be tied to having the popup window open.  I achieved this by using a background script and then sending chrome messages to it in order to let it know what functions I needed running.
###The coded ended up being really neat with my background scripts running based on what message they got!
![requesthandling](http://i.imgur.com/vNzenvz.jpg)

#####Not much else to say about this extension besides the fact that I needed to allow for "tabs" as a permission on my extension in order to test the url for imgur.com.  When you download it in the store it prompts you that the extension has the ability to read and change all of your web data..... That is a huge problem because the "tabs" permission gave me that ability which I only used to read the active tab URl.  Really unfair to clump that together with changing all web data, and it was an important complaint of people that saw the extension.  Also including a manual start, stop, and reset function on the timer that starts the whole url check process made people think it was just a start and stop timer.  It seemed a bit odd to me to not give the user the option to pause it if they didn't want it running, so I don't know if that's really a design flaw.  Either way it was just a novelty gadget I made with some cool javascript and chrome extension tricks, but I'm a bit perturbed by the whole web data changing warning and probably won't develop another one on my own anytime soon.

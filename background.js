chrome.runtime.onMessage.addListener(
  function(response, sender, sendResponse) {
  	chrome.storage.sync.set({"word": response},function(){
  		if(chrome.runtime.error){
  			console.log("Runtime error.")
  		}
  	});
   });
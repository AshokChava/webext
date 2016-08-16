//window.alert(window.location.href);
chrome.runtime.onMessage.addListener(executeQuery);
function executeQuery(request, sender, sendResponse) {
	window.alert(document.defaultView.wrappedJSObject.idcToken);
	//alert(request.queryString);
	var url = window.location.href;
	var newUrl = "";
	urlparts = url.split("?");
	if (urlparts.length >= 2) {
		newUrl = urlparts[0];
	}
	newUrl = newUrl + "?IdcService="+request.queryString;

	window.location.replace(newUrl);
	
 
}

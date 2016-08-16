//window.alert(window.location.href);
chrome.runtime.onMessage.addListener(executeQuery);
function executeQuery(request, sender, sendResponse) {
	alert(request.queryString);
	window.location.href=window.location.href+"&"+request.queryString;
 
}

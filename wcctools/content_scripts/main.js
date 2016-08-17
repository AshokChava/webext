chrome.runtime.onMessage.addListener(executeQuery);

function executeQuery(request, sender, sendResponse) {
	//window.alert(document.defaultView.wrappedJSObject.idcToken);
	//window.alert(request.queryString.length);
	// removeEverything();
	if(request.queryString!=null && request.queryString.length>0){
		var url = window.location.href;
		var newUrl = "";
		urlparts = url.split("?");
		if (urlparts.length >= 2) {
			newUrl = urlparts[0];
		}
		newUrl = newUrl + "?IdcService="+request.queryString;
		window.location.replace(newUrl);
	}else if(request.flagValue!=null&&request.flagValue.length>0){
		if(request.flagValue=="applyClear"){
			var url=window.location.href;
			url=url.replace("&IsSoap=1","");
			url=url.replace("&IsJava=1","");
			url=url.replace("&IsPageDebug=1","");
			window.location.replace(url);
		}else if(request.flagValue=="getIdcToken"){
			//window.alert(request.flagValue);
			sendResponse({responsewithToken: document.defaultView.wrappedJSObject.idcToken});
		}else{
			var url = window.location.href+request.flagValue;
			window.location.replace(url);
		}
	}
	chrome.runtime.onMessage.removeListener(executeQuery);
}

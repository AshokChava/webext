chrome.tabs.executeScript(null, {
    file: "/content_scripts/main.js"
  });
  function init() {
	
    addparam = document.querySelector('#addparam');
    gobtn = document.querySelector('#gobtn');
	addparam.addEventListener('click', addParamToArgs, false);
    gobtn.addEventListener('click', executeService, false);
}    
document.addEventListener('DOMContentLoaded', init);
  function executeService(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {queryString:document.getElementById("service").value+"&"+document.getElementById("args").value });
  });
  }
  function addParamToArgs(){
	  document.getElementById("args").value=window.document.defaultView.wrappedJSObject.idcToken;
	  if(document.getElementById("args").value.length==0){
		document.getElementById("args").value=document.getElementById("param").value+"="+document.getElementById("paramvalue").value;
	  }else{
		document.getElementById("args").value=document.getElementById("args").value+"&"+document.getElementById("param").value+"="+document.getElementById("paramvalue").value;
	  }
  }
  
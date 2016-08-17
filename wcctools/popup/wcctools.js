
chrome.tabs.executeScript(null, {
    file: "/content_scripts/main.js"
  });

  function init() {
	
    addparam = document.querySelector('#addparam');
    gobtn = document.querySelector('#gobtn');
	document.querySelector('#issoapbtn').addEventListener('click', addIsSoap, false);
	document.querySelector('#isjavabtn').addEventListener('click', addIsJava, false);
	document.querySelector('#scriptdebugtracebtn').addEventListener('click', addScriptDebugTrace, false);
	document.querySelector('#clearbtn').addEventListener('click', applyClear, false);
	document.querySelector('#resetbtn').addEventListener('click', resetAll, false);
	addparam.addEventListener('click', addParamToArgs, false);
    gobtn.addEventListener('click', executeService, false);
	document.querySelector('#servicesel').addEventListener('change', selectService, false);
	
}    
document.addEventListener('DOMContentLoaded', init);
function selectService(){
	if(document.getElementById("servicesel").value.length>0){
		document.getElementById("selectservice").value=document.getElementById("servicesel").value;
	  }
}
  function executeService(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {queryString:document.getElementById("selectservice").value+"&"+document.getElementById("args").value });
  });
  }
  function addParamToArgs(){
	  //document.getElementById("args").value=window.document.defaultView.wrappedJSObject.idcToken;
	  //window.alert(document.getElementById("param").value);
	  if(document.getElementById("param").value=="idcToken"){
		  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {flagValue:"getIdcToken"},recieveToken);
		});
	  }else  if(document.getElementById("args").value.length==0){
		document.getElementById("args").value=document.getElementById("param").value+"="+document.getElementById("paramvalue").value;
	  }else{
		document.getElementById("args").value=document.getElementById("args").value+"&"+document.getElementById("param").value+"="+document.getElementById("paramvalue").value;
	  }
  }
  function recieveToken(message){
	  if(document.getElementById("args").value.length==0){
		 document.getElementById("args").value="idcToken="+message.responsewithToken;
	  }else{
		 document.getElementById("args").value=document.getElementById("args").value+"&idcToken="+message.responsewithToken;
	  }
	 
  }
  function addIsSoap(){
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {flagValue:"&IsSoap=1" });
  });
  }
  function addIsJava(){
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {flagValue:"&IsJava=1" });
  });
  }
  function addScriptDebugTrace(){
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {flagValue:"&IsPageDebug=1" });
  });
  }
  function applyClear(){
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {flagValue:"applyClear" });
  });
  
  }
  function resetAll(){
	  document.getElementById("paramvalue").value="";
	  document.getElementById("args").value="";
  } 
  
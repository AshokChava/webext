chrome.tabs.executeScript(null, {
    file: "/content_scripts/main.js"
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {queryString: "You are good"});
  });
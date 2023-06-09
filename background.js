// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    // for the current tab, inject the "inject.js" file & execute it

    chrome.tabs.executeScript(null, { file: "jquery-3.1.0.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "inject.js" });
});
});

"use strict";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getAutoplayPreference") {
        chrome.storage.sync.get('autoplayPreference', function (data) {
            sendResponse({autoplayPreference: data.autoplayPreference});
        });
        return true; // Return true to indicate asynchronous response.
    }
});
//# sourceMappingURL=background.js.map
"use strict";
//# sourceMappingURL=popup.js.map

document.addEventListener('DOMContentLoaded', function() {


    var checkbox = document.querySelector('input[type="checkbox"]');

    chrome.storage.sync.get('autoplayPreference', function(data) {
        if (data.autoplayPreference !== undefined) {
            checkbox.checked = data.autoplayPreference;
        }
        console.log('Loaded preference:', data.autoplayPreference);
    });
    
    checkbox.addEventListener('change', function() {

        chrome.storage.sync.set({'autoplayPreference': checkbox.checked}, function() {
            console.log('USER WANTS:  ' + checkbox.checked);
        });
    
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {autoplay: checkbox.checked});
        });
    });
    
});

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
    function sendCheckboxStateToPage(checkboxState) {
        document.dispatchEvent(new CustomEvent('checkboxStateChange', { detail: checkboxState }));
    }
    checkbox.addEventListener('change', function() {
        // remember the state of the switch even when closing the popup
        chrome.storage.sync.set({'autoplayPreference': checkbox.checked}, function() {
            console.log('Autoplay preference is set to ' + checkbox.checked);
        });
        // ^
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: sendCheckboxStateToPage,
                args: [checkbox.checked]
            });
        });
    });
        
});

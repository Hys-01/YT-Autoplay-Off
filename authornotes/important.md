switched to manifest version 2 to avoid script being blocked by chrome/brave 

error message stil shows with 2 but code works 



Maybe in future if wanting to use manifest 3 again, try chrome.tabs.executeScript. Have not tried yet. 



CHATGPT-4: "can't directly use chrome.storage.sync in your content script is that Chrome's security model restricts which APIs content scripts can access to prevent potentially malicious behavior.

The common workaround, as discussed, is to use the MESSAGING SYSTEM (chrome.runtime.sendMessage from content scripts and chrome.runtime.onMessage.addListener in background scripts) to request that the background script perform operations that content scripts can't do directly. This keeps your extension secure while still allowing different parts of your extension to communicate and share data as needed."
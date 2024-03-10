CHATGPT-4: "can't directly use chrome.storage.sync in your content script is that Chrome's security model restricts which APIs content scripts can access to prevent potentially malicious behavior.

The common workaround, as discussed, is to use the MESSAGING SYSTEM (chrome.runtime.sendMessage from content scripts and chrome.runtime.onMessage.addListener in background scripts) to request that the background script perform operations that content scripts can't do directly. This keeps your extension secure while still allowing different parts of your extension to communicate and share data as needed."

1. when first installing extension.... something doesnt go right (least important)

2. when opening up a brand new tab, (and entering a playlist WITHOUT tampering with popup), injectscript runs, CAA status is set to false, regardless of the state of the toggle. When openign up popup, toggling the switch does NOTHING. CAA status is NOT updated. Only fixed when refreshing the page, then extension works for THAT tab indefintiely after. 
    I assume userpreference is being ignored.... MUST CHECK FOR PREFERENCE BEFORE INJECTING SCRIPT WHEN A NEW TAB OPENS.

    ** fixued issue with initial toggle not responding, now it does. 
    Left to fix - default when opening a new tab is always caa=false regardless of state of toggle. But a quick flick fixes it

DD/MM/YYYY
5/03/2024
    - appears everything is fixed.
    
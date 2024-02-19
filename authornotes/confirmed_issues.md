1. when first installing extension.... something doesnt go right (least important)

2. when opening up a brand new tab, (and entering a playlist WITHOUT tampering with popup), injectscript runs, CAA status is set to false, regardless of the state of the toggle. When openign up popup, toggling the switch does NOTHING. CAA status is NOT updated. Only fixed when refreshing the page, then extension works for THAT tab indefintiely after. 
    I assume userpreference is being ignored.... MUST CHECK FOR PREFERENCE BEFORE INJECTING SCRIPT WHEN A NEW TAB OPENS.

    ** fixued issue with initial toggle not responding, now it does. 
    Left to fix - default when opening a new tab is always caa=false regardless of state of toggle. But a quick flick fixes it
    
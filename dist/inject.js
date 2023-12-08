"use strict";
//inject.ts
// CREDIT: stackbykumbi   stackoverflow https://stackoverflow.com/questions/67439012/chrome-extension-manifest-v3-content-security-policy
function injectScript(source_script) {
    // externally inject to avoid content policy YT on manifest v3
    const script = document.createElement('script');
    script.src = source_script;
    script.onload = () => {
        script.remove(); // should remove it from document after
    };
    (document.head || document.documentElement).appendChild(script);
}
let source_script = chrome.runtime.getURL('/script.js');
injectScript(source_script);
//# sourceMappingURL=inject.js.map
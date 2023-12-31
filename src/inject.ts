//inject.ts
// CREDIT: stackbykumbi   stackoverflow https://stackoverflow.com/questions/67439012/chrome-extension-manifest-v3-content-security-policy

function injectScript(source_script: any) {
    // externally inject to avoid content policy YT on manifest v3

    console.log('INJECTSCRIPT RUNNING')
    const script = document.createElement('script') 
    script.src = source_script

    script.onload = () => {    // = function() {} isnt working using this keyword
        script.remove();    // should remove it from document after
    }
    (document.head || document.documentElement).appendChild(script);    
}

let source_script = chrome.runtime.getURL('/dist/script.js')
injectScript(source_script);
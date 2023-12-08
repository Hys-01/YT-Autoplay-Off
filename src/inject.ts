function injectScript(source_script: any) {
    const script = document.createElement('script') 
    script.src = source_script
    script.onload = () => {    // = function() {} isnt working using this keyword
        this.remove();    // should remove it from document after
    }
    (document.head || document.documentElement).appendChild(script);    
}

source_script = '/script.js'
injectScript(source_script);
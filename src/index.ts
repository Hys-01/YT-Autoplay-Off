function isInPlaylist(): boolean { 
    /* 
    checks if the current URL is in/part of a youtube playlist clicked on by the user. 
    DOES NOT check if current url video is part of any playlist created by anyone
    */
    return window.location.href.includes("list="); 
}


function run() { 
    if (isInPlaylist()) { 
        let script = document.createElement("script"); 
        script.appendChild(document.createTextNode('(' + function() { 
            function noAutoAdvance() {
                const manager: any = document.querySelector('yt-playlist-manager');
                if (manager) { 
                    manager.canAutoAdvance_ = false;
                }
            }
            setInterval(noAutoAdvance, 500);
        }.toString() + ')()'));
        document.body.appendChild(script);
    }   
}
console.log("MY SCRIPT!", run());



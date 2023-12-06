function isInPlaylist(): boolean { 
    /* 
    checks if the current URL is in/part of a youtube playlist clicked on by the user. 
    DOES NOT check if current url video is part of any playlist created by anyone
    */
    return window.location.href.includes("list="); 
}


function Turn_Autoplay_Off() { 

    // check if current video is in playlist
    if (isInPlaylist()) {
        
        // make a script, and append anonymous function to document, to asyncronously set AutoAdvance property to false, and to repeat at 0.5s intervals
        let script = document.createElement("script"); 
        script.appendChild(document.createTextNode('(' + function() { 
            function AutoAdvance_Off() {
                const manager: any = document.querySelector('yt-playlist-manager');
                if (manager) { 
                    manager.canAutoAdvance_ = false;
                }
            }
            setInterval(AutoAdvance_Off, 500);
        }.toString() + ')()'));
        document.body.appendChild(script);
    }   
}
console.log("MY SCRIPT!", Turn_Autoplay_Off());



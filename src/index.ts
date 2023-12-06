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
        let script: any = document.createElement("script"); 
        script.appendChild(document.createTextNode('(' + function() { 
            // use anonymouse function to convert this block to IIFE, otherwise it keeps failing
            // REMEMBER FOR FUTURE: IIFES CREATE *PRIVATE* SCOPE THAT PROTECTS THIS SCRIPT FROM INTERFERENCE FROM WEBPAGE

            function AutoAdvance_Off() {
                // this function gets the query responsible for playlists, and changes the canAutoAdvance_ property
                const manager: any = document.querySelector('yt-playlist-manager');
                if (manager) { 
                    manager.canAutoAdvance_ = false;
                }
            }
            // repeat every 500 millisecond
            setInterval(AutoAdvance_Off, 500);
        
        }.toString() + ')()'));  // converting this all to string to serve as script
        
        // append custom script to bottom of page. 
        document.body.appendChild(script); 
    }   
}
console.log("MY SCRIPT!", Turn_Autoplay_Off());



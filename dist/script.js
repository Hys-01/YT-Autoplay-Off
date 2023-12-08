"use strict";
function isInPlaylist() {
    /*
    checks if the current URL is in/part of a youtube playlist clicked on by the user.
    DOES NOT check if current url video is part of any playlist created by anyone
    */
    return window.location.href.includes("list=");
}
function turn_Autoplay_Off() {
    // check if current video is in playlist
    if (isInPlaylist()) {
        // make a script, and append anonymous function to document, to asyncronously set AutoAdvance property to false, and to repeat at 0.5s intervals
        let script = document.createElement("script");
        script.appendChild(document.createTextNode('(' + function () {
            // use anonymouse function to convert this block to IIFE, otherwise it keeps failing
            // REMEMBER FOR FUTURE: IIFES CREATE *PRIVATE* SCOPE THAT PROTECTS THIS SCRIPT FROM INTERFERENCE FROM WEBPAGE
            function autoAdvance_Off() {
                // this function gets the query responsible for playlists, and changes the canAutoAdvance_ property
                const manager = document.querySelector('yt-playlist-manager');
                if (manager) {
                    manager.canAutoAdvance_ = false;
                }
            }
            // repeat every 1/5 sec
            setInterval(autoAdvance_Off, 200);
        }.toString() + ')()')); // converting this all to string to serve as script
        // append custom script to bottom of page. 
        document.body.appendChild(script);
    }
}
console.log("MY SCRIPT!", turn_Autoplay_Off());
//# sourceMappingURL=script.js.map
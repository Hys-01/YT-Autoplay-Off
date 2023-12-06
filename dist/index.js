"use strict";
function isInPlaylist() {
    /*
    checks if the current URL is in/part of a youtube playlist clicked on by the user.
    DOES NOT check if current url video is part of any playlist created by anyone
    */
    return window.location.href.includes("list=");
}
function stopAutoplay() {
    /*
    stops loading the next video in the playlist
    */
    function noAutoAdvance() {
        const manager = document.querySelector('yt-playlist-manager');
        if (manager) {
            manager.canAutoAdvance_ = false;
            console.log('check status', manager.canAutoAdvance_);
        }
    }
    setInterval(noAutoAdvance, 500);
}
function run() {
    if (isInPlaylist()) {
        let script = document.createElement("script");
        script.appendChild(document.createTextNode('(' + stopAutoplay + ')()'));
        document.body.appendChild(script);
    }
}
console.log("MY SCRIPT!", run());
//# sourceMappingURL=index.js.map
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
        }
    }
    noAutoAdvance();
}
function run() {
    if (isInPlaylist()) {
        stopAutoplay();
    }
}
console.log("MY SCRIPT!", run());
//# sourceMappingURL=index.js.map
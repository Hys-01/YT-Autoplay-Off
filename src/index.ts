function isInPlaylist(): boolean { 
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
        const manager: any = document.querySelector('yt-playlist-manager');
        if (manager) {
            console.log('off!')
            manager.canAutoAdvance_ = false;
        }

    }
    setInterval(noAutoAdvance, 500);


}

function run() { 
    if (isInPlaylist()) { 
        stopAutoplay(); 
    }
}

console.log("MY SCRIPT!", run());



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
    let script = document.createElement("script"); 
    script.type = "text/javascript"; // compiled into js

    // the actual script
    script.innerText = 
        ` 
    
        `;

}



console.log("MY SCRIPT!", isInPlaylist());



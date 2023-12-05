function isInPlaylist(): boolean { 
    return window.location.href.includes("list="); 
}

console.log("MY SCRIPT!", isInPlaylist());
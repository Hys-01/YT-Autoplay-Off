function isInPlaylist(): boolean { 
    return window.location.href.includes("link="); 
}

console.log(isInPlaylist());
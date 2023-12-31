"use strict";
let userAutoplayPreference = null;
function isInPlaylist() {
    /*
    checks if the current URL is in/part of a youtube playlist clicked on by the user.
    DOES NOT check if current url video is part of any playlist created by anyone
    */
    return window.location.href.includes("list=");
}
///////////////////////// REMEMBER TO COMPILE
function changeAutoAdvance() {
    // this function gets the query responsible for playlists, and changes the canAutoAdvance_ property
    //userpref here is null
    const manager = document.querySelector('yt-playlist-manager');
    if (manager) {
        manager.canAutoAdvance_ = userAutoplayPreference !== null ? userAutoplayPreference : false; // if user used the switch, set to their preference. IF they didnt, automatically set to false
    }
    console.log('CAA STATUS', manager.canAutoAdvance_);
}
;
function toggle_YT_Autoplay() {
    // check if current video is in playlist
    if (isInPlaylist()) {
        // make a script, and append anonymous function to document, to asyncronously set AutoAdvance property to false, and to repeat at 0.5s intervals
        let script = document.createElement("script");
        script.appendChild(document.createTextNode('(' + function () {
            // use anonymouse function to convert this block to IIFE, otherwise it keeps failing
            // REMEMBER FOR FUTURE: IIFES CREATE *PRIVATE* SCOPE THAT PROTECTS THIS SCRIPT FROM INTERFERENCE FROM WEBPAGE
            // repeat every 1/5 sec
            setInterval(changeAutoAdvance, 200);
        }.toString() + ')()')); // converting this all to string to serve as script
        // append custom script to bottom of page. 
        document.body.appendChild(script);
    }
}
document.addEventListener('checkboxStateChange', function (e) {
    const checkboxState = e.detail;
    userAutoplayPreference = checkboxState;
});
console.log("MY SCRIPT!", toggle_YT_Autoplay());
//# sourceMappingURL=script.js.map
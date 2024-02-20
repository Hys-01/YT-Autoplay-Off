"use strict";
// Define a variable to store the user's autoplay preference, initially set to null indicating no preference has been set yet.
let userAutoplayPreference = null;
/**
 * Checks if the current URL indicates that the user is viewing a YouTube playlists.
 * @returns {boolean} True if the URL contains a playlist identifier, otherwise false
 */
function isInPlaylist() {
    /*
    checks if the current URL contains "list=" used by YT to identify playlists
    */
    return window.location.href.includes("list=");
}
// Function to modify the autoplay behavior of YouTube's playlist based on the user's preference
function changeAutoAdvance() {
    // gets the query responsible for playlists
    const manager = document.querySelector('yt-playlist-manager');
    // If a user preference is set, use it; otherwise, default to false to disable autoplay
    if (manager) {
        manager.canAutoAdvance_ = userAutoplayPreference !== null ? userAutoplayPreference : false; // if user used the switch, set to their preference. IF they didnt, automatically set to false
    }
    // DEBUGGING- Log the status of autoplay functionality to the console for debugging
    console.log('CAA STATUS', manager.canAutoAdvance_);
}
;
/**
 * Toggles YouTube autoplay feature by injecting a script that periodically updates the autoplay setting
 */
function toggle_YT_Autoplay() {
    // check if current video is in playlist
    if (isInPlaylist()) {
        // Create a script element to be injected into the page
        let script = document.createElement("script");
        // Append an immediately invoked function expression (IIFE) to the script
        // This IIFE will periodically call changeAutoAdvance to update the autoplay setting
        script.appendChild(document.createTextNode('(' + function () {
            // The IIFE creates a private scope to avoid interference from other scripts
            // Set an interval to call changeAutoAdvance every 200ms.
            setInterval(changeAutoAdvance, 200);
        }.toString() + ')()')); // converting this all to string to serve as script
        // append custom script to bottom of page. 
        document.body.appendChild(script);
    }
}
// Add an event listener to update the userAutoplayPreference based on checkboxStateChange.
document.addEventListener('checkboxStateChange', function (e) {
    // Update the userAutoplayPreference with the new state provided by the event
    const checkboxState = e.detail;
    userAutoplayPreference = checkboxState;
});
// DEBUGGING- console log indicating that toggle_YT_Autoplay function is running
console.log("MY SCRIPT!", toggle_YT_Autoplay());
//# sourceMappingURL=script.js.map
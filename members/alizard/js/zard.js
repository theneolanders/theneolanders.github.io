// vars
const skyArea = document.getElementById("sky-area");

/* copy public folder link */
function copyPublic(){
    navigator.clipboard.writeText("resrec:///U-alizard/R-1a81091b-08c9-42c9-bced-2c096aab4287");
}


/* Sky area toggle */
// hide if screen is too small
window.addEventListener("resize", function () {
    if(window.innerWidth < 800){
        skyArea.hidden = true;
    }
    else{
        skyArea.hidden = false;
    }
});
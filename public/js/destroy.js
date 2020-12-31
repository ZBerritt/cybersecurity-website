var stageImage = document.getElementById("stage-image");
var boxOne = document.getElementById("box-1");
var boxTwo = document.getElementById("box-2");
var hacking = false; // Is the user hacking
var codes = ["secret", "code"] // Dont make this case sensitive you dumb idiot
var complete = [false, false];

function boxOneTrigger() {
    if (hacking) return;
    stageImage.className = "dark";
    boxTwo.style.display = "block"
    hacking = true;
}

function boxTwoTrigger() {
    if (hacking) return;
    stageImage.className = "dark";
    boxOne.style.display = "block"
    hacking = true;
}
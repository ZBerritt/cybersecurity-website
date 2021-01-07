var stageImage = document.getElementById("stage-image");
var boxOne = document.getElementById("box-1");
var boxTwo = document.getElementById("box-2");
var boxClosed = [document.getElementById("box-1-closed"), document.getElementById("box-2-closed")];
var boxOpen = [document.getElementById("box-1-open"), document.getElementById("box-2-open")];
var triggers = [document.getElementById("box-1-trigger"), document.getElementById("box-2-trigger")];
var code1 = document.getElementById("input-1");
var code2 = document.getElementById("input-2");
var hacking = false; // Is the user hacking
var codes = ["secret", "code"] // Dont make this case sensitive you dumb idiot
var complete = [false, false];

function boxOneTrigger() {
    if (hacking) return;
    stageImage.className = "dark";
    boxOne.style.display = "block"
    hacking = true;
}

function boxTwoTrigger() {
    if (hacking) return;
    stageImage.className = "dark";
    boxTwo.style.display = "block"
    hacking = true;
}

function closeBox() {
    if (!hacking) return;
    boxOne.style.display = "none";
    boxTwo.style.display = "none";
    stageImage.className = "";
    hacking = false;
}

function inputCode(box) {
    var input;
    if (box === 1) {
        input = code1.value;
    } else {
        input = code2.value;
    }
    if (input.toLowerCase() === codes[box - 1]) {
        // Correct code
        boxClosed[box - 1].style.display = "none";
        boxOpen[box - 1].style.display = "block";
    }
}

function switchOne() {
    complete[0] = true;
    document.getElementById("switch-1").src = "../public/assets/destroy/Switch ON.png"
    triggers[0].className = "trigger-disabled";
    if (complete[0] && complete[1]) {
        stageImage.src = "../public/assets/destroy/chaos.png";
    }
}

function switchTwo() {
    complete[1] = true;
    document.getElementById("switch-2").src = "../public/assets/destroy/Switch ON.png"
    triggers[1].className = "trigger-disabled";
    if (complete[0] && complete[1]) {
        stageImage.src = "../public/assets/destroy/chaos.png";
    }
}
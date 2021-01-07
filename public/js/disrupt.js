var stageImage = document.getElementById("stage-image");
var boxOne = document.getElementById("box-1");
var boxTwo = document.getElementById("box-2");
var triggers = [document.getElementById("box-1-trigger"), document.getElementById("box-2-trigger")];
var hacking = false; // Is the user hacking
var cut = [[], []];
var correct = ["blue", "green"];
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

function cutWire(box, color) {
    if (cut[box - 1].includes(color) || complete[box - 1]) return;
    cut[box - 1].push(color);
    var image = getWireImage(cut[box - 1]) + ".png";
    var wires = document.getElementById("wires-" + box);
    wires.src = "../public/assets/wires/" + image;
    var feedback = document.getElementById("feedback-" + box);
    if (correct[box - 1] === color) {
        feedback.style.color = "green";
        feedback.innerText = "Correct!";
        complete[box - 1] = true;
        triggers[box - 1].className = "trigger-disabled";
        stageImage.src = "../public/assets/disrupt/" + getBackground() + ".png"
    } else {
        feedback.style.color = "red";
        feedback.innerText = "Try again...";
    }
}

function getWireImage(cut) {
    if (cut.length === 0) return "Wire box";
    if (cut.length === 1) {
        if (cut[0] === "red") {
            return "Wire box Red";
        } else if (cut[0] === "green") {
            return "Wire box Green";
        } else if (cut[0] === "blue") {
            return "Wire box Blue";
        }
    } else if (cut.length === 2) {
        if (!cut.includes("red")) {
            return "Wire box GB";
        } else if (!cut.includes("green")) {
            return "Wire box BR";
        } else if (!cut.includes("blue")) {
            return "Wire box GR";
        }
    } else if (cut.length === 3) {
        return "Wire box ALL";
    }
}

function getBackground() {
    if (complete[0] && complete[1]) {
        return "Signal none";
    } else if (complete[0]) {
        return "Signal right";
    } else if (complete[1]) {
        return "Signal left";
    } else {
        return "Signal both";
    }
}
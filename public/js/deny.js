var stageImage = document.getElementById("stage-image");
var passOne = document.getElementById("password-1");
var passTwo = document.getElementById("password-2");
var notepad = document.getElementById("notepad-full");
var triggers = [document.getElementById("light-1-trigger"), document.getElementById("light-2-trigger")];
var passwordOpen = false;
var foundPassword1 = false;
var foundPassword2 = false;
var hacked = false;
var notepadOpen = false;

function lightOneTrigger() {
    if (passwordOpen || foundPassword1 || notepadOpen) return;
    stageImage.className = "dark";
    passOne.style.display = "block"
    passwordOpen = true;
}

function lightTwoTrigger() {
    if (passwordOpen || foundPassword2 || notepadOpen) return;
    stageImage.className = "dark";
    passTwo.style.display = "block"
    passwordOpen = true;
}

function openNotepad() {
    if (notepadOpen || passwordOpen) return;
    stageImage.className = "dark";
    notepad.style.display = "block"
    notepadOpen = true;
}

function closeNotepad() {
    if (!notepadOpen) return;
    stageImage.className = "";
    notepad.style.display = "none";
    notepadOpen = false;
}

function exitPassword() {
    if (!passwordOpen) return;
    stageImage.className = "";
    passTwo.style.display = "none";
    passOne.style.display = "none";
    passwordOpen = false;
}

function enterOne() {
    var passText = document.getElementById("input-1").value;
    if (passText.toLowerCase() === "cpu") {
        foundPassword1 = true;
        document.getElementById("input1-success").style.display = "block";
        triggers[0].className = "trigger-disabled";
        setTimeout(exitPassword, 3000);
    } else {
        document.getElementById("input1-error").style.display = "block";
        setTimeout(function () {
            document.getElementById("input1-error").style.display = "none";
        }, 3000);
    }
}

function enterTwo() {
    var passText = document.getElementById("input-2").value;
    if (passText.toLowerCase() === "123456") {
        foundPassword2 = true;
        document.getElementById("input2-success").style.display = "block";
        triggers[1].className = "trigger-disabled";
        setTimeout(exitPassword, 3000);
    } else {
        document.getElementById("input2-error").style.display = "block";
        setTimeout(function () {
            document.getElementById("input2-error").style.display = "none";
        }, 3000);
    }
}

function hackLight() {
    if (hacked) return;
    if (foundPassword1 && foundPassword2) {
        document.getElementById("crash").style.display = "block";
        document.getElementById("deny-success").style.display = "block";
        hacked = true;
    } else {
        document.getElementById("deny-error").style.display = "block";
        setTimeout(function () {
            document.getElementById("deny-error").style.display = "none";
        }, 2000)
    }
}
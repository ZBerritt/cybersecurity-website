var stageImage = document.getElementById("stage-image");
var passOne = document.getElementById("password-1");
var passTwo = document.getElementById("password-2");
var passwordOpen = false;
var foundPassword1 = false;
var foundPassword2 = false;
var hacked = false;

function lightOneTrigger() {
    if (passwordOpen || foundPassword1) return;
    stageImage.className = "dark";
    passOne.style.display = "block"
    passwordOpen = true;
}

function lightTwoTrigger() {
    if (passwordOpen || foundPassword2) return;
    stageImage.className = "dark";
    passTwo.style.display = "block"
    passwordOpen = true;
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
    if (passText === "1234") {
        foundPassword1 = true;
    }
}

function enterTwo() {
    var passText = document.getElementById("input-2").value;
    if (passText === "1234") {
        foundPassword2 = true;  
    }
}

function hackLight() {
    if (hacked) return;
    if (foundPassword1 && foundPassword2) {
        document.getElementById("deny-success").style.display = "block";
        hacked = true;
    } else {
        document.getElementById("deny-error").style.display = "block";
        setTimeout(function() {
            document.getElementById("deny-error").style.display = "none";
        }, 2000)
    }
}
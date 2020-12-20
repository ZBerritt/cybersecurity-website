var stageImage = document.getElementById("stage-image");
var passOne = document.getElementById("password-1");
var passTwo = document.getElementById("password-2");
var passwordOpen = false;

function lightOneTrigger() {
    if (passwordOpen) return;
    stageImage.className = "dark";
    passOne.style.display = "block"
    passwordOpen = true;
}

function lightTwoTrigger() {
    if (passwordOpen) return;
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
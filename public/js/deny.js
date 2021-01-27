var passwordInput = document.getElementById("password");
var stageImage = document.getElementById("stage-image");
var passInput = document.getElementById("pass-input");
var passConfirm = document.getElementById("pass-confirm");
var passwordOpen = false;
var complete = false;


function start() {
    if (complete) return;
    stageImage.className = "dark";
    passwordInput.style.display = "block"
    passwordOpen = true;
}

function exitPassword() {
    if (!passwordOpen) return;
    stageImage.className = "";
    passwordInput.style.display = "none";
    passwordOpen = false;
}

function testPassword() {
    var input = passInput.value;
    if (input !== passConfirm.value) {
        clearErrors();
        document.getElementById("match-error").style.display = "block";
        setTimeout(function () {
            document.getElementById("match-error").style.display = "none";
        }, 3000);
        return;
    }
    if (input.length < 10) {
        return passwordError();
    }
    var containsNumbers = /\d/.test(input);
    var containsUpperLetters = /[a-z]/.test(input);
    var containsLowerLetters = /[A-Z]/.test(input);
    var containsSpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input); // I hate regex
    if (!containsNumbers || !containsUpperLetters || !containsLowerLetters || !containsSpecialCharacters) {
        return passwordError();
    } else {
        clearErrors();
        document.getElementById("input-success").style.display = "block";
        setTimeout(function () {
            exitPassword();
            document.getElementById("deny-success").style.display = "block";
            stageImage.src = "../public/assets/Lights off crash.png"
            document.getElementById("start").style.display = "none";
            complete = true;
            // Finished
        }, 3000)
    }
}

function clearErrors() {
    document.getElementById("match-error").style.display = "none";
    document.getElementById("input-error").style.display = "none";
}

function passwordError() {
    clearErrors();
    document.getElementById("input-error").style.display = "block";
    setTimeout(function () {
        document.getElementById("input-error").style.display = "none";
    }, 3000);
}
var passwordInput = document.getElementById("password");
var phone = document.getElementById("phone-full");
var smallPhone = document.getElementById("phone");
var stageImage = document.getElementById("stage-image");
var passInput = document.getElementById("pass-input");
var passConfirm = document.getElementById("pass-confirm");
var deceiveSuccess = document.getElementById("deceive-success");
var colorChoices = document.getElementById("color-choices");
var passwordOpen = false;
var password;
var phoneOpen = false;
var done = false;


function start() {
    if (password) return;
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
    if (password) return;
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
    var containsSpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input);
    if (!containsNumbers || !containsUpperLetters || !containsLowerLetters || !containsSpecialCharacters) {
        return passwordError();
    } else {
        clearErrors();
        document.getElementById("input-success").style.display = "block";
        setTimeout(function () {
            exitPassword();
            password = input;
            smallPhone.style.display = "block";
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

function openPhone() {
    if (phoneOpen || !password) return;
    stageImage.className = "dark";
    phone.style.display = "block"
    phoneOpen = true;
}

function closePhone() {
    if (!phoneOpen) return;
    stageImage.className = "";
    phone.style.display = "none";
    phoneOpen = false;
}


function redChoice() {
    if (done) return;
    stageImage.src = "../public/assets/deceive/Lights red.png";
    document.getElementById("red-message").style.display = "block";
    done = true;
    colorChoices.style.display = "none";
    deceiveSuccess.style.display = "block";
}

function greenChoice() {
    if (done) return;
    stageImage.src = "../public/assets/deceive/Lights green.png";
    document.getElementById("green-message").style.display = "block";
    done = true;
    colorChoices.style.display = "none";
    deceiveSuccess.style.display = "block";
}
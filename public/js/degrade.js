var phoneOpen = false;
var phone = document.getElementById("phone-full");
var stageImage = document.getElementById("stage-image");
var inputData = document.getElementById("ddos-area");
var lightStatus = document.getElementById("traffic-status");
var error = document.getElementById("error");
var success = document.getElementById("success");
var degradeSuccess = document.getElementById("degrade-success");
var trafficLightHealth = 3; // 3 great, 2 Good, 1 Ok, 0 Poor 

function openPhone() {
    if (phoneOpen) return;
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

function sendData() {
    if (trafficLightHealth === 0) return;
    var text = inputData.value;
    console.log(text, text.length)
    if (text.length < 15) {
        error.style.display = "block";
        setTimeout(function () {
            error.style.display = "none";
        }, 3000);

    } else {
        trafficLightHealth--;
        lightStatus.style.color = getLightText()[1];
        lightStatus.innerText = getLightText()[0];
        inputData.value = "";
        if (trafficLightHealth === 0) {
            success.style.display = "block";
            stageImage.src = "../public/assets/Traffic Intersection.png";
            document.getElementById("phone").style.display = "none";
            degradeSuccess.style.display = "block";
        }
    }
}

function getLightText() {
    switch (trafficLightHealth) {
        case 3:
            return ["Great", "lime"];
        case 2:
            return ["Good", "#96ABFF"];
        case 1:
            return ["Ok", "yellow"];
        case 0:
            return ["Poor", "red"];
    }
}
var idleTime = 0;
(function(){
    document.addEventListener("mousedown", e => {
        idleTime = 0;
    });

    document.addEventListener("mousemove", e => {
        idleTime = 0;
    });

    setInterval(function() {
        idleTime++;
        if (idleTime >= 6) window.location.href = "./" // # of 30 second intervals before reload
    }, 30000)
}())
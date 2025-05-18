document.getElementById("startTimerBtn").addEventListener("click", function() {
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    let timerElement = document.createElement("div");
    timerElement.className = "timer";
    
    let timerText = document.createElement("span");
    timerText.textContent = `Time left: ${hours}h ${minutes}m ${seconds}s`;
    
    let stopButton = document.createElement("button");
    stopButton.textContent = "Stop Timer";
    stopButton.style.marginLeft = "50px";

    timerElement.appendChild(timerText);
    timerElement.appendChild(stopButton);
    document.getElementById("timerDisplay").appendChild(timerElement);

    let timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerElement.className = "ended-timer";
            timerText.textContent = "Time's up!";
            
            return;
        }

        totalSeconds--;
        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        timerText.textContent = `Time left: ${h}h ${m}m ${s}s`;
    }, 1000);

    
    stopButton.addEventListener("click", function() {
        clearInterval(timerInterval);
        timerElement.remove();
    });
});

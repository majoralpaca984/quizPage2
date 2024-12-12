document.addEventListener("DOMContentLoaded", function () {
    const duration = 16; // total countdown time in seconds
    const progressCircle = document.querySelector(".progress-circle");
    const timerText = document.querySelector(".seconds");

    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = "0";

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }

    let remainingTime = duration;

    function updateTimer() {
        remainingTime--;
        timerText.textContent = remainingTime;

        const percentage = (remainingTime / duration) * 100;
        setProgress(percentage);

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
        }
    }

    timerText.textContent = duration;
    setProgress(100);

    const timerInterval = setInterval(updateTimer, 1000);
});

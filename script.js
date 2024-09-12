function updateCountdown() {
    var targetDate = new Date("January 9, 2025 00:00:00").getTime();

    var now = new Date().getTime();

    var timeRemaining = targetDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    function addZero(num) {
        return num < 10 ? "0" + num : num;
    }

    document.getElementById("days").innerHTML = "Days:"+addZero(days);
    document.getElementById("hours").innerHTML = "Hours:"+addZero(hours);
    document.getElementById("minutes").innerHTML = "Minutes:"+addZero(minutes);
    document.getElementById("seconds").innerHTML = "Seconds:"+addZero(seconds);

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Evenimentul a început!";
    }
}

var interval = setInterval(updateCountdown, 1000);

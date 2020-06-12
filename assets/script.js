var timerDisplay = document.getElementById("timer"); // Setting link to html as variable for future use



//Timer
var totalSeconds = 60; // Variable that will be displayed
var timerCount = setInterval(function () {
// If statment meaning time will only decrease down until 0 and then timer will stop
    if (totalSeconds === 0) {
        alert("Time up!"); // Alerting the user the timer has finished
        clearInterval(timerCount); // Stops the function from running again
    }
    else {
        totalSeconds--; // Decreasing variable by one
        console.log(totalSeconds); // Logging the countdown in the consoles
        timerDisplay.textContent = totalSeconds; // Linking variable to html
    }
}, 1000); // Repeating the process on an interval of one second

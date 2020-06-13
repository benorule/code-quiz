var timerDisplay = document.getElementById("timer"); // Setting link to html as variable for future use

document.body.onload = addStartButton;

function addStartButton() {
    // Start Button
    var startButton = document.createElement("button"); // Dynamically create the new start button
    var startButtonContent = document.createTextNode("Start"); // Write text to be added to button
    startButton.appendChild(startButtonContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(startButton); // Add button and content into the DOM
    // Quiz Title
    var startTitle = document.createElement("h1"); // Dynamically create the head tag
    var startTitleContent = document.createTextNode("Javascript Theory Quiz"); // Write text to be added
    startTitle.appendChild(startTitleContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the title into
    currentDiv.appendChild(startTitle); // Add head tag and content into the DOM
    // Click Event
    startButton.addEventListener("click", function removeStartButton() {
        startButton.parentNode.removeChild(startButton); // Remove button from webpage
        startTitle.parentNode.removeChild(startTitle); // Remove title from webpage
        timerStart(); // Start Timer
    });
}

// Timer
function timerStart() {
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
}
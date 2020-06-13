var timerDisplay = document.getElementById("timer"); // Setting link to html as variable for future use

document.body.onload = addStartButton;

function addStartButton() {
    // create a new div element 
    var startButton = document.createElement("button"); // Dynamically create the new start button
    // and give it some content 
    var startButtonContent = document.createTextNode("Start"); // Write text to be added to button
    // add the text node to the newly created div
    startButton.appendChild(startButtonContent); // Add the text to the button

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("buttons");
    currentDiv.appendChild(startButton);
    // document.body.insertBefore(startButton, currentDiv); 

    startButton.addEventListener("click", function removeStartButton() {
        startButton.parentNode.removeChild(startButton);
        timerStart();
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
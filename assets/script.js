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
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(startTitle); // Add head tag and content into the DOM
    // Click Event
    startButton.addEventListener("click", function removeStartButton() {
        startButton.parentNode.removeChild(startButton); // Remove button from webpage
        startTitle.parentNode.removeChild(startTitle); // Remove title from webpage
        timerStart(); // Start Timer
        firstQuestion(); // Present user with first question
    });
}

// Timer
var totalSeconds = 60; // Variable that will be displayed
function timerStart() {
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

totalScore = 0; // Score variable for points to be added to

// First Question
function firstQuestion() {
    // Question
    var question = document.createElement("h1"); // Dynamically create the head tag
    var questionContent = document.createTextNode("Question One"); // Write text to be added
    question.appendChild(questionContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(question); // Add head tag and content into the DOM
    // Answer Option One
    var ansOne = document.createElement("button"); // Dynamically create the new start button
    var ansOneContent = document.createTextNode("Option One"); // Write text to be added to button
    ansOne.appendChild(ansOneContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansOne); // Add button and content into the DOM
    // Answer Option Two
    var ansTwo = document.createElement("button"); // Dynamically create the new start button
    var ansTwoContent = document.createTextNode("Option Two"); // Write text to be added to button
    ansTwo.appendChild(ansTwoContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansTwo); // Add button and content into the DOM
    // Answer Option Three
    var ansThree = document.createElement("button"); // Dynamically create the new start button
    var ansThreeContent = document.createTextNode("Option Three"); // Write text to be added to button
    ansThree.appendChild(ansThreeContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansThree); // Add button and content into the DOM
    // Answer Option Four
    var ansFour = document.createElement("button"); // Dynamically create the new start button
    var ansFourContent = document.createTextNode("Option Four"); // Write text to be added to button
    ansFour.appendChild(ansFourContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansFour); // Add button and content into the DOM
    // Click Event For Answer Option One
    ansOne.addEventListener("click", function choseOptionOne() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
    });
    // Click Event For Answer Option Two
    ansTwo.addEventListener("click", function choseOptionOne() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
    });
    ansThree.addEventListener("click", function choseOptionOne() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalScore++; // Add 1 point to score as a reward for correct answer
    });
    // Click Event For Answer Option Two
    ansFour.addEventListener("click", function choseOptionOne() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
    });
}
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
    var startTitleContent = document.createTextNode("Javascript Quiz"); // Write text to be added
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
            alert("Game Over!"); // Alerting the user the timer has finished
            clearInterval(timerCount); // Stops the function from running again
            document.getElementById("questions").innerHTML = "";
            document.getElementById("buttons").innerHTML = "";
            scoreBoard();
        }
        else {
            totalSeconds--; // Decreasing variable by one
            console.log(totalSeconds); // Logging the countdown in the consoles
            timerDisplay.textContent = totalSeconds; // Linking variable to html
        }
    }, 1000); // Repeating the process on an interval of one second
}


// Scoreboard
var totalScore = 0; // Score variable for points to be added to
var initials = ""; // Empty variable for players initials
function scoreBoard() {
    // Stop Timer
    totalSeconds = 0;
    // Finish Button
    var finishButton = document.createElement("button"); // Dynamically create the finish button
    var finishButtonContent = document.createTextNode("Finish"); // Write text to be added to button
    finishButton.appendChild(finishButtonContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(finishButton); // Add button and content into the DOM
    // Click Event
    finishButton.addEventListener("click", function finishGame() {
        initials = prompt("Your score is: " + totalScore + "/5. Please enter your initials");
        console.log(initials);
        console.log(totalScore);
        var highScore = document.createElement("li"); // Create a list <li> element
        var highScoreContent = document.createTextNode("Score: " + totalScore + "/5 Initials: " + initials); // Write text for the list <li> element
        highScore.appendChild(highScoreContent); // Append the text to the list <li> element
        var list = document.getElementById("scoreboard");    // Select the list <ul> element to add to
        list.insertBefore(highScore, list.childNodes[0]);  // Insert <li> before the first child of <ul>
        finishButton.parentNode.removeChild(finishButton); // Remove button from webpage
        totalSeconds = 60; // Resetting Timer
        totalScore = 0; // Resetting Score
        wrongRight = ""; // Resetting variable
        addStartButton(); // Give option to play again
        document.getElementById("answer").innerHTML = "";
    });
}


// Wrong or Right
var wrongRight = ""; // Empty variable to store "wrong" or "right" in
function checkAnswer() {
    var answerCheck = document.createElement("li"); // Create a list <li> element
    var answerCheckContent = document.createTextNode(wrongRight); // Write text for the list <li> element
    answerCheck.appendChild(answerCheckContent); // Append the text to the list <li> element
    var list = document.getElementById("answer");    // Select the list <ul> element to add to
    list.insertBefore(answerCheck, list.childNodes[0]);  // Insert <li> before the first child of <ul>
}


// First Question
function firstQuestion() {
    // Question
    var question = document.createElement("p"); // Dynamically create the head tag
    var questionContent = document.createTextNode("Commonly used data types do NOT include:"); // Write text to be added
    question.appendChild(questionContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(question); // Add head tag and content into the DOM
    // Answer Option One
    var ansOne = document.createElement("button"); // Dynamically create the new start button
    var ansOneContent = document.createTextNode("Numbers"); // Write text to be added to button
    ansOne.appendChild(ansOneContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansOne); // Add button and content into the DOM
    // Answer Option Two
    var ansTwo = document.createElement("button"); // Dynamically create the new start button
    var ansTwoContent = document.createTextNode("Strings"); // Write text to be added to button
    ansTwo.appendChild(ansTwoContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansTwo); // Add button and content into the DOM
    // Answer Option Three
    var ansThree = document.createElement("button"); // Dynamically create the new start button
    var ansThreeContent = document.createTextNode("Alerts"); // Write text to be added to button
    ansThree.appendChild(ansThreeContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansThree); // Add button and content into the DOM
    // Answer Option Four
    var ansFour = document.createElement("button"); // Dynamically create the new start button
    var ansFourContent = document.createTextNode("Booleans"); // Write text to be added to button
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
        secondQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansTwo.addEventListener("click", function choseOptionTwo() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        secondQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    ansThree.addEventListener("click", function choseOptionThree() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalScore++; // Add 1 point to score as a reward for correct answer
        secondQuestion();
        wrongRight = "right!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansFour.addEventListener("click", function choseOptionFour() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        secondQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
}

// Second Question
function secondQuestion() {
    // Question
    var question = document.createElement("p"); // Dynamically create the head tag
    var questionContent = document.createTextNode("Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?"); // Write text to be added
    question.appendChild(questionContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(question); // Add head tag and content into the DOM
    // Answer Option One
    var ansOne = document.createElement("button"); // Dynamically create the new start button
    var ansOneContent = document.createTextNode("fixed()"); // Write text to be added to button
    ansOne.appendChild(ansOneContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansOne); // Add button and content into the DOM
    // Answer Option Two
    var ansTwo = document.createElement("button"); // Dynamically create the new start button
    var ansTwoContent = document.createTextNode("big()"); // Write text to be added to button
    ansTwo.appendChild(ansTwoContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansTwo); // Add button and content into the DOM
    // Answer Option Three
    var ansThree = document.createElement("button"); // Dynamically create the new start button
    var ansThreeContent = document.createTextNode("blink()"); // Write text to be added to button
    ansThree.appendChild(ansThreeContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansThree); // Add button and content into the DOM
    // Answer Option Four
    var ansFour = document.createElement("button"); // Dynamically create the new start button
    var ansFourContent = document.createTextNode("bold()"); // Write text to be added to button
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
        totalScore++; // Add 1 point to score as a reward for correct answer
        thirdQuestion();
        wrongRight = "right!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansTwo.addEventListener("click", function choseOptionTwo() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        thirdQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    ansThree.addEventListener("click", function choseOptionThree() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        thirdQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansFour.addEventListener("click", function choseOptionFour() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        thirdQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
}

// Third Question
function thirdQuestion() {
    // Question
    var question = document.createElement("p"); // Dynamically create the head tag
    var questionContent = document.createTextNode("Which of the following function of Number object returns a string value version of the current number?"); // Write text to be added
    question.appendChild(questionContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(question); // Add head tag and content into the DOM
    // Answer Option One
    var ansOne = document.createElement("button"); // Dynamically create the new start button
    var ansOneContent = document.createTextNode("toLocaleString()"); // Write text to be added to button
    ansOne.appendChild(ansOneContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansOne); // Add button and content into the DOM
    // Answer Option Two
    var ansTwo = document.createElement("button"); // Dynamically create the new start button
    var ansTwoContent = document.createTextNode("toFixed()"); // Write text to be added to button
    ansTwo.appendChild(ansTwoContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansTwo); // Add button and content into the DOM
    // Answer Option Three
    var ansThree = document.createElement("button"); // Dynamically create the new start button
    var ansThreeContent = document.createTextNode("toPrecision()"); // Write text to be added to button
    ansThree.appendChild(ansThreeContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansThree); // Add button and content into the DOM
    // Answer Option Four
    var ansFour = document.createElement("button"); // Dynamically create the new start button
    var ansFourContent = document.createTextNode("toString()"); // Write text to be added to button
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
        fourthQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansTwo.addEventListener("click", function choseOptionTwo() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        fourthQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    ansThree.addEventListener("click", function choseOptionThree() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        fourthQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansFour.addEventListener("click", function choseOptionFour() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalScore++; // Add 1 point to score as a reward for correct answer
        fourthQuestion();
        wrongRight = "right!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
}

// Fourth Question
function fourthQuestion() {
    // Question
    var question = document.createElement("p"); // Dynamically create the head tag
    var questionContent = document.createTextNode("Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?"); // Write text to be added
    question.appendChild(questionContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(question); // Add head tag and content into the DOM
    // Answer Option One
    var ansOne = document.createElement("button"); // Dynamically create the new start button
    var ansOneContent = document.createTextNode("search()"); // Write text to be added to button
    ansOne.appendChild(ansOneContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansOne); // Add button and content into the DOM
    // Answer Option Two
    var ansTwo = document.createElement("button"); // Dynamically create the new start button
    var ansTwoContent = document.createTextNode("localeCompare()"); // Write text to be added to button
    ansTwo.appendChild(ansTwoContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansTwo); // Add button and content into the DOM
    // Answer Option Three
    var ansThree = document.createElement("button"); // Dynamically create the new start button
    var ansThreeContent = document.createTextNode("substr()"); // Write text to be added to button
    ansThree.appendChild(ansThreeContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansThree); // Add button and content into the DOM
    // Answer Option Four
    var ansFour = document.createElement("button"); // Dynamically create the new start button
    var ansFourContent = document.createTextNode("concat()"); // Write text to be added to button
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
        fifthQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansTwo.addEventListener("click", function choseOptionTwo() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalScore++; // Add 1 point to score as a reward for correct answer
        fifthQuestion();
        wrongRight = "right!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    ansThree.addEventListener("click", function choseOptionThree() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        fifthQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansFour.addEventListener("click", function choseOptionFour() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        fifthQuestion();
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
}

// Fifth Question
function fifthQuestion() {
    // Question
    var question = document.createElement("p"); // Dynamically create the head tag
    var questionContent = document.createTextNode("Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?"); // Write text to be added
    question.appendChild(questionContent); // Add the text to the head tag
    var currentDiv = document.getElementById("questions"); // Select div to insert the head tag into
    currentDiv.appendChild(question); // Add head tag and content into the DOM
    // Answer Option One
    var ansOne = document.createElement("button"); // Dynamically create the new start button
    var ansOneContent = document.createTextNode("italics()"); // Write text to be added to button
    ansOne.appendChild(ansOneContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansOne); // Add button and content into the DOM
    // Answer Option Two
    var ansTwo = document.createElement("button"); // Dynamically create the new start button
    var ansTwoContent = document.createTextNode("blink()"); // Write text to be added to button
    ansTwo.appendChild(ansTwoContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansTwo); // Add button and content into the DOM
    // Answer Option Three
    var ansThree = document.createElement("button"); // Dynamically create the new start button
    var ansThreeContent = document.createTextNode("big()"); // Write text to be added to button
    ansThree.appendChild(ansThreeContent); // Add the text to the button
    var currentDiv = document.getElementById("buttons"); // Select div to insert the button into
    currentDiv.appendChild(ansThree); // Add button and content into the DOM
    // Answer Option Four
    var ansFour = document.createElement("button"); // Dynamically create the new start button
    var ansFourContent = document.createTextNode("anchor()"); // Write text to be added to button
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
        scoreBoard(); // Calls function that finalises score
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansTwo.addEventListener("click", function choseOptionTwo() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        scoreBoard(); // Calls function that finalises score
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
    ansThree.addEventListener("click", function choseOptionThree() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalScore++; // Add 1 point to score as a reward for correct answer
        scoreBoard(); // Calls function that finalises score
        wrongRight = "right!"; // Setting the variable that will be displayedd
        checkAnswer(); // Calling the function to display variable
    });
    // Click Event For Answer Option Two
    ansFour.addEventListener("click", function choseOptionFour() {
        // Remove buttons from webpage
        ansOne.parentNode.removeChild(ansOne);
        ansTwo.parentNode.removeChild(ansTwo);
        ansThree.parentNode.removeChild(ansThree);
        ansFour.parentNode.removeChild(ansFour);
        question.parentNode.removeChild(question); // Remove question from webpage
        totalSeconds -= 10; // Subtract 10 seconds from clock as a penalty for incorrect answer
        scoreBoard(); // Calls function that finalises score
        wrongRight = "wrong!"; // Setting the variable that will be displayed
        checkAnswer(); // Calling the function to display variable
    });
}
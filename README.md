# code-quiz
Link to deployed application: https://benorule.github.io/code-quiz/

Screenshot of deployed application: ![Index file screenshot](/assets/code-quiz-screenshot.png?raw=true "Application Screenshot")

## Table of Contents: 
 * [Description](#Description) 
* [Installation Instructions](#Installation-Instructions) 
* [Usage Information](#Usage-Information) 
* [Contribution Guidlines](#Contribution-Guidelines) 
* [Test Instructions](#Test-Instructions) 
* [Questions](#Questions) 
## Description 
A simple quiz for students learning javascript to test their knowledge on the language.
## Installation Instructions 
This project is hosted by GitHub pages. Alternatively you can run it on local host after downloading from GitHub either by cloning the repository or downloading the zip file.
## Usage Information 
Use the buttons displayed on the webpage to answer the questions.
## Contribution Guidelines 
To contribute to this project please submit a pull request on GitHub with a clear description of your contribution.
## Test Instructions 
To test this application interact with the on screen buttons with the chrome dev tools console open.
## Questions 
 * GitHub: https://github.com/benorule
* Email: benorule@outlook.com
* License: MIT

# Some information about the development process:

## Static Content
I began by creating the static content of the html webpage. This included the "view highscores" link in the top left corner and the timer in the top right corner. I gave the timer an id that will be useful later when referring to it in the javascript file in order to make part of it dynamic. I created an empty html file called "scoreboard.html" that opens when the "view highscores" is clicked on. I used the target="_blank" attribute to ensure it opens in a new tab so viewing highscores doesn't end the quiz. The scoreboard webpage will consist of mostly dynamic content.

## Timer
The first dynamic element of the webpage I made was the timer function. In the javascript file I created a simple timer that begins at 60 and counts down until zero and stops. This simple timer can be easily modified later to suit the context of the quiz once more elements are implemented such as the start button and the question and answer function.

The simple timer uses a function that includes an if statement that decreases the variable totalSeconds and updates the html file through the element timerDisplay which is linked to the span element with the "timer" id. The if statement determines that if the timer counts down to zero, that is to say if the variable totalSeconds is equal to zero, the user will be given an alert and the interval of the function will be cleared which is an important step as without it the if statement would be run over and over again with the totalSeconds === 0 if condition being met which means the user would repeatedly recieve the alert that the timer is finished to no end.

## Start Button
The next step was to create a start button and make it appear on the screen when the page is loaded and dissapear when it is clicked. Using the line of code document.body.onload = createStartButton; I ensured that the button would appear as soon as the page loaded. Within the function createStartButton I dynamically created the button itself and the text inside the button. 

I linked the start button to a new div I created in the html document with the id of "buttons" which is the div in which I will assign all dynamically created buttons to go. I also created a div tag with the id of "questions" for later when I dynamically create questions. In the html document I wrote some css that will style every question and every button with the answers on them. For now I only used this css to format them but I can add more styling later. I used position attributes to make the question always appear 100px down from the top and within the middle 50% of the page, and to make the buttons always appear 200px down from the top and in the center of the page.

Within the function used to dynamically create the start button I created an onclick event such that when the button is clicked it is removed from the document. This is so that when the start button is clicked it makes room for new buttons that will contain answers to the questions displayed. I also added to the onlick event code to call the startTimer function which means the timer will not begin counting down until the start button has been clicked.

In the same function in which the button is dynamically created I used the same code to dynamically create a head tag with the content of "Javascript Theory Quiz" which describes the program to the end user. This head tag was added to the div tag with the id of "questions" created in the html. I added code inside the click event such that this head tag would also be removed when the start button is clicked.

## First Question
I created a function that presents the user with the first question of the quiz. I called this function in the click event of the start function. The function dynamically creates a head tag with the question in it and four buttons each with an option to choose for your answer to the question. I created seperate click events for each of these buttons. In all of these click events the question and all four buttons are removed. In the click event for the button with the correct answer the newly created variable totalScore is increased by one. The totalScore variable will be used later when designing the scoreboard html page. In the other three click events the variable totalSeconds is decreased by 10 seconds as a penalty. In order for this to work I had to remove the totalSeconds variable outside of the timerStart function making it a global variable.

## Second, Third, Fourth and Fifth Question
I reused a lot of code from the first question changing only which button had the correct answer and the naming of the question. Currently the text content in these functions are not real questions and answers but this can be easily changed later.

## Wrong or Right Alert
The next step was to create a dynamic element that printed "wrong!" or "right!" somewhere on the document depending on which button was clicked. Within the click event of each button I defined a variable named wrongRight as either "wrong!" or "right!" depending on the answer and then called a function checkAnswer. The checkAnswer function took the wrongRight variable as the text content of a node and appended this to the html document. Initially the text was inputted as a p tag but doing it this way lead to the latest "wrong" or "right" messages appearing under the last instead of above as desired. To solve this problem I made it a list element instead of a p tag and made each new list element at the top of the list above all of the other child nodes. I also used css styling in the html document to get rid of the bullet point as it wasn't desired in this context.

## Scoreboard
Inside of the click events of the last question I called a function called scoreBoard. This function displays a variable called totalScore that throughout the quiz has increased by one every time a correct answer is chosen as per the click events. The function also ends the timer should the user complete the game before the timer ends. The scoreBoard function presents the user with one final button that says "finish" called finishButton. This button has an on click event that prompts the user to enter their initials and tells them their score inside the prompt. Their initials are then stored inside a variable. 

I then created a list element underneath "highscores" on the top left side of the webpage that displays the variables containing the score and the player's initials. Within the onlick function I also added code that effectively resets the game by clearing all the dynamic elements on the page, resetting the timer to 60 and the score to 0, and calling the function that runs when the webpage is reloaded which makes the start button appear on the screen allowing the user to play again.

# code-quiz
Coursework Assignment No. 4 for Coding Bootcamp

## Static Content
I began by creating the static content of the html webpage. This included the "view highscores" link in the top left corner and the timer in the top right corner. I gave the timer an id that will be useful later when referring to it in the javascript file in order to make part of it dynamic. I created an empty html file called "scoreboard.html" that opens when the "view highscores" is clicked on. I used the target="_blank" attribute to ensure it opens in a new tab so viewing highscores doesn't end the quiz. The scoreboard webpage will consist of mostly dynamic content.

## Timer
The first dynamic element of the webpage I made was the timer function. In the javascript file I created a simple timer that begins at 60 and counts down until zero and stops. This simple timer can be easily modified later to suit the context of the quiz once more elements are implemented such as the start button and the question and answer function.

The simple timer uses a function that includes an if statement that decreases the variable totalSeconds and updates the html file through the element timerDisplay which is linked to the span element with the "timer" id. The if statement determines that if the timer counts down to zero, that is to say if the variable totalSeconds is equal to zero, the user will be given an alert and the interval of the function will be cleared which is an important step as without it the if statement would be run over and over again with the totalSeconds === 0 if condition being met which means the user would repeatedly recieve the alert that the timer is finished to no end.
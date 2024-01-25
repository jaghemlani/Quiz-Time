//im not sure if this is the correct to cite sources.but the following links are the 
//videos i watched on youtube to help me complete this project.
//there was 4 videos and i learned a little of code from each one.
//the four links are as follows 
//https://www.youtube.com/watch?v=PBcqGxrr9g8&t=197s
///https://www.youtube.com/watch?v=Vp8x8-reqZA&t=4835s
//https://www.youtube.com/watch?v=riDzcEQbX6k
//https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF
//also used stackoverflow.com



document.addEventListener("DOMContentLoaded", function () {
    var startBtn = document.getElementById("buttonstart");
    var quizScreen = document.getElementById("qscreen");
    var gameOverScreen = document.getElementById("goscreen");
    var finalScore = document.getElementById("finalscore");
    var saveScoreBtn = document.getElementById("savebutton");
    var questionText = document.getElementById("textquestion");
    var questionNumber = document.getElementById("question-number");
    var timerDisplay = document.getElementById("time");
    var choiceButtons = document.querySelectorAll(".choice-btn");

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let timeRemaining = 60;
    let timer;

    startBtn.addEventListener("click", startQuiz);
    saveScoreBtn.addEventListener("click", saveScore);

    //function to start the quiz
    function startQuiz() {
        document.getElementById("start-screen").classList.add("hidden");
        quizScreen.classList.remove("hidden");

        // Set up the timer
        timer = setInterval(function () {
            updateTimerDisplay();
            timeRemaining--;

            if (timeRemaining < 0 || currentQuestionIndex === quizQuestions.length) {
                endQuiz();
            }
        }, 1000);

        // Display the first question
        displayQuestion();
    }

    //function for showing question and answer choices
    function displayQuestion() {
        const question = quizQuestions[currentQuestionIndex];
        questionNumber.textContent = currentQuestionIndex + 1;
        questionText.textContent = question.text;

        // Display answer choices
        choiceButtons.forEach((button, i) => {
            button.textContent = question.choices[i];
            button.onclick = function () {
                handleAnswerClick(i);
            };
        });
    }

    //function for user choosing answer and then next question
    function handleAnswerClick(choiceIndex) {
        const question = quizQuestions[currentQuestionIndex];

        if (choiceIndex === question.correctAnswer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
            timeRemaining -= 10; // Subtract 10 seconds for wrong answers
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    //timer function
    function updateTimerDisplay() {
        timerDisplay.textContent = timeRemaining;
    }

    //end of quiz and show results
    function endQuiz() {
        clearInterval(timer);
        quizScreen.classList.add("hidden");
        gameOverScreen.classList.remove("hidden");
        finalScore.innerText = `Correct Answers: ${correctAnswers} | Wrong Answers: ${wrongAnswers}`;
    }

    function saveScore() {
        // Logic to save the user's initials and score
        // You can implement the score saving logic here
        // For simplicity, let's show the game-over screen and hide the quiz screen
        quizScreen.classList.add("hidden");
        gameOverScreen.classList.remove("hidden");

        // Display the final score (you can update this based on your quiz logic)
        finalScore.innerText = `Correct Answers: ${correctAnswers} | Wrong Answers: ${wrongAnswers}`;
    }

    //questions
    var quizQuestions = [
        {
            text: "Which of the following is not a primitive data type in JavaScript?",
            choices: ["Number", "String", "Boolean", "Object"],
            correctAnswer: 3,
        },
        // Add more questions with choices and correct answers
        // ...
        {
            text: "What does the “NaN” value represent in JavaScript?",
            choices: ["Not a number", "Null value", "Undefined value", "Boolean value"],
            correctAnswer: 0,
        },
        {
            text: "Inside which HTML element do we put the JavaScript?",
            choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
            correctAnswer: 0,
        },
        {
            text: "JavaScript is the same as Java.",
            choices: ["true", "false"],
            correctAnswer: 1,
        },
        {
            text: "Is JavaScript case-sensitive?",
            choices: ["Yess!", "No!!"],
            correctAnswer: 0,
        },
        {
            text: "Which operator is used to assign a value to a variable?",
            choices: ["=", "*", "-", "+"],
            correctAnswer: 0,
        },
    ];
});

document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("buttonstart");
    const quizScreen = document.getElementById("qscreen");
    const gameOverScreen = document.getElementById("goscreen");
    const finalScore = document.getElementById("finalscore");
    const saveScoreBtn = document.getElementById("savebutton");
    const questionText = document.getElementById("textquestion");
    const questionNumber = document.getElementById("question-number");
    const timerDisplay = document.getElementById("time");
    const choiceButtons = document.querySelectorAll(".choice-btn");

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let timeRemaining = 60;
    let timer;

    startBtn.addEventListener("click", startQuiz);
    saveScoreBtn.addEventListener("click", saveScore);

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

    function updateTimerDisplay() {
        timerDisplay.textContent = timeRemaining;
    }

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

});

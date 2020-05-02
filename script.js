const start = document.getElementById("#start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("#question");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("#A");
const choiceB = document.getElementById("#B");
const choiceC = document.getElementById("#C");

const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

let lastQuestionIndex = quizQuestions.length - 1;
let runningQuestionIndex = 0;


function renderQuestion() {
    var q = quizQuestions[runningQuestionIndex];
    question.innerHTML = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;

    runningQuestionIndex++;

}

renderQuestion();




//Javascript delay function will be used for this homework assignment!
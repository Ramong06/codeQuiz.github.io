// Constants and Arrays used 
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const showScore = document.getElementById("score");
const introWords = document.getElementById("intro-words")
var finalScoreEl = document.getElementById("finalscore")

let quizQuestions;
let currentQuestionIndex = 0;
let score = 0;

// Questions Array
const questions = [
    {
        question : "What does HTML stand for?",
        answers: [
            {text: "Hyperlinks and Tested Markup Language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hand Tools Made for Lefties", correct: false},
            {text: "Happy Thoughts Must Leave", correct: false}
        ]},
    {
        question : "What does CSS stand for?",
        answers : [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Cool Stuff Sheet", correct: false},
            {text: "Compilied Styling Sheets", correct: false},
            {text: "Compiled Coding Styles", correct: false}
        ]},
    {
        question : "In Javascript, what is another way to type \"if (var === true) {};\" ",
        answers : [
            {text: "if (!var) {};", correct: false},
            {text: "else (var ==> 0); {}", correct: false},
            {text: "if (var) {};", correct: true},
            {text: "function (var)", correct: false}
        ]},
    {
        question : "In Javascript, how can I declare \"var x = 5;\" inside ONE specific block if \"var x = 10;\" has been declared globally?",
        answers : [
            {text: "Change var x = 5 to let x = 5 inside the block", correct: true},
            {text: "Change var x = 5 to else if (var = 5);", correct: false},
            {text: "Don't change anything. The computer will sort it out.", correct: false},
            {text: "All of the Above", correct: false}
        ]},
        /*{
            question : "In CSS, what is the difference between a \"class\" and an \"id\"? ",
            answers : [
                {text: "An ID requires a number from the state you currently live in. A class does not.", correct: false},
                {text: "A class is easier to remember than an ID", correct: false},
                {text: "You should always show class and an id at a bar.", correct: false},
                {text: "An ID can be used to identify one element, whereas a class can be used to identify more than one.", correct: true}
            ]},*/
        {
            question : "Where would you need to write your <script> tag in your HTML file to link a seperate JS file? ",
            answers : [
                {text: "In the <head> tag, right underneath the link to your CSS page.", correct: false},
                {text: "Outside of the <body> tag, but inside the <html> tag", correct: false},
                {text: "Inside the body tag, preferably right before the closing </body> tag.", correct: true},
                {text: "Nowhere. This question is dumb!", correct: false}
            ]},
];

// Event Listeners and Functions for Quiz
startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startButton.classList.add("hide");
    introWords.classList.add("hide");
    quizQuestions = questions.sort();
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
resetState();
showQuestion(quizQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
questionElement.innerText = question.question;
question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if(answer.correct) {
        button.dataset.correct = answer.correct;
    }
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
})
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(choices) {
    const selectedButton = choices.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct); 
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        if (quizQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove("hide");
        }
        else {
            startButton.innerText = "Restart Quiz";
            startButton.classList.remove("hide");
            //score = (score * 20);
            finalScoreEl.textContent = score;
            showScore.classList.remove("hide");
            submitButton.classList.remove("hide");
        }
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
       element.classList.add("correct");
       score++;
       console.log(score);
    }
    else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");

}



//Javascript delay function will be used for this homework assignment!
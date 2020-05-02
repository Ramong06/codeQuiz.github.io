const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");

const shuffledQuestions, currentQuestionIndex;


const questions = [
    {
        question : "What does HTML stand for?",
        answers: [
            {"Hyperlinks and Tested Markup Language", correct: false}
            {"Hyper Text Markup Language", correct: true}
            {"Hand Tools Made for Lefties", correct: false}
            {"Happy Thoughts Must Leave", correct: false}
        ]
    }
]


    /*{
        question : "What does CSS stand for?",
        choiceA : "Cascading Style Sheets ",
        choiceB : "Cool Stuff Sheet",
        choiceC : "Compilied Styling Sheets",
        correct : "A"  
    },
    {
        question : "In Javascript. What is another way to type \"if (var === true) {};\" ",
        choiceA : "if (!var) {};",
        choiceB : "else (var ==> 0); {}",
        choiceC : "if (var) {};",
        correct : "C"
    },
    {
        question : "In Javascript. How can I declare \"var x = 5;\" inside ONE specific block if \"var x = 10;\" has been declared globally?",
        choiceA : "let = 5;",
        choiceB : "else if (var = 5);",
        choiceC : "Both A and B are correct",
        correct : "A"  
    },
    {
        question : "*BONUS* What is my cat's name?",
        choiceA : "Jack",
        choiceB : "Lil' Panther Boii",
        choiceC : "Both A and B",
        correct : "C"
    }


]*/

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function selectAnswer() {

}




//Javascript delay function will be used for this homework assignment!
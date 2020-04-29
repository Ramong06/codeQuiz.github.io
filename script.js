const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const counter =document.getElementById("question");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

let quizQuestions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Hyperlinks and Tested Markup Language",
        choiceB : "Hyper Text Markup Language",
        choiceC : "Hand Tools Made for Lefties",
        correct : "B"
    },
    {
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

]


//Javascript delay function will be used for this homework assignment!
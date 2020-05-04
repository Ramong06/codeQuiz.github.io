var scoreInput = document.querySelector("#scores-text");
var scoreForm = document.querySelector("#scores-form");
var scoreList = document.querySelector("#scores-list");
var clearBtn = document.querySelector("#clear-btn");

var scores = [];

init();

function renderScores() {
  // Clear Score Line add to List
  scoreList.innerHTML = "";
  scoreInput.textContent = scores;

  // Render a new li for each Score entered
  for (var i = 0; i < scores.length; i++) {
    var enteredScore = scores[i];

    let li = document.createElement("li");
    li.textContent = enteredScore;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }
}

function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  if (storedScores !== null) {
    scores = storedScores;
  }

  renderScores();
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

// When Scores are submitted
scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var scoreText = scoreInput.value.trim();

  if (scoreText === "") {
    return;
  }

  scores.push(scoreText);
  scoreInput.value = "";

  storeScores();
  renderScores();
});

function clear (scoreInput) {
    window.localStorage.clear();
    scoreInput.innerHTML = "";
    clearBtn.addEventListener("click", clear);
}


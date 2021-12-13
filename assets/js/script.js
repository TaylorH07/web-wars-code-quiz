//dom

var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content");
var qDiv = document.getElementById("questions");
var scoreQuiz


// variables
var time = 100;
var timerInterval;

var gameIndex = -1;

//start quiz
function startQuiz() {
    timerEl.textContent = time;
    timerInterval = setInterval(function () {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);

    gameIndex++;
    showQuestion();
}

//end quiz
function endQuiz() {

    clearInterval(timerInterval);
};

// showing questions
function showQuestion() {
    var question = questions[gameIndex];
    qDiv.innerHTML = '';

    var questionDiv = document.createElement("div");
    var titleP = document.createElement("p");
    titleP.textContent = question.title;
    questionDiv.append(titleP);
    
    for (var i = 0; i < question.choices.length; i++) {
        var btnEl = document.createElement("button");
        var choice = question.choices[i];

        btnEl.textContent = choice;
        btnEl.onclick = checkAnswer
        btnEl.setAttribute("data-answer", question.answer);
        questionDiv.append(btnEl);
    }

    qDiv.append(questionDiv);
};

//check answer
function checkAnswer(event) {
    var answer = event.target.getAttribute("data-answer");
    var choice = event.target.textContent;

    if (choice === answer) {
        gameIndex++;
        console.log("You got it!")
    } else {
        time -= 10;
        console.log("NOPE!!!")
    }
    
    gameIndex++
    showQuestion();
};


//local storage
var saveTasks = function() {
    localStorage.setItem("name", JSON.stringify(score));
  }


//start quiz
startBtn.onclick = startQuiz;

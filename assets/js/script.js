var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content");
var qDiv = document.getElementById("questions");
var stopBtn = document.getElementById("end")

var time = 100;
var timerInterval;

gameIndex = -1;

function startQuiz() {
    timerEl.textContent = time;
    timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;
        
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);

    gameIndex++;
    showQuestion();
};

function endQuiz() {
    



    clearInterval(timerInterval);
};

function showQuestion() {
    var question = questions[gameIndex]
    qDiv.innerHTML = '';

    var questionDiv = document.createElement("div");
    var titleP = document.createElement("p");
    titleP.textContent = question.title;
    questionDiv.append(titleP);
    
    for (var index = 0; index < question.choices.length; index++) {
        var btnEl = document.createElement("button");
        var choice = question.choices[index];

        btnEl.textContent = choice;
        btnEl.onclick = checkAnswer;
        btnEl.setAttribute("data-answer", question.answer);
        questionDiv.append(btnEl);
    }

    qDiv.append(questionDiv)
};

function checkAnswer(event) {
    var answer = event.target.getAttribute("data-answer");
    var choice = event.target.textContent;

    if (choice === answer) {
        console.log("You got it!")
    } else {
        time -= 10;
        console.log("NOPE!!!")
    }

    gameIndex++
    showQuestion();
};

startBtn.onclick = startQuiz;
//dom

var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content");
var qDiv = document.getElementById("questions");
var scoreEl = document.getElementById("score")
console.log('scoreEl', scoreEl)
// var endBtn = document.getElementById("#end")
// var score = document.getElementById("#scoreQuiz")



// variables
var time = 100;
var timerInterval;

var score = 0;

var questionIndex = -1;

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

    questionIndex++;
    showQuestion();
}

//end timer
function endQuiz() {

    clearInterval(timerInterval);
};

// showing questions
function showQuestion() {
    console.log('questionIndex', questionIndex)

    if (questionIndex > questions.length) { 

        endQuiz();
    }

    showScore();
    console.log('showScore', score)

    var question = questions[questionIndex];
    qDiv.innerHTML = '';

    var questionDiv = document.createElement("div");
    var titleP = document.createElement("p");
    titleP.textContent = question.title;
    questionDiv.append(titleP);
    
    for (var i = 0; i < question.choices.length; i++) {
        var btnEl = document.createElement("button");
        var choice = question.choices[i];

        btnEl.textContent = choice;
        btnEl.onclick = function (event){checkAnswer(event,question.answer)};
        // btnEl.setAttribute("data-answer", question.answer);
        questionDiv.append(btnEl);
    } 

    qDiv.append(questionDiv);
};


//check answer
function checkAnswer(event, correctAnswer) {
    // var answer = event.target.getAttribute("data-answer");

    var choice = event.target.textContent;

    if (choice === correctAnswer) {
        questionIndex++;
        score++;
        console.log("You got it!")
    } else {
        questionIndex++
        time -= 10;
        console.log("NOPE!!!")
    }
    
    // questionIndex++
    showQuestion();
};

function showScore(){
    scoreEl.textContent = score;
};

//end quiz
// function endScore(){
//     var score = scores[questionIndex];
//     score.innerHTML = '';

// }


//local storage
myStorage = window.localStorage;
localStorage.setItem('name', 'score');


//start quiz
startBtn.onclick = startQuiz;
// endBtn.onclick = endScore;

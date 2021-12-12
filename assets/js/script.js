var startBtn = document.getElementById("start")
var timerEl =document.getElementById("timer")

var time = 100;
var timerInterval;

gameIndex = 0


function startQuiz() {
    timerEl.textContent = time;
    timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;
        
        if (time <= 0) {
            endQuiz();
                }
    },1000);

    gameIndex++;

    var questionDiv = document.createElement("div");
    var questions = questions[gameIndex];
    var titleP = document.createElement("p");
    titleP.textContent = question.title;
    
    for (var index = 0; index < question.choices.length; index++) {
        var btnEl = array[index];
        
    }
    questionDiv.append(titleP)
    contentDiv.append

};

function endQuiz() {
    clearInterval(timerInterval);
}

startBtn.onclick = startQuiz;
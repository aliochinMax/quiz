var startButtonEl = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var timeEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var sumbitButtonEl = document.getElementById("submit");
var timer;
var buttonEls;
var currentQuestionIndex = 0;
var secondsLeft = 60;
var questionsAnswered = 0;
var questionsCorrect = 0;

var correctSound = document.getElementById("correctSound");
var incorrectSound = document.getElementById("incorrectSound");



function runQuiz(){
    questionsEl.setAttribute("class", "active");
    renderQuestion();
    quizTimeLogic();
}

function quizTimeLogic(){
    clearInterval(timer);
    secondsLeft = 60;
    timer = setInterval(function(){
            timeEl.textContent = secondsLeft;
            secondsLeft--;
            if(secondsLeft <= 0){
                timeEl.textContent = 0;
                endQuiz();
                clearInterval(timer);
       
            }
            
          
        }, 1000)
            
}


function renderQuestion(){
    choicesEl.innerHTML="";
    questionTitleEl.textContent = questions[currentQuestionIndex].question;
    for(i in questions[currentQuestionIndex].answers){
        var buttonEl = document.createElement("button");
        buttonEl.dataset.index = i;
        buttonEl.textContent = questions[currentQuestionIndex].answers[i];
        choicesEl.appendChild(buttonEl);
    }
 
}

function nextQuestion(){
    console.log(currentQuestionIndex);
    if(currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        renderQuestion();
    }
    else{
        endQuiz();
    }
}

function endQuiz(){
    secondsLeft = 1;
    questionsEl.setAttribute("class", "hide");
    endScreenEl.setAttribute("class", "active");
    finalScoreEl.textContent = "You answered " + questionsAnswered + " out of " + questions.length + " and got " + questionsCorrect + " correct";
    
}

function provideFeedback(isCorrect){
    console.log("Running")
    feedbackEl.innerHTML = "";
    feedbackEl.setAttribute("class", "feedback active");
    if (isCorrect){
        feedbackEl.textContent = "Correct!";
        correctSound.play();
    }
    else{
        feedbackEl.textContent = "Wrong!";
        incorrectSound.play();
    }
    var timeLeft_feedback = 5;
    feedbackTimer = setInterval(function(){
        timeLeft_feedback--;
        if(timeLeft_feedback <= 0){
            feedbackEl.innerHTML = "";
            feedbackEl.setAttribute("class", "feedback hide");
            clearInterval(feedbackTimer);
        }
    }, 1000)
    
}


choicesEl.addEventListener("click", function(event){
    var buttonEl = event.target;
    questionsAnswered++;
    if(buttonEl.dataset.index == questions[currentQuestionIndex].correctAnswerIndex){
        provideFeedback(true);
        nextQuestion();
        questionsCorrect++;
    }
    else{
        provideFeedback(false);
        nextQuestion();
        secondsLeft += -5;
    }
});

startButtonEl.addEventListener("mousedown", function(event){
  event.preventDefault();
  
  startScreenEl.setAttribute("class", "hide");
  runQuiz();
});

sumbitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    if(!highscores){
        highscores = [];
    }
    highscores.push([document.getElementById("initials").value.trim(),questionsCorrect])
    localStorage.setItem("highscores", JSON.stringify(highscores));
    endScreenEl.setAttribute("class", "hide");
    startScreenEl.setAttribute("class", "active");
})


// iterate over the list of questions
    // if a user clicked on an answer
    // check the text of the answer (or maybe some data property)
    // compare that value to the correct answer
    // if (the thing the user answered is correct)
    //    display correct!
    // else
    //    display incorrect
    //    subtract time

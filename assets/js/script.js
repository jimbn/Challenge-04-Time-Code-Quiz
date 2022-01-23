
// Question list
var questions = [
    {
        numb: 1, 
        q: "Question 1",
        o: ["answer1.1",
            "answer1.2",
            "answer1.3",
            "answer1.4"
        ],
        a: "answer1.3"
        
    },
    {   
        numb: 2,
        q: "Question 2",
        o: ["answer2.1", 
            "answer2.2", 
            "answer2.3",        
            "answer2.4"
           ],
        a: "answer2.4"
    },
    {   
        numb: 3,
        q: "Question 3",
        o: ["answer3.1", 
            "answer3.2",          
            "answer3.3", 
            "answer3.4" 
           ],
        a: "answer3.1"
    },
    {
        numb: 4,
        q: "Question 4",
        o: ["answer4.1", 
            "answer4.2", 
            "answer4.3", 
            "answer4.4"       
           ],
        a: "answer4.4"
    },
]

// setting elements
const introPanel = document.querySelector(".intro-panel");
const beginBtn = intro.querySelector(".begin-btn");
const quizPanel = document.querySelector(".quiz-panel");
const questionContainer = document.querySelector(".question-container");
const answersContainer = document.querySelector(".answer-container");
const resultDisplay = document.querySelector(".result-display")
const resultPanel = document.querySelector(".result-panel")
const timeDisplay = document.querySelector(".time-display")
const currentTime = document.querySelector(".current-time")

// When click begin quiz button.
beginBtn.onclick = () => {
    introPanel.classList.add("deactivated"); //hide intro
    quizPanel.classList.add("activeQuiz"); //display quiz
    displayQuiz(0); //call showQuestion function
    startTimer(30); //call startTimer function
}

let timeValue = 30;
let questionsCount = 0;
let questionsNumb = 1;
let userScore = 0;

function nextQuestion () {
    if (questionsCount < questions.length-1){
        questionsCount++;
        questionsNumb++;
        displayQuiz(questionsCount);
    }else{
        showResult();
        timeValue = 0;
    }
}

// Getting questions and answer choice from array
function displayQuiz(index){

    // create new span/div tag inside question and answer container and passing values via array index
    let questionTag = "<span>" + questions[index].numb + ") " + questions[index].q + "</span>";
    let answersTag = "<div class='answers'><button>" + questions[index].o[0] + "</button></div>"
    + "<div class='answers'><button>" + questions[index].o[1] + "</button></div>"
    + "<div class='answers'><button>" + questions[index].o[2] + "</button></div>"
    + "<div class='answers'><button>" + questions[index].o[3] + "</button></div>";

    questionContainer.innerHTML = questionTag; 
    answersContainer.innerHTML = answersTag;

    const answers = answersContainer.querySelectorAll(".answers");

    // set onclick to all avilable answers
    for(i=0; i<answers.length; i++){
        answers[i].setAttribute("onclick", "answerSelected(this)");
    }
    
}

// When click an answer
function answerSelected(answer) {
    let userAnswer = answer.textContent; 
    let correctAnswer = questions[questionsCount].a;
    const allAnswers = answersContainer.children.length;

    if(userAnswer === correctAnswer){
        userScore += 1;
        // resultDisplay.textContent = "CORRECT!";
        console.log("Correct Answer!");
        console.log("You have " + userScore +" correct!");        
    } else {
        // resultDisplay.textContent = "INCORRECT!";
        console.log("Incorrect Answer!");
        timeValue -= 15;
    }
    for (i=0; i< allAnswers; i++) {
        answersContainer.children[i].classList.add("disabled");
    }
    nextQuestion();
};


function showResult() {
    quizPanel.classList.remove("activeQuiz"); //remove display quiz
    resultPanel.classList.add("activeResult");
    
    var userScoreDisplay = document.querySelector(".user-score-display");
    userScoreDisplay.textContent = userScore;

    
}

function startTimer () {
    counter = setInterval(timer, 1000);
    function timer() {
        currentTime.textContent = timeValue;
        timeValue--;
        if (timeValue < 9){
            var singleDigit = timeValue.textContent;
            currentTime.textContent = "0" + singleDigit;
        }
        if (timeValue < 0){
            showResult();
            currentTime.textContent = "0";
            clearInterval(counter);
        }
    }
}





// Getting time
var timer = document.getElementsByClassName("timer");

// Setting timer
timer.innerText = "Countdown";


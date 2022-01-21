var score = 0;


// Question list
let questions = [
    {
        id: 0, 
        q: "Question 1",
        o: ["answer1.1",
            "answer1.2",
            "answer1.3",
            "answer1.4"
        ],
        a: "answer1.3"
        
    },
    {   
        id: 1,
        q: "Question 2",
        o: ["answer2.1", 
            "answer2.2", 
            "answer2.3",        
            "answer2.4"
           ],
        a: "answer2.4"
    },
    {   
        id: 2,
        q: "Question 3",
        o: ["answer3.1", 
            "answer3.2",          
            "answer3.3", 
            "answer3.4" 
           ],
        a: "answer3.1"
    },
    {
        id: 3,
        q: "Question 4",
        o: ["answer4.1", 
            "answer4.2", 
            "answer4.3", 
            "answer4.4"       
           ],
        a: "answer4.4"
    },
]

function intro () {
    var intro = document.getElementById("intro");
    var begin = document.querySelector(".begin-quiz");

    begin.addEventListener('click', function() {
        intro.style.display = "none";
        quizBegin();
    });
};


// Start quiz
function quizBegin(id) {
 
var quizDisplay = document.querySelector("#quiz-panel");
quizDisplay.style.display = "block";

// Getting question
const question = document.querySelector("#question");

// Setting question text
question.innerText = questions[id].q;

// Getting anwers
const answers = document.querySelector(".question-container");
var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");
var ans4 = document.querySelector("#ans4");


// Setting possible answer text
ans1.innerText = questions[id].a[0].text;
ans2.innerText = questions[id].a[1].text;
ans3.innerText = questions[id].a[2].text;
ans4.innerText = questions[id].a[3].text;

// Assigning true or false value to the answers
ans1.value = questions[id].a[0].isCorrect;
ans2.value = questions[id].a[1].isCorrect;
ans3.value = questions[id].a[2].isCorrect;
ans4.value = questions[id].a[3].isCorrect;


var result = document.getElementById("result");

var selected = "";


// When selecting answers
ans1.addEventListener('click', function() {
    selected = ans1.value;
    if (selected === "true") {
        result.innerHTML = "CORRECT!";
        score++;
    } else {
        result.innerHTML = "WRONG!";
    }
})
ans2.addEventListener('click', function() {
    selected = ans2.value;
    if (selected === "true") {
        result.innerHTML = "CORRECT!";
        score++;
    } else {
        result.innerHTML = "WRONG!";
    }
})
ans3.addEventListener('click', function() {
    selected = ans3.value;
    if (selected === "true") {
        result.innerHTML = "CORRECT!";
        score++;
    } else {
        result.innerHTML = "WRONG!";
    }
})
ans4.addEventListener('click', function() {
    selected = ans4.value;
    if (selected === "true") {
        result.innerHTML = "CORRECT!";
        score++;
    } else {
        result.innerHTML = "WRONG!";
    }
})


};



// Getting time
var timer = document.getElementsByClassName("timer");

// Setting timer
timer.innerText = "Countdown";


intro();
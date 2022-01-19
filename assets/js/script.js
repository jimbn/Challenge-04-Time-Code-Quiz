// Getting question
const question = document.getElementById("question");

// Setting question text
question.innerText = "Hello World! Q";

// Getting possible answer
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

// Setting possible answer text
ans1.innerText = "Hello World! 1";
ans2.innerText = "Hello World! 2";
ans3.innerText = "Hello World! 3";
ans4.innerText = "Hello World! 4";

// Getting time
var timer = document.getElementsByClassName("timer");

// Setting timer
timer.innerText = "Countdown";

const Questions = [
    {
        id:0,
        q: "Question 1",
        a: [{text: "answer1.1", isCorrect: false},
            {text: "answer1.2", isCorrect: false},
            {text: "answer1.3", isCorrect: true},
            {text: "answer1.4", isCorrect: false},
        ]
    },
    {
        id:2,
        q: "Question 2",
        a: [{text: "answer2.1", isCorrect: false},
            {text: "answer2.2", isCorrect: false},
            {text: "answer2.3", isCorrect: true},
            {text: "answer2.4", isCorrect: false},
        ]
    },
    {
        id:3,
        q: "Question 3",
        a: [{text: "answer3.1", isCorrect: false},
            {text: "answer3.2", isCorrect: true},
            {text: "answer3.3", isCorrect: false},
            {text: "answer3.4", isCorrect: false},
        ]
    },
    {
        id:4,
        q: "Question 4",
        a: [{text: "answer4.1", isCorrect: false},
            {text: "answer4.2", isCorrect: false},
            {text: "answer4.3", isCorrect: false},
            {text: "answer4.4", isCorrect: true},
        ]
    },
]
//Adding questions at the top of the script
var questionChoices = [
    {
        question: "According to the  Popularity of Programming Language Index, what is the most widely used language?",
        answers: [
            {text : "Python", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "Javascript", correct: false },
        ]
    },
    {
        question: "Steve Jobs and Steve Wozniak first found success by making a video game called...",
        answers: [
            { text: "Breakout", correct: true },
            { text: "Brick Breaker", correct: false },
            { text: "Pong", correct: false },
            { text: "Snake", correct: false },
        ]
    },
    {
        question: "In 1947, the first recorded computer bug was found. What was it?",
        answers: [
            { text: "A literal bug", correct: true },
            { text: "Misspelled variable", correct: false },
            { text: "Calculation error", correct: false },
            { text: "Broken transistor", correct: false },
        ]
    },
    {
        question: "The first programming language was made by a team led by Mr. John Bakus, an American computer scientist. What was it named?",
        answers: [
            { text: "FORTRAN", correct: true },
            { text: "Lisp", correct: false },
            { text: "COBOL", correct: false },
            { text: "C", correct: false },
        ]
    },
    {
        question: "The first computer virus written for Windows PCs was created in 1986. What was it named?",
        answers: [
            { text: "Brain", correct: true },
            { text: "MyDoom", correct: false },
            { text: "Slammer", correct: false },
            { text: "ILOVEYOU", correct: false },
        ]
    },
    {
        question: "The first computer programmer was a renowned female mathematician. What was her name?",
        answers: [
            { text: "Ada Lovelace", correct: true },
            { text: "Mary Cartwright", correct: false },
            { text: "Katherine Johnson", correct: false },
            { text: "Maryam Mirzakhani", correct: false },
        ]
    }
];

//HMTL Elements below
var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('main-container');
var questionText = document.getElementById('question')
var answerContainer = document.getElementById('answer-buttons')
var answerChoices = document.getElementById('answer-choice')
var nextBtn = document.getElementById('next-btn')
var timer = document.getElementById('time-num')
startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', nextQuestion)
//Basic variables and values for quiz beginning
let currentQuestionPosition;
var time = 45;
var timerCount;


//Below function starts the quiz on the even listener being triggered
function startQuiz() {
    //Hides start button after clicking it
    startBtn.classList.add('hide');
    //Displays the question container on start button click
    questionContainer.classList.remove('hide');
    timerCount = setInterval(countDown, 1000);
    timer.textContent = time;
    grabQuestion()
};

//Below function grabs the question and its answers
function grabQuestion() {
    //shuffles the question array
    shuffledQuestion = questionChoices.sort(() => Math.random() - .5);
    //Sets the shuffled question as index 0.
    currentQuestionPosition = 0
    currentQuestion = shuffledQuestion[currentQuestionPosition]
    //adds the question text into the question ID in HTML
    questionText.innerHTML = currentQuestion.question;

    //Below code loops through each answer array and makes a button for each text value.
    currentQuestion.answers.forEach(answer => {
        const answerBtn = document.createElement('button');
        answerBtn.innerText = answer.text;
        answerBtn.classList.add('answer-choice');
        if (answer.correct) {
            answerBtn.dataset.correct = answer.correct
        };
        answerContainer.appendChild(answerBtn);
        answerBtn.addEventListener('click', answerCheck);
    });
    

};

//Below function checks if the selected answer is correct
function answerCheck(event) {
    //We are checking the choice event
    const choice = event.target;
    //Grabs the value of the clicked answer
    const choiceValue = choice.dataset.correct;
  
    //Checks if clicked choice is equal to 'true'. Alters time based on comparison.
    if (choiceValue === 'true') {
        time += 5
    } else {
        time -= 15
    };
};

//Below function resets the question container and adds a new question
function resetContainer() {
    while (answerContainer.hasChildNodes()) {
       answerContainer.removeChild(answerContainer.firstChild)
   }
}

//After container is reset, we use the below function to add a new question
function nextQuestion() {

    resetContainer()
    grabQuestion(shuffledQuestion[currentQuestionPosition])
}

//This function starts and updates the timer
function countDown() {
    time--;
    timer.textContent = time;
    // if users is out of time, show GAME OVER
};
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
    },
    {
        question: "Approximately, how many coding languages are in existence?",
        answers: [
            { text: "~30", correct: false },
            { text: "~500", correct: false },
            { text: "~700", correct: true },
            { text: "~1500", correct: false },
        ]
    },
    {
        question: "What was the direct predecessor to C?",
        answers: [
            { text: "Assembly", correct: false },
            { text: "Objective-C", correct: false },
            { text: "Basic", correct: false },
            { text: "B", correct: true },
        ]
    },
    {
        question: "Angular was made by which company?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Google", correct: true },
            { text: "Facebook", correct: false },
        ]
    },
    {
        question: "Tim Berners-Lee wrote this product in 1990. What is it called?",
        answers: [
            { text: "HAL/S", correct: false },
            { text: "HTML", correct: true },
            { text: "HLSL", correct: false },
            { text: "HAXE", correct: false },
        ]
    },
    {
        question: "This language was named after a gem. What is it?",
        answers: [
            { text: "Agate", correct: false },
            { text: "Aquamarine", correct: false },
            { text: "Ruby", correct: true },
            { text: "Amethyst", correct: false },
        ]
    },
    {
        question: "Visual Basic, a third generation language, was released in 1991 and declared legacy in 2008. Which corporation released it?",
        answers: [
            { text: "Intel", correct: false },
            { text: "General Magic", correct: false },
            { text: "Microsoft", correct: true },
            { text: "NEXT", correct: false },
        ]
    },
    
    
];

//HMTL Elements below
var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('main-container');
var questionText = document.getElementById('question')
var answerContainer = document.getElementById('answer-buttons')
var answerChoices = document.getElementById('answer-choice')
var nextBtn = document.getElementById('next-btn')
var timer = document.getElementById('time-num')

//Basic variables and values for quiz beginning
let currentQuestionPosition;
var time = 45;
var timerCount;

//Event listeners for quiz navigation
startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestionPosition++
    console.log(currentQuestionPosition);
    nextQuestion()
});

//Below function starts the quiz on the even listener being triggered
function startQuiz() {
    //Hides start button after clicking it
    startBtn.classList.add('hide');
    //Displays the question container on start button click
    questionContainer.classList.remove('hide');
    //Initiates timer countdown
    timerCount = setInterval(countDown, 1000);
    //Sets the HTML time content to current time which is 45 seconds at the start
    timer.textContent = time;
      //shuffles the question array
    shuffledQuestions = questionChoices.sort(() => Math.random() - .5);
    //Sets index of current question to 0 to keep track of quiz completion
    currentQuestionPosition = 0
    //Runs the grabQuestion function to get a question and question array
    grabQuestion(shuffledQuestions)
};

//Below function grabs the question and its answers
function grabQuestion(shuffledQuestions) {

    currentQuestion = shuffledQuestions[currentQuestionPosition];
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
        time += 1
    } else {
        time -= 10
    };
};

//Below function resets the question container and adds a new question
function resetContainer() {
    //removes all children of the answer button parent container
    while (answerContainer.hasChildNodes()) {
       answerContainer.removeChild(answerContainer.firstChild)
   }
}

//After container is reset, we use the below function to add a new question
function nextQuestion() {
    //resets container and deletes last question info
    resetContainer()
    //if there are more questions, send them to player. Otherwise end quiz.
    if (shuffledQuestions.length > currentQuestionPosition) {
        grabQuestion(shuffledQuestions)
    } else {
        window.localStorage.setItem(time)
        quizEnd()
    }
    
};

function quizEnd() {
    window.location.replace = "./end.html";
    highScore = document.getElementById('scores');
    window.localStorage.getItem(time)
    highScoreLi = document.createElement('li');
    highScoreLi.innerText = time;

};


//This function starts and updates the timer. Ends quiz if time reaches 0.
function countDown() {
    time--;
    timer.textContent = time;
    if (time < 0) {
        quizEnd()
    } 
};


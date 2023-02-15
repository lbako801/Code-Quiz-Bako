const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById('main-container');
const questionText = document.getElementById('question')
const answerChoices = document.getElementById('answer-choice')
const nextBtn = document.getElementById('next-btn')
const timer = document.getElementById('time-num')
startBtn.addEventListener('click', startQuiz)

let shuffledQuestions, currentQuestion

function startQuiz() {
    startBtn.classList.add('hide')
    shuffledQuestions = questionChoices.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    showQuestion()
}

function addNewQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionText.innerHTML = question.question
}







var secondsRemaining = 60

var questionChoices = [
    {
        question: "According to the  Popularity of Programming Language Index, what is the most widely used language?",
        answers: [
            { text: "Python", correct: true },
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
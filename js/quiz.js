let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timeRemaining = 15;
let timerInterval;

// Perguntas e alternativas (10 questões)
const questions = [
    
    { question: "Quail dia eu nasci?", options: [', 11/08.', '01/04.', '27/06.', '08/08.'], correctAnswer: 'b' },
    { question: "quantos anos eu tenhop?", options: ['15', '17', '16', '19'], correctAnswer: 'c' },
    { question: "Que minha cor preferida?", options: ['roxo', 'preto', 'branco', 'azul'], correctAnswer: 'b' },
    { question: "qual meu time do coração?", options: ['Capelle', 'Cruzeiro', 'Corinthians', 'Vasco'], correctAnswer: 'd' },
    { question: "qual esporte eu pratico?", options: ['Basquete', 'Tênis de mesa', 'Vôlei', 'futsal'], correctAnswer: 'a' }
];

function showRules() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('rules-container').style.display = 'block';
}

function closeRules() {
    document.getElementById('rules-container').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
}

function startQuiz() {
    document.getElementById('rules-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
    startTimer();
}

function startTimer() {
    timeRemaining = 15;
    document.getElementById('timer').textContent = timeRemaining;
    clearInterval(timerInterval); // Limpa qualquer intervalo anterior
    timerInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById('timer').textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    const question = questions[currentQuestion];
    const questionElement = document.querySelector('.question');
    const answersElement = document.querySelector('.answers');

    questionElement.innerHTML = `Pergunta ${currentQuestion + 1}: ${question.question}`;
    answersElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${String.fromCharCode(65 + index)}) ${option}`;
        li.setAttribute('onclick', `selectAnswer(this, ${currentQuestion}, '${String.fromCharCode(97 + index)}')`);
        answersElement.appendChild(li);
    });

    const nextButton = document.getElementById('nextButton');
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = 'Mostrar Resultado';
    } else {
        nextButton.textContent = 'Próxima';
    }
}

function selectAnswer(li, questionIndex, answer) {
    const answers = li.parentNode.children;
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('selected', 'correct', 'incorrect');
    }

    li.classList.add('selected');
    userAnswers[questionIndex] = answer;

    if (answer === questions[questionIndex].correctAnswer) {
        li.classList.add('correct');
    } else {
        li.classList.add('incorrect');
    }

    Array.from(answers).forEach(item => item.onclick = null);
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function showResult() {
    const result = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const parabensElement = document.getElementById('parabens');

    scoreElement.textContent = score;

    if (score === 5) {
        parabensElement.innerHTML = "<h2>Parabéns, você acertou todas as perguntas! </h2>";
    } else if (score >= 3) {
        parabensElement.innerHTML = "<h2>Ótimo trabalho! Você me chenhece bem! </h2>";
    } else {
        parabensElement.innerHTML = "<h2>Boa tentativa! Continue praticando! </h2>";
    }

    // Esconde o timer após a última pergunta
    document.getElementById('timer').style.display = 'none';

    result.style.display = 'block';
    document.getElementById('nextButton').style.display = 'none';
}

function restartQuiz() {
    window.location.href = "index.html";  
}
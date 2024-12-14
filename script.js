const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


// Variabili per tracciare il quiz
let currentQuestionIndex = 0;
let score = 0;

// Elementi del DOM
const questionBox = document.querySelector('.question-box');
const questionNumber = document.querySelector('.question-number');
const nextBtn = document.getElementById('next-btn');

// Funzione per mescolare le risposte
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Funzione per mostrare una domanda
function showQuestion(index) {
    const currentQuestion = questions[index];

    // Pulizia della question-box
    questionBox.innerHTML = '';

    //Aggiungi la domanda
    const questionText = document.createElement('h1');
    questionText.textContent = currentQuestion.question;
    

    // Mescola le risposte
    const answers = shuffle([currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]);

    // Aggiungi le opzioni come radio button
    answers.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        questionBox.appendChild(label);
    });

    // Aggiorna il numero della domanda
    questionNumber.textContent = `Domanda ${index + 1} / ${questions.length}`;
}
// Funzione per controllare la risposta
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].correct_answer) {
            score++;
        }
    }
}

// Gestione del pulsante Avanti
nextBtn.addEventListener('click', () => {
    // Controlla la risposta
    checkAnswer();

    // Passa alla domanda successiva
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
});

// Funzione per mostrare i risultati
function showResults() {
    questionBox.innerHTML = `
        <h2>Quiz Completato!</h2>
        <p>Hai risposto correttamente a ${score} su ${questions.length} domande.</p>
    `;
    questionNumber.textContent = '';
    nextBtn.style.display = 'none';
}

// Mostra la prima domanda al caricamento
showQuestion(currentQuestionIndex);

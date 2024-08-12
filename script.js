// document.getElementById('start-quiz').addEventListener('click', function() {
//     document.getElementById('quiz-popup').classList.remove('hidden');
// });

// document.getElementById('close-popup').addEventListener('click', function() {
//     document.getElementById('quiz-popup').classList.add('hidden');
// });

// // Close the popup if the user clicks outside the quiz content
// window.addEventListener('click', function(event) {
//     const quizPopup = document.getElementById('quiz-popup');
//     if (event.target == quizPopup) {
//         quizPopup.classList.add('hidden');
//     }
// });






// const quizData = [
//     {
//         question: "What do roses traditionally represent?",
//         options: ["Friendship", "Love", "Wealth", "Luck"],
//         correct: "Love"
//     },
//     {
//         question: "Which flower is commonly associated with the arrival of spring?",
//         options: ["Tulip", "Sunflower", "Rose", "Poinsettia"],
//         correct: "Tulip"
//     },
//     {
//         question: "Which flower is known for its bright yellow petals and cheerful appearance?",
//         options: ["Daisy", "Orchid", "Sunflower", "Lilac"],
//         correct: "Sunflower"
//     },
//     {
//         question: "Which flower is often given on Mother’s Day?",
//         options: ["Carnation", "Lily", "Orchid", "Lavender"],
//         correct: "Carnation"
//     },
//     {
//         question: "What color are most violets?",
//         options: ["Red", "Yellow", "Purple", "Blue"],
//         correct: "Purple"
//     },
//     {
//         question: "Which flower is known for its strong fragrance and is often used in perfumes?",
//         options: ["Rose", "Tulip", "Daffodil", "Poppy"],
//         correct: "Rose"
//     },
//     {
//         question: "Which flower is commonly associated with good luck and prosperity?",
//         options: ["Marigold", "Orchid", "Lily", "Clover"],
//         correct: "Marigold"
//     },
//     {
//         question: "What flower is often associated with Valentine's Day?",
//         options: ["Daffodil", "Rose", "Daisy", "Sunflower"],
//         correct: "Rose"
//     },
//     {
//         question: "Which flower is known for its healing properties and is often used in herbal remedies?",
//         options: ["Lavender", "Tulip", "Iris", "Pansy"],
//         correct: "Lavender"
//     },
//     {
//         question: "Which flower is often used in wedding bouquets for its purity and elegance?",
//         options: ["Lily", "Daffodil", "Poppy", "Sunflower"],
//         correct: "Lily"
//     }
// ];

// let currentQuestionIndex = 0;
// let correctAnswers = 0;

// const quizQuestion = document.getElementById('quiz-question');
// const quizOptions = document.getElementById('quiz-options');
// const nextQuestionButton = document.getElementById('next-question');
// const quizResult = document.getElementById('quiz-result');
// const retryQuizButton = document.getElementById('retry-quiz');
// const mainPageButton = document.getElementById('main-page');
// const quizScore = document.getElementById('quiz-score');

// function loadQuestion() {
//     quizQuestion.innerText = quizData[currentQuestionIndex].question;
//     quizOptions.innerHTML = '';

//     quizData[currentQuestionIndex].options.forEach((option, index) => {
//         const input = document.createElement('input');
//         input.type = 'radio';
//         input.name = 'quiz-option';
//         input.id = `option${index}`;
//         input.value = option;

//         const label = document.createElement('label');
//         label.setAttribute('for', `option${index}`);
//         label.innerText = option;

//         quizOptions.appendChild(input);
//         quizOptions.appendChild(label);
//     });
// }

// function handleNextQuestion() {
//     const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
//     if (!selectedOption) {
//         alert('Please select an answer!');
//         return;
//     }

//     const isCorrect = selectedOption.value === quizData[currentQuestionIndex].correct;
//     if (isCorrect) {
//         correctAnswers++;
//     }

//     quizResult.innerText = isCorrect ? "Correct!" : `Wrong! The correct answer was ${quizData[currentQuestionIndex].correct}.`;
//     quizResult.classList.remove('hidden');

//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizData.length) {
//         nextQuestionButton.innerText = "Next";
//     } else {
//         nextQuestionButton.innerText = "Finish";
//         nextQuestionButton.removeEventListener('click', handleNextQuestion);
//         nextQuestionButton.addEventListener('click', showFinalScore);
//     }

//     quizScore.innerText = `${correctAnswers}/${quizData.length}`;
// }

// function showFinalScore() {
//     quizResult.classList.add('hidden');
//     quizQuestion.classList.add('hidden');
//     quizOptions.classList.add('hidden');
//     nextQuestionButton.classList.add('hidden');
//     quizScore.innerText = `Final Score: ${correctAnswers}/${quizData.length}`;

//     if (correctAnswers >= 8) {
//         quizResult.innerHTML = `<p>Congratulations! You're budding with knowledge! 🌼</p>
//                                 <img src="coupon.jpg" alt="Coupon Image">`;
//     } else {
//         quizResult.innerHTML = `<p>Oops! Looks like you've bloomed in the wrong direction this time. 🌱 But don't be a wilted flower—stem up and try again next week! With a little more thyme and effort, you'll be ready to root for a win!</p>`;
//         retryQuizButton.classList.remove('hidden');
//     }

//     quizResult.classList.remove('hidden');
//     mainPageButton.classList.remove('hidden');
// }

// function resetQuiz() {
//     currentQuestionIndex = 0;
//     correctAnswers = 0;
//     quizResult.classList.add('hidden');
//     retryQuizButton.classList.add('hidden');
//     mainPageButton.classList.add('hidden');
//     quizQuestion.classList.remove('hidden');
//     quizOptions.classList.remove('hidden');
//     nextQuestionButton.classList.remove('hidden');
//     quizScore.innerText = "";
//     nextQuestionButton.innerText = "Next";
//     loadQuestion();
// }

// nextQuestionButton.addEventListener('click', handleNextQuestion);
// retryQuizButton.addEventListener('click', resetQuiz);
// mainPageButton.addEventListener('click', function() {
//     window.location.href = 'https://www.farmflorist.com';
// });

// loadQuestion();







document.getElementById('start-quiz').addEventListener('click', function() {
    document.getElementById('quiz-popup').classList.remove('hidden');
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('quiz-popup').classList.add('hidden');
});

// Close the popup if the user clicks outside the quiz content
window.addEventListener('click', function(event) {
    const quizPopup = document.getElementById('quiz-popup');
    if (event.target == quizPopup) {
        quizPopup.classList.add('hidden');
    }
});

// Only using selected questions from the original list
const quizData = [
    {
        question: "What do roses traditionally represent?",
        options: ["Friendship", "Love", "Wealth", "Luck"],
        correct: "Love"
    },
    {
        question: "Which flower is known for its bright yellow petals and cheerful appearance?",
        options: ["Daisy", "Orchid", "Sunflower", "Lilac"],
        correct: "Sunflower"
    },
    {
        question: "What flower is often associated with Valentine's Day?",
        options: ["Daffodil", "Rose", "Daisy", "Sunflower"],
        correct: "Rose"
    },
    {
        question: "Which flower is known for its healing properties and is often used in herbal remedies?",
        options: ["Lavender", "Tulip", "Iris", "Pansy"],
        correct: "Lavender"
    },
    {
        question: "Which flower is often used in wedding bouquets for its purity and elegance?",
        options: ["Lily", "Daffodil", "Poppy", "Sunflower"],
        correct: "Lily"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let hasAnswered = false;

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextQuestionButton = document.getElementById('next-question');
const quizResult = document.getElementById('quiz-result');
// const retryQuizButton = document.getElementById('retry-quiz');
const mainPageButton = document.getElementById('main-page');
const quizScore = document.getElementById('quiz-score');

function loadQuestion() {
    hasAnswered = false;
    quizQuestion.innerText = quizData[currentQuestionIndex].question;
    quizOptions.innerHTML = '';
    quizResult.classList.add('hidden');

    quizData[currentQuestionIndex].options.forEach((option, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quiz-option';
        input.id = `option${index}`;
        input.value = option;

        const label = document.createElement('label');
        label.setAttribute('for', `option${index}`);
        label.innerText = option;

        quizOptions.appendChild(input);
        quizOptions.appendChild(label);
    });

    nextQuestionButton.innerText = "Submit";
}

function handleNextQuestion() {
    if (!hasAnswered) {
        const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
        if (!selectedOption) {
            alert('Please select an answer!');
            return;
        }

        const isCorrect = selectedOption.value === quizData[currentQuestionIndex].correct;
        if (isCorrect) {
            correctAnswers++;
        }

        quizResult.innerText = isCorrect ? "Correct!" : `Wrong! The correct answer was ${quizData[currentQuestionIndex].correct}.`;
        quizResult.classList.remove('hidden');
        hasAnswered = true;
        nextQuestionButton.innerText = "Next";
        quizScore.innerText = `${correctAnswers}/${quizData.length}`;
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }
}

function showFinalScore() {
    quizResult.classList.add('hidden');
    quizQuestion.classList.add('hidden');
    quizOptions.classList.add('hidden');
    nextQuestionButton.classList.add('hidden');
    quizScore.innerText = `Final Score: ${correctAnswers}/${quizData.length}`;

    if (correctAnswers >= 3) {
        quizResult.innerHTML = `<p>Congratulations! You're budding with knowledge! 🌼</p>
                                <img src="coupon.png" alt="Coupon Image">`;
    } else {
        quizResult.innerHTML = `<p>Oops! Looks like you've bloomed in the wrong direction this time. 🌱 But don't be a wilted flower—stem up and try again next week! With a little more thyme and effort, you'll be ready to root for a win!</p>`;
        // retryQuizButton.classList.remove('hidden');
    }

    quizResult.classList.remove('hidden');
    mainPageButton.classList.remove('hidden');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    quizResult.classList.add('hidden');
    // retryQuizButton.classList.add('hidden');
    mainPageButton.classList.add('hidden');
    quizQuestion.classList.remove('hidden');
    quizOptions.classList.remove('hidden');
    nextQuestionButton.classList.remove('hidden');
    quizScore.innerText = "";
    nextQuestionButton.innerText = "Submit";
    loadQuestion();
}

nextQuestionButton.addEventListener('click', handleNextQuestion);
// retryQuizButton.addEventListener('click', resetQuiz);
mainPageButton.addEventListener('click', function() {
    window.location.href = 'https://www.farmflorist.com';
});

loadQuestion();



// Function to show flower at cursor position
function showFlower(event) {
    const flower = document.getElementById('flower');
    flower.style.left = `${event.clientX}px`; // Position flower horizontally at click
    flower.style.top = `${event.clientY}px`;  // Position flower vertically at click
    flower.classList.remove('hidden'); // Show the flower

    // Hide the flower after 3 secondss
    setTimeout(() => {
        flower.classList.add('hidden');
    }, 1500);
}

// Add click event listener to the whole document
document.addEventListener('click', showFlower);

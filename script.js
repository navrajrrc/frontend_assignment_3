let currentQuestionIndex = 0;
const story = [
  {
    question: "You arrive at Ravenwood. What will you do first?",
    answers: [
      { text: "Go to the library", nextQuestion: 1 },
      { text: "Investigate the house", nextQuestion: 2 },
      { text: "Talk to a townsman", nextQuestion: 3 }
    ]
  },
  {
    question: "You find an old book in the library. What will you do?",
    answers: [
      { text: "Read the book", nextQuestion: 4 },
      { text: "Look for more clues", nextQuestion: 5 }
    ]
  },
  // Continue with other story points...
];

function displayQuestion() {
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const currentQuestion = story[currentQuestionIndex];

  questionContainer.textContent = currentQuestion.question;
  answersContainer.innerHTML = ""; // Clear previous answers

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.onclick = () => {
      currentQuestionIndex = answer.nextQuestion;
      displayQuestion();
    };
    answersContainer.appendChild(button);
  });
}

function nextQuestion() {
  displayQuestion();
}

window.onload = function() {
  displayQuestion();
};

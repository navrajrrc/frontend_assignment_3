let currentState = 0;

const story = [
  {
    question: "You are a detective investigating a missing person case. At the scene, you find a locked box with a strange symbol. What will you do?",
    choices: [
      { text: "Open the box", nextState: 1 },
      { text: "Investigate the symbol", nextState: 2 }
    ]
  },
  {
    question: "You open the box and find a mysterious key. The key leads you to a hidden room in the house. What will you do next?",
    choices: [
      { text: "Enter the hidden room", nextState: 3 }
    ]
  },
  {
    question: "You investigate the symbol and discover it’s linked to an old family secret. What will you do next?",
    choices: [
      { text: "Confront the family about the secret", nextState: 3 }
    ]
  },
  {
    question: "You either enter the hidden room to uncover the truth or confront the family about the secret. What will you do?",
    choices: [
      { text: "Enter the hidden room", nextState: 4 },
      { text: "Confront the family", nextState: 4 }
    ]
  },
  {
    question: "You solve the mystery or leave with more questions. The case is now closed.",
    choices: [] 
  }
];

function renderQuestion() {
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");

  const currentStory = story[currentState];

  questionContainer.textContent = currentStory.question;

  answersContainer.innerHTML = "";


  if (currentStory.choices.length === 0) {
    const endMessage = document.createElement("p");
    endMessage.textContent = "The story has ended.";
    answersContainer.appendChild(endMessage);
  } else {

    currentStory.choices.forEach(choice => {
      addAnswerButton(choice.text, choice.nextState);
    });
  }
}

function addAnswerButton(choiceText, nextState) {
  const answersContainer = document.getElementById("answers");


  const button = document.createElement("button");
  button.textContent = choiceText;


  button.addEventListener("click", () => {
    currentState = nextState; 
    renderQuestion(); 
  });


  answersContainer.appendChild(button);
}

window.onload = renderQuestion;

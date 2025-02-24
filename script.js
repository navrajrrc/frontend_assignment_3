// Initialize the current state of the game
let currentState = 0;

// The story structure, including questions and possible choices
const story = [
  // State 0: Starting point
  {
    question: "You are a detective investigating a missing person case. At the scene, you find a locked box with a strange symbol. What will you do?",
    choices: [
      { text: "Open the box", nextState: 1 },
      { text: "Investigate the symbol", nextState: 2 }
    ]
  },
  // State 1: Open the box
  {
    question: "You open the box and find a mysterious key. The key leads you to a hidden room in the house. What will you do next?",
    choices: [
      { text: "Enter the hidden room", nextState: 3 }
    ]
  },
  // State 2: Investigate the symbol
  {
    question: "You investigate the symbol and discover it’s linked to an old family secret. What will you do next?",
    choices: [
      { text: "Confront the family about the secret", nextState: 3 }
    ]
  },
  // State 3: Final decision
  {
    question: "You either enter the hidden room to uncover the truth or confront the family about the secret. What will you do?",
    choices: [
      { text: "Enter the hidden room", nextState: 4 },
      { text: "Confront the family", nextState: 4 }
    ]
  },
  // State 4: Ending
  {
    question: "You solve the mystery or leave with more questions. The case is now closed.",
    choices: [] // No more choices
  }
];

// Function to render the current question and choices based on the state
function renderQuestion() {
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");

  // Get the current question from the story
  const currentStory = story[currentState];

  // Update the question text
  questionContainer.textContent = currentStory.question;

  // Clear previous answers
  answersContainer.innerHTML = "";

  // If there are no more choices, end the story
  if (currentStory.choices.length === 0) {
    const endMessage = document.createElement("p");
    endMessage.textContent = "The story has ended.";
    answersContainer.appendChild(endMessage);
  } else {
    // Add answer buttons dynamically
    currentStory.choices.forEach(choice => {
      addAnswerButton(choice.text, choice.nextState);
    });
  }
}

// Helper function to create answer buttons and link them to the story states
function addAnswerButton(choiceText, nextState) {
  const answersContainer = document.getElementById("answers");

  // Create a button for the choice
  const button = document.createElement("button");
  button.textContent = choiceText;

  // Add event listener to handle the button click
  button.addEventListener("click", () => {
    currentState = nextState; // Update the current state based on the button clicked
    renderQuestion(); // Re-render the question with new choices
  });

  // Append the button to the answers container
  answersContainer.appendChild(button);
}

// Initialize the game by rendering the first question
window.onload = renderQuestion;

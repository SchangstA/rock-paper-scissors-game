// Button elements ✔
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

// Game elements ✔
const youPicked = document.getElementById('selected');
const cpuPicked = document.getElementById('cpu-selected');
const playAgain = document.getElementById('play-again');
const winLose = document.getElementById('win-lose');
const scoreElement = document.getElementById('score');
const resultsContainer = document.getElementById('results-container');
const playerSelection = youPicked;
const computerSelection = cpuPicked;

// hide play again button
playAgain.classList.add('visually-hidden');

// hide results box 
resultsContainer.classList.add('visually-hidden');

// Choices ✔
const choices = [
  { name: 'rock', value: rockButton },
  { name: 'paper', value: paperButton },
  { name: 'scissors', value: scissorsButton }
];

// Rules pop-up
const rulesButton = document.getElementById('rules')
const rulesImage = document.getElementById('rules-pop-up');
rulesButton.addEventListener("click", showRules);

function showRules() {
  rulesImage.classList.remove('visually-hidden');
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  resultsContainer.classList.add('visually-hidden');
  playAgain.classList.add('visually-hidden');
  winLose.classList.add('visually-hidden');
  
  rulesButton.removeEventListener("click", showRules);
  rulesButton.addEventListener("click", hideRules);
}

function hideRules() {
  rulesImage.classList.add('visually-hidden');
  rockButton.classList.remove('visually-hidden');
  paperButton.classList.remove('visually-hidden');
  scissorsButton.classList.remove('visually-hidden');
  
  rulesButton.removeEventListener("click", hideRules);
  rulesButton.addEventListener("click", showRules);
}

// Event listeners for buttons
// Rock button event
rockButton.addEventListener("click", () => {
  addRemove();

  // Results
  youPicked.innerHTML = rockButton.innerHTML;
  cpuPicked.innerHTML = pullComputerChoices();

  if (playerSelection === youPicked && cpuPicked.innerHTML == scissorsButton.innerHTML) {
    winLose.innerHTML = "Player Wins!";
    incrementScore();
  } else if (playerSelection === youPicked && cpuPicked.innerHTML == paperButton.innerHTML) {
    winLose.innerHTML = "Computer Wins!";
  } else {
    winLose.innerHTML = "DRAW!";
  }
});

// Paper button event
paperButton.addEventListener("click", () => {
  addRemove();

  // Results
  youPicked.innerHTML = paperButton.innerHTML;
  cpuPicked.innerHTML = pullComputerChoices();

  if (playerSelection === youPicked && cpuPicked.innerHTML == rockButton.innerHTML) {
    winLose.innerHTML = "Player Wins!";
    incrementScore();
  } else if (playerSelection === youPicked && cpuPicked.innerHTML == scissorsButton.innerHTML) {
    winLose.innerHTML = "Computer Wins!";
  } else {
    winLose.innerHTML = "DRAW!";
  }
});

// Scissors button event
scissorsButton.addEventListener("click", () => {
  addRemove();

  // Results
  youPicked.innerHTML = scissorsButton.innerHTML;
  cpuPicked.innerHTML = pullComputerChoices();

  if (playerSelection === youPicked && cpuPicked.innerHTML == paperButton.innerHTML) {
    winLose.innerHTML = "Player Wins!";
    incrementScore();
  } else if (playerSelection === youPicked && cpuPicked.innerHTML == rockButton.innerHTML) {
    winLose.innerHTML = "Computer Wins!";
  }
  if (playerSelection === youPicked && cpuPicked.innerHTML == scissorsButton.innerHTML){
    winLose.innerHTML = "DRAW!";
  }
});

function pullComputerChoices() {
  getComputerChoice(choices).value.innerHTML;
  if (getComputerChoice(choices).value == paperButton) {
    return paperButton.innerHTML;
  } else if (getComputerChoice(choices).value == rockButton) {
    return rockButton.innerHTML;
  } else if (getComputerChoice(choices).value == scissorsButton){
    return scissorsButton.innerHTML;
  } else {
    return pullComputerChoices();
  }
}

// Function to get computer's choice ✔
function getComputerChoice(choices) {

  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

// Play Round Function
function playRound(youPicked, cpuPicked) {

  if (playerChoice === getComputerChoice(choices)) {
    return "Draw!";
  } else if 
  (playerChoice === scissorsButton && computerChoice === scissorsButton)  {
    return "Player Wins!";
  }
}
  

// Event listener for play again button ✔
playAgain.addEventListener("click", () => {
  removeAdd();
});

// Function to hide buttons ✔
function addRemove() {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  resultsContainer.classList.remove('visually-hidden');
  playAgain.classList.remove('visually-hidden');
  winLose.classList.remove('visually-hidden');
}

// Function to hide results ✔
function removeAdd() {
  rockButton.classList.remove('visually-hidden');
  paperButton.classList.remove('visually-hidden');
  scissorsButton.classList.remove('visually-hidden');
  resultsContainer.classList.add('visually-hidden');
  playAgain.classList.add('visually-hidden');
  winLose.classList.add('visually-hidden');
}

// Function to calculate score ✔
let score = 0;
scoreElement.innerHTML = score;
function incrementScore() {
  score++;
  scoreElement.innerHTML = score;
}






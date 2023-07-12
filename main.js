// Button elements
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

// Game elements
const youPicked = document.getElementById('selected');
const cpuPicked = document.getElementById('cpu-selected');
const playAgain = document.getElementById('play-again');
const winLose = document.getElementById('win-lose');
const resultsContainer = document.getElementById('results-container');

// Choices
const choices = ['rock', 'paper', 'scissors'];

// Event listeners for buttons
rockButton.addEventListener("click" , () => {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  resultsContainer.classList.remove('visually-hidden');
  playAgain.classList.remove('visually-hidden');
  winLose.classList.remove('visually-hidden');
  youPicked.innerHTML = rockButton.innerHTML;
  cpuPicked.innerHTML = rockButton.innerHTML;
})
paperButton.addEventListener("click" , () => {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  resultsContainer.classList.remove('visually-hidden');
  playAgain.classList.remove('visually-hidden');
  winLose.classList.remove('visually-hidden');
  youPicked.innerHTML = paperButton.innerHTML
  cpuPicked.innerHTML = paperButton.innerHTML
})
scissorsButton.addEventListener("click" , () => {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  resultsContainer.classList.remove('visually-hidden');
  playAgain.classList.remove('visually-hidden');
  winLose.classList.remove('visually-hidden');
  youPicked.innerHTML = scissorsButton.innerHTML
  cpuPicked.innerHTML = scissorsButton.innerHTML
})

// Function to get computer's choice
function getComputerChoice() {
  const randomElement = choices[Math.floor(Math.random() * 3)];
  return randomElement;
}

// Event listener for play again button
playAgain.addEventListener("click" , () => {
  resultsContainer.classList.add('visually-hidden');
  playAgain.classList.add('visually-hidden');
  winLose.classList.add('visually-hidden'); 
  rockButton.classList.remove('visually-hidden');
  paperButton.classList.remove('visually-hidden');
  scissorsButton.classList.remove('visually-hidden');
})
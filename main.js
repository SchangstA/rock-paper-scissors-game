const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'
const choices = ['rock', 'paper', 'scissors'];
const youPicked = document.getElementById('selected');
const cpuPicked = document.getElementById('cpu-selected');

rockButton.addEventListener("click" , () => {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  youPicked.innerHTML = rockButton.innerHTML;
  cpuPicked.innerHTML = getComputerChoice.innerHTML;
})
paperButton.addEventListener("click" , () => {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  youPicked.innerHTML = paperButton.innerHTML
})
scissorsButton.addEventListener("click" , () => {
  rockButton.classList.add('visually-hidden');
  paperButton.classList.add('visually-hidden');
  scissorsButton.classList.add('visually-hidden');
  youPicked.innerHTML = scissorsButton.innerHTML
})

function getComputerChoice() {
  const randomElement = choices[Math.floor(Math.random() * 3)];
  return randomElement;
}
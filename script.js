//document.addEventListener('DOMContentLoaded');
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const smallUserWord = 'user'.fontsize(3).sub();
const smallCompWord = 'comp'.fontsize(3).sub();

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);  
    return choices[randomNumber];
}

function convert(word) {
    if (word === 'rock') return 'Rock';
    if (word === 'paper') return 'Paper';
    if (word === 'scissors') return 'Scissors'
}



function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(compChoice)}${smallCompWord} . You win! \uD83D\uDD25`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}

function lose(userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML =  `${convert(compChoice)}${smallCompWord} beats ${convert(userChoice)}${smallUserWord} . You lose!	\uD83D\uDCA9`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
}

function draw(userChoice, compChoice){
    result_p.innerHTML =  `${convert(compChoice)}${smallCompWord} and ${convert(userChoice)}${smallUserWord} . It is a draw!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 300);
}

function game(userChoice){
  const compChoice = getCompChoice();
  switch(userChoice + compChoice){
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        win(userChoice, compChoice);
        break;
    case 'rockpaper':
    case 'paperScissors':
    case 'scissorsrock':
        lose(userChoice, compChoice);
        break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        draw(userChoice, compChoice);
        break;
 } 
}


function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    });

    paper_div.addEventListener('click', function() {
        game('paper');
    });

    scissors_div.addEventListener('click', function() {
        game('scissors');
    });
}

main();
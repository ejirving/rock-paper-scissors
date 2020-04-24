const moves = {
    //rock paper scissors rules
    Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
    Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
    Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
}
//tracking wins and losses
let playerWins = 0;
let playerLosses = 0;
let ties = 0;
//HTML elements
const userScore_span = document.getElementById("user-score");
const tieScore_span = document.getElementById("tie-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

//chooses computer's move
function computerPlay() {
    switch (Math.ceil(Math.random()*3)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

//plays a round with inputs specified
function playRound(playerSelection, computerSelection) {
    //check for tie first
    if (playerSelection === computerSelection){
        return "T";
    } else if (moves[playerSelection].strongTo === computerSelection) {
        return "W";
    } else if (moves[playerSelection].weakTo === computerSelection) {
        return "L";
    } else {
        return "Error! playRound function";
    }
}

function game(playerSelection){

    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result === "T") {
        ties++;
        userScore_span.innerHTML = userScore;
        tieScore_span.innerHTML = ties;
        compScore_span.innerHTML = computerScore;
    } else if (result === "W") {
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = computerScore;
        result_div.innerHTML = ``;
    } else if (result === "L") {
        computerScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = computerScore;
        result_div.innerHTML = `${playerSelection} loses to  ${computerSelection}  You Lost! 😔`;
    }
}

function main(){

    rock_div.addEventListener("click", function() {
        game("Rock");
    });

    paper_div.addEventListener("click", function() {
        game("Paper");
    });

    scissors_div.addEventListener("click", function() {
        game("Scissors");
    });
}
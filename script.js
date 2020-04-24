//rock paper scissors rules
const rules = {
    Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
    Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
    Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
}
//tracking wins and losses
let playerWins = 0;
let computerWins = 0;
let ties = 0;
//HTML elements
const playerScore_span = document.getElementById("player-score");
const tieScore_span = document.getElementById("tie-score");
const compScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetButton = document.getElementById("reset-button");

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
    } else if (rules[playerSelection].strongTo === computerSelection) {
        return "W";
    } else if (rules[playerSelection].weakTo === computerSelection) {
        return "L";
    } else {
        console.log("Error! playRound function");
    }
}

function game(playerSelection){

    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result === "T") {
        ties++;
        tieScore_span.innerHTML = ties;
        result_div.innerHTML = `${playerSelection} equals ${computerSelection} It's A Draw!`;
    } else if (result === "W") {
        playerWins++;
        playerScore_span.innerHTML = playerWins;
        result_div.innerHTML = `${playerSelection} beats ${computerSelection} You Win! 🏆`;
    } else if (result === "L") {
        computerWins++;
        compScore_span.innerHTML = computerWins;
        result_div.innerHTML = `${computerSelection} beats ${playerSelection} You Lost! 😞`;
    } else {
        console.log("Error! game function");
    }
}

function main(){

    rock_div.addEventListener("click", function(){game("Rock")});

    paper_div.addEventListener("click", function(){game("Paper")});

    scissors_div.addEventListener("click", function(){game("Scissors")});

    resetButton.addEventListener("click", function(){reset()});

}

function reset(){
    tieScore_span.innerHTML = ties = 0;
    playerScore_span.innerHTML = playerWins = 0;
    compScore_span.innerHTML = computerWins = 0;
    result_div.innerHTML = ``;
}

main();
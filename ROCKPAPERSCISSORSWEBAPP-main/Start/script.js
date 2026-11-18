
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        result_p.textContent = `It's a draw! Both chose ${userChoice}.`;
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        userScore_span.textContent = userScore;
        result_p.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } 
    else {
        computerScore++;
        computerScore_span.textContent = computerScore;
        result_p.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}

rock_div.addEventListener("click", () => game("rock"));
paper_div.addEventListener("click", () => game("paper"));
scissors_div.addEventListener("click", () => game("scissors"));

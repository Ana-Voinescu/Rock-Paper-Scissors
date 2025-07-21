function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

  switch (num) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors");
    return choice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice,computerChoice){
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore+=1;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore+=1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore+=1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore+=1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore+=1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore+=1;
        }
    }
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore>computerScore){
        console.log("You Won the game!");
    }
    else if(humanScore<computerScore){
        console.log("You lost the game!");
    }
    else{
        console.log("It`s a tie!");
    }
}
playGame();
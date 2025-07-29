function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const finalResult = document.createElement("p");
finalResult.style.fontSize = "28px";
finalResult.style.fontWeight = "bold";
document.querySelector(".results-container").appendChild(finalResult);

function playRound(humanChoice, computerChoice) {
  let message = "";

  if (humanChoice === computerChoice) {
    message = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    message = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    message = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  roundResult.textContent = message;
  scoreDisplay.textContent = `Score: Player ${humanScore} - Computer ${computerScore}`;

  // בדיקה מי הגיע ל-5
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      finalResult.textContent = "🎉 You Won the Game!";
    } else {
      finalResult.textContent = "💻 Computer Won the Game!";
    }

    // נטרול הכפתורים
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

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
    let choice = prompt("Choose Rock/Paper/Scissor");
    return choice;
}
console.log(getHumanChoice())
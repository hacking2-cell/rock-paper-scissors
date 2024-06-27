
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
};

function getHumanChoice() {

     while (true) {
         const choice = prompt('Please enter "rock", "paper" or "scissors."').toLowerCase();
         if (choices.includes(choice)) {
            return choice;
         } else {
            prompt('Please enter a correct choice "rock", "paper" or "scissors."');
         };
     };
};

const emojiMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌"
  };
   

  


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {

        let humanEmoji = emojiMap[humanChoice];
        let computerEmoji = emojiMap[computerChoice];
        let winner;
    
        if (humanChoice === computerChoice) {
            winner = `${humanEmoji} It's a tie! ${computerEmoji}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors" ||
                   humanChoice === "paper" && computerChoice === "rock" ||
                   humanChoice === "scissors" && computerChoice === "paper") {
            winner = `You win ${humanEmoji} beats ${computerEmoji}`;
            humanScore++
        } else {
            winner = `You lose ${computerEmoji} beats ${humanEmoji}`;
            computerScore++
        }
        return winner;
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result= playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        
        if (i === 4) {
            let finalWinner;
            if (computerScore > humanScore) {
                finalWinner = `You lose the match ${computerScore} - ${humanScore}`;
                
            } else  {
                finalWinner = `You win the match ${humanScore} - ${computerScore}`;
            }
            console.log(finalWinner)
        }
    };
    
};

playGame()
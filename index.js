const rockBtn = document.querySelector('#choiceRock');
const paperBtn = document.querySelector('#choicePaper');
const scissorsBtn = document.querySelector('#choiceScissors');
const winnerText = document.querySelector('#winner');
const humanScoreText = document.querySelector('#humanScore');
const computerScoreText = document.querySelector('#computerScore');
const restartBtn = document.querySelector('#restart');
const choices = ["✊", "✋", "✌"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
};
    let humanScore = 0;
    let computerScore = 0;  
    let roundWinner;
/*
 rockBtn.addEventListener('click', ()=> { getHumanChoice('✊')});
 paperBtn.addEventListener('click', ()=> { getHumanChoice('✋')});
 scissorsBtn.addEventListener('click', ()=> { getHumanChoice('✌')});
*/
    function playRound(humanChoice, computerChoice) {
        
            if (humanChoice === computerChoice) {
                roundWinner = `${humanChoice} It's a tie! ${computerChoice}`;
            } else if (humanChoice === "✊" && computerChoice === "✌" ||
                       humanChoice === "✋" && computerChoice === "✊" ||
                       humanChoice === "✌" && computerChoice === "✋") {
                roundWinner = `You win ${humanChoice} beats ${computerChoice}`;
                humanScore++
            } else {
                roundWinner = `You lose ${computerChoice} beats ${humanChoice}`;
                computerScore++
            }
        
            winnerText.textContent = `WINNER: ${roundWinner}`;
            
            humanScoreText.textContent = `YOUR SCORE: ${humanScore}`;
            
            computerScoreText.textContent = `COMPUTER SCORE: ${computerScore}`;

        
        
    };
   

restartBtn.addEventListener('click', () => {
        computerScore = 0;
        humanScore = 0;
        roundWinner = "";
        winnerText.textContent = `WINNER: ${roundWinner}`;
        
        humanScoreText.textContent = `YOUR SCORE: ${humanScore}`;
        
        computerScoreText.textContent = `COMPUTER SCORE: ${computerScore}`;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        
});

const buttons = [rockBtn, paperBtn, scissorsBtn];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        checkForWinner();
    });

})

function checkForWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        if (humanScore === 5) {
            winnerText.textContent = `YOU WIN THE MATCH!`;
        } else {
            winnerText.textContent = `YOU LOSE THE MATCH!`;
        }
    }
};

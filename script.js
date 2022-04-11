
    //computer's play
    let playerScore=0;
    let computerScore=0;

    function computerPlay() {
    randomNum = Math.floor(Math.random() * 3)+1;
    
    switch (randomNum) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
            
    }

}



//play round
function playRound(playerSelection, computerSelection) {
    const result=document.querySelector('#endGame')
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    let tie = 'Tie!';
    let win = 'You win this round!';
    let lose = 'You lose this round!';
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        result.textContent=`${tie} Player Score:${playerScore} Computer Score: ${computerScore}`;
    } else if ((playerSelection === "Rock" && computerSelection == "Scissors") || 
    (playerSelection === "Paper" && computerSelection == "Rock") || (playerSelection === 
        "Scissors" && computerSelection == "Paper")) {
        playerScore++
        if (playerScore==5){
            result.textContent=`You win! layer Score:${playerScore} Computer Score: ${computerScore}`;
            return;
        }
        result.textContent=`${win} Player Score:${playerScore} Computer Score: ${computerScore}`;
        
    } else {
        computerScore++
        if (computerScore==5){
            result.textContent=`You lose! Player Score:${playerScore} Computer Score: ${computerScore}`;
            return;
        }
        result.textContent=`${lose} Player Score:${playerScore} Computer Score: ${computerScore}`;

    }
}



const buttons = document.querySelectorAll('button');
// iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id,computerPlay()));
});
// function game() {
//     for (let i =0; i<5; i++) {
//         playerchoice = window.prompt('Rock paper or scissors?');
//         console.log(playRound(playerchoice,computerPlay()));
//     }
    
// }





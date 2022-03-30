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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    let tie = 'Tie!';
    let win = 'You win!';
    let lose = 'You Lose!';
    if (playerSelection == 'Rock' && computerSelection == 'Rock') 
    {
        return tie;
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Paper') 
    {
        return lose;
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') 
    {
        return win;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') 
    {
        return win;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Paper') 
    {
        return tie;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') 
    {
        return lose;
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') 
    {
        return lose;
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') 
    {
        return win;
    }

    else (playerSelection == 'Scissors' && computerSelection == 'Scissors') 
    {
        return lose;
    }
}

function game() {
    for (let i =0; i<5; i++) {
        playerchoice = window.prompt('Rock paper or scissors?');
        console.log(playRound(playerchoice,computerPlay()));
    }
    
}


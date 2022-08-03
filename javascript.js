const gameContainer = document.querySelector("#gameContainer");
const startTxt = document.createElement("p");
const startGame = document.createElement("button");
const gameTxt = document.createElement("p");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const resultContainer = document.querySelector("#resultContainer");
const gameResult = document.createElement("p");
const scoreBoard = document.createElement("p");

let playerWins = 0;
let computerWins = 0;
// classLists
startTxt.classList.add("startTxt");
startGame.classList.add("startGame");
gameTxt.classList.add("gameTxt")
rockBtn.classList.add("gameBtn");
paperBtn.classList.add("gameBtn");
scissorsBtn.classList.add("gameBtn");
// Button IDs
rockBtn.id = "Rock";
paperBtn.id = "Paper";
scissorsBtn.id = "Scissors";
// innerTexts
startTxt.innerText = "Play a game of Rock Paper Scissors?";
startGame.innerText = "Start Game";
gameTxt.innerText = "Choose!";
rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorsBtn.innerText = "Scissors"

// Start Game Function
window.onload = function newGame() {
    gameContainer.appendChild(startTxt);
    gameContainer.appendChild(startGame);
    // Start Game once button is clicked
    startGame.addEventListener("click", () => {
        // Score Rest
        playerWins = 0;
        computerWins = 0;
        // Removes Start Game Text and Button
        gameContainer.removeChild(startTxt);
        gameContainer.removeChild(startGame);
        // Adds Game Text and Button
        game();
    })
}
  
// Creates Game Choices
function gameChoices() {
    gameContainer.appendChild(gameTxt);
    gameContainer.appendChild(rockBtn);
    gameContainer.appendChild(paperBtn);
    gameContainer.appendChild(scissorsBtn);
}

 // Computer's Game Choice
 function computerPlay() {
     //Randomly select numbers between 1-3
     let randomNum = Math.floor(Math.random() * 3) + 1;
     let computerChoice = "";
     //Convert Random Number to a selection string (i.e. Rock = 1, Paper = 2, Scissors = 3)
     if (randomNum === 1) {
         computerChoice = "Rock";
     }
     else if (randomNum === 2) {
         computerChoice = "Paper";
     }
     else {
         computerChoice = "Scissors";
     }
     //Return random selection
     return computerChoice;
 }

 // Function no longer needed since button inputs are now used
// // Player's Game Choice String Conversion
// function playersPlay(playersChoice) {
//     //Take users input and split first lett and rest
//     playersChoice = playersChoice[0].toUpperCase() + playersChoice.slice(1).toLowerCase();

//     //Return player selection
//     return playersChoice;
// }

// // Compares computer's and player's selection to determine winner
function playRound (playerSelection, computerSelection) { 
    let results = "";
    // Rock Conditions
    // Win
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        results = `YOU WIN! ${playerSelection} beats ${computerSelection}!`;
    }
    // Lose
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        results = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`;
    }
    // Tie
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        results = `TIE GAME!`;
    }
    // Paper Conditions
    // Win
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        results = `YOU WIN! ${playerSelection} beats ${computerSelection}!`
    }
    // Lose
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        results = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`
    }
    // Tie
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        results = `TIE GAME!`
    }
    // Scissors Conditions
    // Win
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        results = `YOU WIN! ${playerSelection} beats ${computerSelection}!`
    }
    // Lose
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        results = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`
    }
    // Tie
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        results = `TIE GAME!`
    }
   // Error
    else {
        results = `ERROR! Something went wrong!`
    }
    // Return game result
    console.log(results);
    return results;
}

function score(round) {
    //         let roundResult = playRound(gameButton, computerPlay());
    // Determine winner from round results
    let gameWin = round.includes("WIN");
    let gameLose = round.includes("LOSE");
    // Tie Game
    if (gameWin === false && gameLose === false){
        return [playerWins, computerWins];
    }
    // Player Wins 
    else if (gameWin === true){
        playerWins++;
        return [playerWins, computerWins];
    } 
    // Computer Wins
    else if (gameLose === true) {
        computerWins++;
        return [playerWins, computerWins];
    }
    // Error
    else {
        return alert(`Error: Something went wrong in the game!`);
    }
}

function game() {
    gameChoices();

    const gameOptions = document.querySelectorAll(".gameBtn");
    gameOptions.forEach(button => button.addEventListener("click", function (e) {
        let roundResult = playRound(this.innerText, computerPlay());
        let scoreArray = score(roundResult);
        gameResult.innerText = roundResult;
        scoreBoard.innerText = `${scoreArray[0]} - ${scoreArray[1]}`;
        resultContainer.appendChild(gameResult);
        resultContainer.appendChild(scoreBoard);
    }))

    
}
// function game() {
//     // Variable to count round wins
//     let playerWins = 0;
//     let computerWins = 0;
//     let gameWin = false;
//     let gameLose = false;
//     const playButton = document.querySelectorAll("button");
//     const gameResult = document.createElement("p");
//     let gameButton = "";

    
    
//     // Create a loop for 5 games
//     for (let i = 0; i < 5; i++) {
//         // playButton.forEach(button => button.addEventListener("click", function (e) {
//         //     gameButton = this.value;
//         //     gameResult.innerText = playRound(gameButton, computerPlay());
//         //     gameResult.classList.add("gameResult");
//         //     //resultContainer.appendChild(gameResult);

//         // }));
//         let roundResult = playRound(gameButton, computerPlay());

//         // Determine winner from round results
//         gameWin = roundResult.includes("WIN");
//         gameLose = roundResult.includes("LOSE");
//         // Tie and round repeats
//         if (gameWin === false && gameLose === false) {
//             i--;
//             console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
//         }
//         // Player Wins
//         else if (gameWin === true){
//             playerWins++; 
//             gameLose = false
//             console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
//         } 
//         // Computer Wins
//         else if (gameLose === true) {
//             computerWins++;
//             gameWin = false;
//             console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
//         }
//         // Error
//         else {
//             return winner = `Error: Something went wrong in the game!`
//         }

//         // First to win 3 Games win
//         // Player wins the game
//         if (playerWins == 3) {
//             return winner = `YOU WIN THE GAME! Player: ${playerWins} - Computer: ${computerWins}`;
//         }
//         // Computer wins the game
//         else if (computerWins == 3) {
//             return winner = `YOU LOST THE GAME! Player: ${playerWins} - Computer: ${computerWins}`;
//         }

//     }
// }




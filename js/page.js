/**
 * @author Rosalina Delwiche
 */

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;


var computerChoice = 0;
var userChoice = 0;
var win = -1;
var userScoreTotal = 0;
var computerScoreTotal = 0;
var nameOfUser = "Player";
var gameNum = 0;

const scoreBoard = [];


/**
 * to chose opponent choice by random 
 */
function computerSelection(){
    computerChoice = Math.floor(Math.random() * (3)) + 1;
    switch(computerChoice){
        case ROCK:  
            document.getElementById("o-img").src="./svg/rock.svg";
            document.getElementById("computerSelection").src="./svg/rock.svg";   
            break;
        case PAPER: 
            document.getElementById("o-img").src="./svg/paper.svg";
            document.getElementById("computerSelection").src="./svg/paper.svg";   
            break;
        case SCISSORS: 
            document.getElementById("o-img").src="./svg/scissors.svg";
            document.getElementById("computerSelection").src="./svg/scissors.svg";   
            break;
    }
}

/**
 * to set user selection as rock
 */
function userSelectionRock(){
    userChoice = ROCK;
     userSelectionAfter();
     document.getElementById("userSelection").src="./svg/rock.svg";   
} 

/**
 * to set user selection as paper
 */
function userSelectionPaper(){
    userChoice = PAPER;
    userSelectionAfter();    
    document.getElementById("userSelection").src="./svg/paper.svg";
}

/**
 * to set user selection as scissors
 */
function userSelectionScissors(){
    userChoice = SCISSORS;
    userSelectionAfter();
    document.getElementById("userSelection").src="./svg/scissors.svg";

} 

/**
 * to carry out the game after user selection
 * carries out computer selection, computation of win or loose, and updating of score
 */
function userSelectionAfter(){
    nameOfUser =  document.getElementById("nameOfUser").value;
    if(nameOfUser != "" ){document.getElementById("playerName").innerHTML = nameOfUser;}

    console.log("USER " + nameOfUser);
    computerSelection();
    winOrLoss();
    updateScore();
    clearSelection();
    gameNum++;
    if(gameNum == 1){
        document.getElementById("nameOfUser").style.display = "none";
    }
    
    
}


/**
 * clears the user and computer choices for the next game
 */
function clearSelection(){
    userChoice, computerChoice = 0;
    win = -1;
}

/**
 * computes whether the user has won or lost
 */
function winOrLoss(){
    if((userChoice == ROCK && computerChoice == SCISSORS) || (userChoice == PAPER && computerChoice == ROCK) || (userChoice == SCISSORS && computerChoice == PAPER)){
        win = 1;
    }
    else if((computerChoice == ROCK && userChoice == SCISSORS) || (computerChoice == PAPER && userChoice == ROCK) || (computerChoice == SCISSORS && userChoice == PAPER)){
        win = 0;
    }
    else {win = 2;}
}

/**
 * updates the game score accordingly on whether the computer won, user won, or it was a tie
 * as a result of a win, one is added to the winners score
 */
function updateScore(){
    if(nameOfUser == ""){nameOfUser = "Player";}

    if(win == 1){   
        userScoreTotal++;
        document.getElementById("result").innerHTML = "Congratulations " + nameOfUser + ", you win.";
    }
    else if(win == 0){
        computerScoreTotal++;
        document.getElementById("result").innerHTML = "Sorry " + nameOfUser + ", you loose";
    }
    else if(win == 2){
        computerScoreTotal++;
        userScoreTotal++;
        document.getElementById("result").innerHTML = "It's a Tie";
    }


    document.getElementById("oscore").innerHTML = computerScoreTotal;
    document.getElementById("pscore").innerHTML = userScoreTotal;


}

/**
 * resets the computer and user scores to 0 and selections to mystery, awaiting new game
 */
function resetGame(){
        updateScoreBoard();

        userScoreTotal = 0;
        computerScoreTotal = 0;
        gameNum = 0;

        document.getElementById("userSelection").src="./svg/mystery.svg";
        document.getElementById("computerSelection").src="./svg/mystery.svg";
        document.getElementById("o-img").src="./svg/mystery.svg";


        document.getElementById("oscore").innerHTML = computerScoreTotal;
        document.getElementById("pscore").innerHTML = userScoreTotal;
        document.getElementById("nameOfUser").value = "";
        document.getElementById("nameOfUser").style.display = "block";  
        document.getElementById("playerName").innerHTML = "Player";

}

function updateScoreBoard(){
    var winRate = userScoreTotal / gameNum;
    var table = document.getElementById("scoreBoard");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = nameOfUser ;
    cell2.innerHTML = winRate;
}


/* for text */

const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);
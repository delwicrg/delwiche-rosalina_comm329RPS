
var computerChoice = 0;
var userChoice = 0;
var win = -1;
var userScoreTotal = 0;
var computerScoreTotal = 0;
var nameOfUser = "NA";

// function to chose opponent choice by random 
function computerSelection(){
    computerChoice = Math.floor(Math.random() * (3)) + 1;
    switch(computerChoice){
        case 1:   // set to rock 
            document.getElementById("o-img").src="./svg/rock.svg";
            document.getElementById("computerSelection").src="./svg/rock.svg";   
            break;
        case 2: // set to paper
            document.getElementById("o-img").src="./svg/paper.svg";
            document.getElementById("computerSelection").src="./svg/paper.svg";   
            break;
        case 3:  // set to scissors
            document.getElementById("o-img").src="./svg/scissors.svg";
            document.getElementById("computerSelection").src="./svg/scissors.svg";   
            break;
    }
    console.log("COMPUTER CHOICE" + computerChoice);
}

//userSelection

function userSelectionRock(){
    userChoice = 1;
     userSelectionAfter();
     document.getElementById("userSelection").src="./svg/rock.svg";   
} 
function userSelectionPaper(){
    userChoice = 2;
    userSelectionAfter();    
    document.getElementById("userSelection").src="./svg/paper.svg";
}

function userSelectionScissors(){
    userChoice = 3;
    userSelectionAfter();
    document.getElementById("userSelection").src="./svg/scissors.svg";

} 

function userSelectionAfter(){
    nameOfUser =  document.getElementById("nameOfUser").value;
    console.log("USER " + nameOfUser);
    computerSelection();
    winOrLoss();
    updateScore();
    clearSelection();
    
}



function clearSelection(){
    userChoice = 0;
    computerChoice = 0;
    win = -1;
}


// 1 rock
// 2 paper
// 3 scissors
function winOrLoss(){
    if(userChoice == 1){
        if(computerChoice == 3){ win = 1;}
        else if(computerChoice == 2){win = 0;}
        else{win = 2;}
    }
    else if(userChoice == 2){
        if(computerChoice == 3){ win = 0;}
        else if(computerChoice == 1){win = 1;}
        else{win = 2;}
    }
    else if(userChoice == 3){
        if(computerChoice == 1){ win = 0;}
        else if(computerChoice == 2){win = 1;}
        else{win = 2;}
    }
}

function updateScore(){
    if(nameOfUser == ""){nameOfUser = "pal";}

    if(win == 1){   
        userScoreTotal++;
        document.getElementById("result").innerHTML = "Congratulations " + nameOfUser + ", you win.";
        console.log("LLL"+ nameOfUser + "LLLL");
        console.log("WIN");
    }
    else if(win == 0){
        computerScoreTotal++;
        document.getElementById("result").innerHTML = "Sorry " + nameOfUser + ", you loose";
        console.log("LOOSE");

    }
    else if(win == 2){
        computerScoreTotal++;
        userScoreTotal++;

        document.getElementById("result").innerHTML = "It's a Tie";
        console.log("TIE");
    }

    console.log("COMPUTER SCORE" + computerScoreTotal);
    console.log("USER SCORE" + userScoreTotal);

    document.getElementById("oscore").innerHTML = computerScoreTotal;
    document.getElementById("pscore").innerHTML = userScoreTotal;


}


function resetGame(){
        userScoreTotal = 0;
        computerScoreTotal = 0;

        document.getElementById("userSelection").src="./svg/mystery.svg";
        document.getElementById("computerSelection").src="./svg/mystery.svg";
        document.getElementById("o-img").src="./svg/mystery.svg";


        document.getElementById("oscore").innerHTML = computerScoreTotal;
        document.getElementById("pscore").innerHTML = userScoreTotal;
   
}
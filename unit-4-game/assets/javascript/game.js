// Declare variables
var randomNumberValue,
    redValue = null,
    blueValue = null,
    yellowValue = null,
    greenValue = null,
    myWins = 0,
    myLosses = 0;


var totalScore = document.getElementById("totalScore");
var randomNumber = document.getElementById("random-number");
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
// var totalScore = $("#totalscore");
// var randomNumber = $("#random-number");
// var wins = $("#wins");
// var losses = $("#losses");

//random interger function
function getRndInteger(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//reset function
function reset() {
    totalScore.innerText = 0;
    randomNumber.innerHTML = getRndInteger(19, 121);
    randomNumberValue = parseInt(randomNumber.innerHTML);

    redValue = getRndInteger(1, 13);
    
    blueValue = getRndInteger(1, 13);

    yellowValue = getRndInteger(1, 13);
    
    greenValue = getRndInteger(1, 13);
    
    if (redValue == yellowValue || redValue == blueValue || redValue == greenValue || blueValue == yellowValue || blueValue == greenValue || greenValue == yellowValue) {
        reset();
    }
}


function IncScore(gemColor) {
    var totalValue = parseInt(totalScore.innerText)

    console.log(totalValue);
    console.log(randomNumberValue);
    
    

    if (gemColor == 'red') {
        totalValue += redValue;
    }
    else if (gemColor == 'blue') {
        totalValue += blueValue;
    }
    else if (gemColor == 'yellow') {
        totalValue += yellowValue;
    }
    else if (gemColor == 'green') {
        totalValue += greenValue;
    }
    
    if (totalValue == randomNumberValue) {
        myWins++;
        console.log(myWins);
        
        wins.innerText = myWins
        reset();
    }
    else if (totalValue > randomNumberValue) {
        myLosses++;
        console.log(myLosses);

        losses.innerText = myLosses
        reset();
    
    }
    else {
        totalScore.innerText = totalValue
    }

    
}
reset();

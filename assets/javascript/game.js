
// var totalScore = document.getElementById("totalScore");
// var randomNumber = document.getElementById("random-number");
// var wins = document.getElementById('wins');
// var losses = document.getElementById('losses');
var totalScore = $("#totalScore");
var randomNumber = $("#random-number");
var wins = $("#wins");
var losses = $("#losses");
console.log(totalScore)
// Declare variables
var randomNumberValue,
    redValue = 0,
    blueValue = 0,
    yellowValue = 0,
    greenValue = 0,
    myWins = 0,
    myLosses = 0;
    totalValue = Number(totalScore.text());
    console.log("total = " + totalValue)


//random interger function
function getRndInteger(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//reset function
function reset() {
    // totalScore.innerText = 0;
     totalValue = 0
    // randomNumber.innerHTML = getRndInteger(19, 121);
    randomNumber.html(getRndInteger(19, 121))
    // randomNumberValue = parseInt(randomNumber.innerHTML);
    randomNumberValue = parseInt(randomNumber.text());
    console.log("Rnd# = " + randomNumberValue)


    redValue = getRndInteger(1, 13);
    
    blueValue = getRndInteger(1, 13);
  
    yellowValue = getRndInteger(1, 13);
    
    greenValue = getRndInteger(1, 13);
   
    if (redValue == yellowValue || redValue == blueValue || redValue == greenValue || blueValue == yellowValue || blueValue == greenValue || greenValue == yellowValue) {
        reset();
        
    }
    console.log("red = " + redValue)
        console.log("blue = " + blueValue)
        console.log("yellow = " + yellowValue)
        console.log("green = " + greenValue)
}


function IncScore(gemColor) {
    // var totalValue = parseInt(totalScore.innerText)
     

    // console.log(totalValue);
    // console.log(randomNumberValue);
    
    

    if (gemColor == 'red') {
        totalValue += redValue;
        console.log("total = " + totalValue);
    }
    else if (gemColor == 'blue') {
        totalValue += blueValue;
        console.log("total = " + totalValue);
    }
    else if (gemColor == 'yellow') {
        totalValue += yellowValue;
        console.log("total = " + totalValue);
    }
    else if (gemColor == 'green') {
        totalValue += greenValue;
        console.log("total = " + totalValue);
    }
    
    if (totalValue == randomNumberValue) {
        myWins++;
        console.log(myWins);
        wins.html(myWins);
        // wins.textContent(myWins)
        reset();

    }
    else if (totalValue > randomNumberValue) {
        myLosses++;
        console.log(myLosses);
        // losses.innerText = myLosses
        losses.html(myLosses);
        reset();
    
    }
    else {
        // totalScore.text(totalValue)
        totalScore = totalValue
    
    }

    
}
reset();


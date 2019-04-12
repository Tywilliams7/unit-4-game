// Declare variables
var randomNumberValue,
    redValue = null,
    blueValue = null,
    yellowValue = null,
    greenValue = null,
    myWins = 0,
    myLosses = 0;


var totalScore = $("#totalscore");
var randomNumber = $("#random-number");
var wins = $("#wins");
var losses = $("#losses");

//random interger function
function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#totalscore").text("0");
$("#random-number").html(getRndInteger(19, 121));



function reset() {
    totalScore.innerText = 0;
    randomNumber.innerHTML = getRndInteger(19, 121);
    randomNumberValue = parseInt(randomNumber.innerHTML);

    redValue = getRndInteger(1, 12);

    blueValue = getRndInteger(1, 12);

    yellowValue = getRndInteger(1, 12);

    greenValue = getRndInteger(1, 12);

    if (redValue == yellowValue || redValue == blueValue || redValue == greenValue || blueValue == yellowValue || blueValue == greenValue || greenValue == yellowValue) {
        reset();
    }
}


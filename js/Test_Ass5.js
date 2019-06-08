//1. shuffle allCards 
var allCards = [];
allCards[0] = "images/ca1.jpg";
allCards[1] = "images/ca2.jpg";
allCards[2] = "images/ca3.jpg";
allCards[3] = "images/ca4.jpg";
allCards[4] = "images/ca5.jpg";
allCards[5] = "images/ca6.jpg";
allCards[6] = "images/ca1.jpg";
allCards[7] = "images/ca2.jpg";
allCards[8] = "images/ca3.jpg";
allCards[9] = "images/ca4.jpg";
allCards[10] = "images/ca5.jpg";
allCards[11] = "images/ca6.jpg";

function shuffle(x) {
    var currentIndex = allCards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = allCards[currentIndex];
        allCards[currentIndex] = allCards[randomIndex];
        allCards[randomIndex] = temporaryValue;
    }

    return allCards;
}

imgArray = shuffle(allCards);
console.log(allCards);
//console.log(endArray);

//2.
var numChosenCards = 0;
var firstCard;
var secondCard;
var numberOfClicks = 0;
var back = "images/backcard.jpg";
var s;

function startTimer() {
    s = setInterval(control, 1000);
    document.getElementsByClassName("memory-card").disabled = true;
}

function stopTimer() {
    clearInterval(s);
}

function clicks(index) {
    //the line below, I might use for geek...if I get to..
    //document.images[index].style.transform="rotateY(180deg)";
    if (numChosenCards == 0) {
        firstCard = index;
        document.images[index].src = allCards[index];
        numChosenCards = 1;
        console.log("first card chosen");
    }
    else {
        numChosenCards = 2;
        secondCard = index;
        document.images[index].src = allCards[index];
        startTimer();
    }

}

function control() {
    stopTimer();
    if (imgArray[firstCard] == imgArray[secondCard]) {

        numberOfClicks++;
        numChosenCards = 0;
    }
    else if (imgArray[firstCard] !== imgArray[secondCard]) {
        document.images[firstCard].src = back;
        document.images[secondCard].src = back;
        numChosenCards = 0;
    }
    if (numberOfClicks == imgArray.length / 2) {
        document.getElementById("win").innerHTML = "You won! Congrats!! Press the NEW GAME - button for a new game!";
        console.log(numberOfClicks);
        console.log("won");
        startNewGame();
    }

   
}
reload.addEventListener('click', () => {
    window.location.reload();
    console.log("is shuffeling")
});
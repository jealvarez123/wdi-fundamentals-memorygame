
/*
 var cards = ["queen", "queen", "king", "king"];

 var cardsInPlay = [];

 var cardOne = cards[0];

console.log("User flipped" + " " + cardOne);

var cardTwo = cards[2];

console.log("User flipped" + " " + cardTwo);

if (cardsInPlay.length === 2) {

} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else { 
	alert("Sorry, try again!");
}
*/

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

var checkForMatch = function() {
	
	if (cardsInPlay[0]  === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
};

if (cardsInPlay.length === 2) {
	checkForMatch();
}

var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);
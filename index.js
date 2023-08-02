let homeScoreCounter = document.getElementById("home-score-counter");
let homeScore = 0;
let guestScoreCounter = document.getElementById("guest-score-counter");
let guestScore = 0;

// let addOnePoint = document.getElementById("add-one-point");
// let addTwoPoint = document.getElementById("add-two-point");
// let addThreePoint = document.getElementById("add-three-point");

// Home score functions
function addOneHome() {
	homeScore += 1;
	homeScoreCounter.textContent = homeScore;
}

function addTwoHome() {
	homeScore += 2;
	homeScoreCounter.textContent = homeScore;
}

function addThreeHome() {
	homeScore += 3;
	homeScoreCounter.textContent = homeScore;
}

// Guest Score functions
function addOneGuest() {
	guestScore += 1;
	guestScoreCounter.textContent = guestScore;
}

function addTwoGuest() {
	guestScore += 2;
	guestScoreCounter.textContent = guestScore;
}

function addThreeGuest() {
	guestScore += 3;
	guestScoreCounter.textContent = guestScore;
}

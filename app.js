const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score"); //dom variable element
const computerScore_span = document.getElementById("computer-score"); //differentiate between normal variables and dom variables
const scoreBoard_div = document.querySelector("score-board");
const result_div = document.querySelector("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s"); //by making reference to each html elemtn we are caching the dom

function getComputerChoice() {
	const choices = ["r","p","s"];
	const randomNumber = Math.floor(Math.random() *3);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			user wins 
			break;
		case "rp":
		case "sr":
		case "ps":
			user loses
			break;
		case "rr":
		case "ss":
		case "pp":
			Draw
			break;

	}
}

function main() {
rock_div.addEventListener("click",function() {
	
})


paper_div.addEventListener("click",function() {

})


scissor_div.addEventListener("click",function() {

})

}

main();
// function clickListener() {

// 		var controller = new Controller();

// 						controller.initialise();
// 						controller.startGame();

// 		var button = document.getElementById('button');
// 	button.addEventListener("click",showBoard());


// 	}
$(document).ready(function(){
console.log("ready!");
var controller = new Controller();
var view = new View();
console.log(controller);

$('button').click(function(){
	controller.startGame();
	view.showBoard();
});

$('td').click(function(e){
	console.log(e.target)
	controller.placeCounter(e.target);

	// controller.checkIfDone();
});


});

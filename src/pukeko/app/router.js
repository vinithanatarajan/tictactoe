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
	$('.game_board').delay(90000).fadeOut('slow');
});

var sum = 0;
$('td').click(function(e){
	console.log(e.target)
	sum++;
	controller.placeCounter(e.target,sum);

	// controller.checkIfDone();
});


});

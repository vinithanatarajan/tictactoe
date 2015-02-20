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



var sum = 0;

	$('td').click(function(e){
		console.log(e.target)
		sum++;
		controller.placeCounter(e.target,sum);
		finished();
	});

var finished= function(){
	if (sum >9){
		$('div').prepend('<img id="finish" src="http://widehdwalls.com/images/big/birman_catr-777312.jpg"/>');
		$('div').prepend('<p>Thanks you for Purr-laying</p>');
		$('div.game_board').css("display","none");
	};
};
});
	// controller.checkIfDone();

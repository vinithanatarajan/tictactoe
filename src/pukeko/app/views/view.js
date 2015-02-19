function View() {

	

	this.clearScreen = function() {
		$('.tic_table td').css("background-color", "green");
	};

	this.startGame = function() {
		$('button').css("display":"none");
		$('tic_table').css("display":"block");
	};


	
}
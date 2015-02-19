function View() {

	

	this.clearScreen = function() {
		$('.tic_table td').css("background-color", "green");
	};

	this.showBoard = function() {
		$('button').css("display", "none");
		$('.game_board').css("display", "block");
	};

	
}
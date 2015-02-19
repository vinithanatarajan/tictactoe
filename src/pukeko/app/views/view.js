function View() {}

View.prototype.clearScreen = function() {
		$('.tic_table td').css("background-color", "green");
	};

View.prototype.showBoard = function() {
		$('button').css("display", "none");
		$('.game_board').css("display", "block");
	};

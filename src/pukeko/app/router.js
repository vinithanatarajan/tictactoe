function clickListener() {
	document.button.onclick = function(e) {
		var controller = new Controller();
		if(e.click) {
						controller.initialise();
						controller.startGame();
					}
		
	}	
}

function clickListener() {
	document.body.onclick = function(e) {
		var controller = new Controller();
		if(e.click) {
						controller.initialise();
						controller.startGame();
					}
		
	}	
}

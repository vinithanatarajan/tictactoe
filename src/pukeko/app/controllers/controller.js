function Controller() {

    this.view = new View();
    // this.view.clearScreen();
    };
Controller.prototype.startGame = function() {
        this.view.showBoard();
        this.player1 = new Player("player_1");
        this.player2 = new Player("player_2");
    };
Controller.prototype.placeCounter = function(target) {
		 this.view.counterPlaced(this.player1.id, target);

};
Controller.prototype.checkIfDone = function(){
	//  this.model.isDone();
};

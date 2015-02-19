function Controller() {

    this.view = new View();
        this.view.clearScreen();
    };
Controller.prototype.startGame = function() {
        this.view.showBoard();
        this.player1 = new Player("player1");
        this.player2 = new Player("player2");
    };
Controller.prototype.placeCounter = function() {
		this.view.counterPlaced();
};
Controller.prototype.checkifdone = function(){
	this.model.isDone();
}


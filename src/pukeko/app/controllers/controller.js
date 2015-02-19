function Controller() {

    this.view = new View();
        this.view.clearScreen();
    };
Controller.prototype.startGame = function() {
        this.view.showBoard();
    };
Controller.prototype.placeCounter = function() {
		this.view.counterPlaced();
};
Controller.prototype.checkifdone = function(){
	this.model.isDone();
}


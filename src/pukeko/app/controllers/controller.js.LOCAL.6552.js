function Controller() {

    this.view = new View();
        this.view.clearScreen();

    };
Controller.prototype.startGame = function() {
        this.view.showBoard();
    };

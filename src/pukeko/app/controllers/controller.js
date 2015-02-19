function Controller() {

    var view = new View();

    var initialise = function() {

        view.ClearScreen();

    };

    var startGame = function() {
        initialise();
        view.showBoard();

    };


}
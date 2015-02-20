function Controller() {

    this.view = new View();
    // this.view.clearScreen();
    };

Controller.prototype.startGame = function() {
        this.view.showBoard();
        this.player1 = new Player("player_1");
        this.player2 = new Player("player_2");
    };
Controller.prototype.placeCounter = function(target,sum) {
  if(sum%2==1){
    this.view.counterPlaced(this.player1.id, target)
    }
    else{
      this.view.counterPlaced(this.player2.id, target)
    }
  };

Controller.prototype.checkIfDone = function(){
	//  this.model.isDone();
};
// Controller.prototype.player_1_turn = function(target){;
// this.view.counterPlaced(this.player1.id, target)};
//
// Controller.prototype.player_2_turn = function(){
//   this.view.counterPlaced(this.player2.id, target)};
// };

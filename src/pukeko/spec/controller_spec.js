describe('tictactoe controller', function(){
  beforeAll(function(){
    spyOn(View.prototype,'clearScreen')
    spyOn(View.prototype,'showBoard')
    this.controller = new Controller();
  });
  describe('Gamestart', function(){
    beforeAll(function(){
      this.controller.startGame();
    });
    it('will create player1', function(){
      expect(this.controller.player1).toBeDefined();
    });
      it('will inherit the name passed to it', function(){
      expect(this.controller.player1.id).toEqual('player1');
    });
    it('will create player2', function(){
      expect(this.controller.player2).toBeDefined();
    });
    it('will inherit the name passed to it', function(){
    expect(this.controller.player1.id).toEqual('player1');
  });
  });

});

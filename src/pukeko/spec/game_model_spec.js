describe('tictactoe', function(){
  beforeAll(function(){
    this.game = new Game();
  });
  describe('Game', function(){
    it('exists', function(){
      expect(this.game).toBeDefined();
    });
  });

  describe('#startGame', function(){
      it('can be started', function(){
        expect(this.game.start_game).toBeDefined();
      });
      it('creates player 1 with name passed in', function(){
        expect(player1).toEqual("true");
      });

  });

  describe('#placePlayer', function(){
      it('exists', function(){
        expect(this.game.placePlayer).toBeDefined();
      });
      xit('places a player piece on the board', function(){
          expect()
      });

  });
});

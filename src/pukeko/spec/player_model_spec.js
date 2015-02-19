describe('Player()', function(){
    beforeAll(function(){
      this.player = new Player();
    });
    it('exists', function(){
      expect(this.player).toBeDefined();
    });
});

// describe('#playerPlace'){
//     it('is defined', function(){
//       expect(this.player.place).toBeDefined();
//     });
// });

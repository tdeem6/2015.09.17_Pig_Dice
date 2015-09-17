describe('Dice', function() {
  describe('new', function() {
    it("creates a new instance of the Dice class", function() {
      var testDice = new Dice();
      expect(testDice.value).to.equal(1);
    });
  });

 

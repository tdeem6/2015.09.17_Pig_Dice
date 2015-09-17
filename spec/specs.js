describe('Dice', function() {
  describe('new', function() {
    it("creates a new instance of the Dice class", function() {
      var testDice = new Dice();
      expect(testDice.value).to.equal(1);
    });
  });
describe('roll', function() {
    it("sets the dice value to a random number between 1 and 6", function() {
        var testDice = new Dice();
        testDice.roll();
        expect(testDice.value).to.be.within(1, 6);
        });
    });
});

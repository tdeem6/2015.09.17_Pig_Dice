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

describe('Player', function() {
    describe('new', function() {
        it("initializes a new player", function() {
            var testPlayer = new Player("Mike");
            expect(testPlayer.name).to.equal("Mike");
            expect(testPlayer.currentRoll).to.equal(null);
            expect(testPlayer.score).to.equal(0);
            expect(testPlayer.turnTotal).to.equal(0);
        });
    });
describe('addToTotal', function() {
    it("adds the running score to the total score", function() {
        var testPlayer = new Player();
        testPlayer.turnTotal += 6;
        testPlayer.addToTotal();
        expect(testPlayer.score).to.equal(6);
        });
    });
});

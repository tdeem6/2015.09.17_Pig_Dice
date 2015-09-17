function Dice() {
  this.value = 1;
};

Dice.prototype.roll = function() {
    this.value = Math.floor((Math.random() * 6) +1);
};

function Player(name) {
    this.name = name;
    this.currentRoll = null;
    this.score = 0;
    this.turnTotal = 0;
};

Player.prototype.addToTotal = function() {
    this.score += this.turnTotal;
}

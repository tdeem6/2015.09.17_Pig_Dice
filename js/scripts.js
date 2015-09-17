function Dice() {
  this.value = 1;
};

Dice.prototype.roll = function() {
    this.value = Math.floor((Math.random() * 6) +1);
}

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
};

$(document).ready(function() {

  var scoreToWin = 100;

  var die = new Dice();
  var player1 = new Player("player 1");
  var player2 = new Player("player 2");
  var isP1Turn = true;

  updateGame();

  $("button#roll").click(function() {
    die.roll();
    if(die.value == 1) {
      getActivePlayer().turnTotal = 0;
      switchTurn();
    } else {
      getActivePlayer().turnTotal += die.value;
    }
    updateGame();
  });

  $("button#hold").click(function() {
    getActivePlayer().addToTotal();
    getActivePlayer().turnTotal = 0;
    if (getActivePlayer().score >= scoreToWin) {
      $("#p1-buttons").hide();
      $("#p1-buttons").hide();
      $("#p1-buttons-disabled").show();
      $("#p1-buttons-disabled").show();
      $("#roll-result").hide();
      $("#roll-result").html('<a href="#" onclick="window.location.reload(true);"><img src="' + '.css/img/again.png' + '"></a>');
      $("#roll-result").fadeIn(1000);
      $("#p1-score").text(player1.score);
      $("#p1-turn-total").text(player1.turnTotal);
      $("#p2-score").text(player2.score);
      $("#p2-turn-total").text(player2.turnTotal);
      if(isP1Turn) {
        $("#p1-panel-header").text("You Win!");
        $("#p2-panel-header").text("You Lose...");
        alert('Player 1 Wins!');
      } else {
        $("#p2-panel-header").text("You Win!");
        $("#p1-panel-header").text("You Lose...");
        alert("Player 2 Wins!");
      }
    } else {
      switchTurn();
      updateGame();
    }
  });

  function switchTurn() {
    isP1Turn = !isP1Turn;
    $("#p1-panel").toggleClass("panel-warning panel-default");
    $("#p2-panel").toggleClass("panel-warning panel-default");
    $("#p1-buttons").toggle();
    $("#p1-buttons-disabled").toggle();
    $("#p2-buttons").toggle();
    $("#p2-buttons-disabled").toggle();
  }

  function updateGame() {
    $("#roll-result").hide();
    $("#roll-result").html('<img src= "css/img/pig.png">' + '<span id="value-show">' + die.value + '</span>');
    //  + die.value + '.png' + '">');
    $("#roll-result").fadeIn(1000);
    $("#p1-score").text(player1.score);
    $("#p1-turn-total").text(player1.turnTotal);
    $("#p2-score").text(player2.score);
    $("#p2-turn-total").text(player2.turnTotal);
  }

  function getActivePlayer() {
    if(isP1Turn) {
      return player1;
    } else {
      return player2;
    }
  }

});

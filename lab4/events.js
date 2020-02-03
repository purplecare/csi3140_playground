window.onload = function()
{
  var roller = document.getElementById("roller");
  var score =document.getElementById("score");
  var turn=3;
  roller.addEventListener(
    "click",
    function () {
      if(turn>0){
        if(document.getElementById("dice1").checked==false){
          Dice.showDie("die01", Dice.roll());
        }
        if(document.getElementById("dice2").checked==false){
          Dice.showDie("die02", Dice.roll());
        }
        if(document.getElementById("dice3").checked==false){
          Dice.showDie("die03", Dice.roll());
        }
        if(document.getElementById("dice4").checked==false){
          Dice.showDie("die04", Dice.roll());
        }
        if(document.getElementById("dice5").checked==false){
          Dice.showDie("die05", Dice.roll());
        }
        turn--;
        document.getElementById("turn").innerHTML=turn;
      }
    },
    false);
  score.addEventListener(
    "click",
    function(){
      turn=3;
      Dice.showDie("die01", 0);
      Dice.showDie("die02", 0);
      Dice.showDie("die03", 0);
      Dice.showDie("die04", 0);
      Dice.showDie("die05", 0);
    },
    false
  );

  Dice.showDie("die01", 0);
  Dice.showDie("die02", 0);
  Dice.showDie("die03", 0);
  Dice.showDie("die04", 0);
  Dice.showDie("die05", 0);

}

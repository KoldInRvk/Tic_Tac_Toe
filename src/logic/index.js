const o_Player = '0';
const x_Player = 'X';
 
 
function winner(){
var cell1 = document.getElementById("1");
var cell2 = document.getElementById("2");
var cell3 = document.getElementById("3");
var cell4 = document.getElementById("4");
var cell5 = document.getElementById("5");
var cell6 = document.getElementById("6");
var cell7 = document.getElementById("7");
var cell8 = document.getElementById("8");
var cell9 = document.getElementById("9");
 
if(cell1.innerHTML !== "" && cell1.innerHTML === cell2.innerHTML && cell1.innerHTML === cell3.innerHTML){
return true;
}
else if(cell1.innerHTML !== "" && cell1.innerHTML === cell5.innerHTML && cell1.innerHTML === cell9.innerHTML){
return true;
}
else if(cell1.innerHTML !== "" && cell1.innerHTML === cell4.innerHTML && cell1.innerHTML === cell7.innerHTML){
return true;
}
else if(cell2.innerHTML !== "" && cell2.innerHTML === cell5.innerHTML && cell2.innerHTML === cell8.innerHTML){
return true;
}
else if(cell3.innerHTML !== "" && cell3.innerHTML === cell6.innerHTML && cell3.innerHTML === cell9.innerHTML){
return true;
}
else if(cell4.innerHTML !== "" && cell4.innerHTML === cell5.innerHTML && cell4.innerHTML === cell6.innerHTML){
return true;
}
else if(cell7.innerHTML !== "" && cell7.innerHTML === cell8.innerHTML && cell7.innerHTML === cell9.innerHTML){
return true;
}
else if(cell7.innerHTML !== "" && cell7.innerHTML === cell5.innerHTML && cell7.innerHTML === cell3.innerHTML){
return true;
}
}
 
const cells = document.querySelectorAll('.cell');
 
var cell = document.querySelectorAll("table"),
x_or_o = 0,
x_points = document.getElementById("X-points"),
o_points = document.getElementById("O-points"),
turn = document.querySelector('p'),
button = document.querySelector('button'),
score_x = document.getElementById('counter-x'),
score_o = document.getElementById('counter-o'),
points_x = document.getElementById('X-points'),
points_o = document.getElementById('O-points'),
changePointX = document.getElementById("changePointX"),
changePointO = document.getElementById("changePointO");
 
 
button.addEventListener('click', function(){
  startgame();
});
 
startgame();
function startgame(){
  for(var i = 0; i < cells.length; i++){
    cells[i].innerHTML = "";
    turn.innerHTML = "X, it's your turn!";
    x_or_o = 0;
  }
  for(var i = 0; i < cells.length; i++){
    cells[i].onclick = function(){
      if(this.innerHTML !== "X" && this.innerHTML !== "O"){
          if(x_or_o%2 === 0){
            turn.innerHTML = "O, it's your turn!";
            console.log(x_or_o);
            this.innerHTML = "X";
           
              if(winner()){
                turn.innerHTML = "X WON!";
                quit();
                incrementScores();
                }
                draw();
            x_or_o += 1;
         
          }
          else{
            turn.innerHTML = "X, it's your turn!";
            console.log(x_or_o);
            this.innerHTML = "O";
              if(winner()){
               turn.innerHTML = "O WON!";
                quit();
                if(score_o.innerHTML === '0'){
                  changePointO.innerHTML = "point!";
                  score_o.innerHTML = Number(score_o.innerHTML) + 1;
                }else{
                  changePointO.innerHTML = "points!";
                  score_o.innerHTML = Number(score_o.innerHTML) + 1;
                }
             
              }
            x_or_o += 1;
          }  
       }
      }
    }
}
 
 
function quit(){
  for(var i = 0; i < cells.length; i++){
    cells[i].onclick = "";
  }
  }
 
 
function draw(){
  var count = 0;
   for(var i = 0; i < cells.length; i++){
    if(cells[i].innerHTML !== ""){
      count += 1;
    }
    if(!winner()){
      if(count === 8){
      turn.innerHTML = "DRAW!";
    }}
}
}
function incrementScores() {
 if(score_x.innerHTML === '0'){
                  changePointX.innerHTML = "point!";
                  score_x.innerHTML = Number(score_x.innerHTML) + 1;
                }else{
                  changePointX.innerHTML = "points!";
                  score_x.innerHTML = Number(score_x.innerHTML) + 1;
                }
               
              }
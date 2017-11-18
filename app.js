var centerX;
var centerY;

var userSelect=0;
var compSelect=0;
var rockImage;
var scissorsImage;
var paperImage;
var gameState=0;


function setup(){

   createCanvas(700,700);
   centerX = width /2;
   centerY = height /2;


}

 function draw() {
   background(29,202,255);
   if (keyCode==13 || gameState==0) {
   showStartScreen();
 }
else if (gameState=1) {
   showSelection();
   checkResult();
 }

 }
 function preload(){
   rockImage=loadImage("images/rock.png");
   scissorsImage=loadImage("images/scissors.png");
   paperImage=loadImage("images/paper.png");
 }

 function keyPressed(){
   if (keyCode==49){
     userSelect=1;
     compSelect=floor(random(1,4));
     gameState=1;
   }
   else if (keyCode==50) {
     userSelect=2;
     compSelect=floor(random(1,4));
     gameState=1;
   }
   else if (keyCode==51){
     console.log("pressing 3");
     userSelect=3;
     console.log(userSelect);
     compSelect=floor(random(1,4));
     gameState=1;

   }

 }

   function showSelection(){
     if (userSelect==1){
       image(rockImage, centerX - 300, centerY);
     }
     else if (userSelect==2 ) {
         image(scissorsImage, centerX - 300, centerY);
       }
        else if (userSelect==3 ) {
          console.log("paper");
           image(paperImage, centerX - 300, centerY);
}

           if (compSelect==1){
              image(rockImage,centerX + 50, centerY);
           }
           else if (compSelect==2 ) {
              image(scissorsImage,centerX + 50, centerY);
           }
           else if (compSelect==3) {
             image(paperImage,centerX + 50, centerY);
           }
}
  function checkResult(){
  if(userSelect == compSelect && userSelect!=0 && compSelect !=0){
    textAlign(CENTER);
    fill(0);
    textSize(20);
    text("Issa Tie",355,55);
  }
  else if (userSelect==1 && compSelect==2 || userSelect == 2 && compSelect == 3 || userSelect == 3 && compSelect == 1) {
     textSize(20);
     textAlign(CENTER);
     text("USER WINS. COMPUTER TAKES THE L",355,355);

   }else {
    textAlign(CENTER);
    textSize(20);
    text("COMPUTER WINS. USER TAKES THE L",355,355);
  }
  }
    function showStartScreen(){
    background(29,202,255);
    fill(0);
    textSize(50);
    text("Rock Paper Scissors",155,155);
    image(rockImage,centerX-300,centerY);
    image(paperImage,centerX-100,centerY);
    image(scissorsImage,centerX+100,centerY);
  }

//creating plddle and the ball
var paddle = prompt(200, 375, 50, 15);
var ball = prompt(150, 250, 20, 20);

var score=0;
var gameState ="serve";

//first row of boxes
var box1 = prompt(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = prompt(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = prompt(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = prompt(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = prompt(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = prompt(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = prompt(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = prompt(375, 75, 50, 50);
box8.shapeColor="blue";

//second row of boxes
var box9 = prompt(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = prompt(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = prompt(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = prompt(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = prompt(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = prompt(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = prompt(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = prompt(375, 125, 50, 50);
box16.shapeColor="red";


function draw() {
  background("white");
  
  //display score
  textSize(15);
  stroke("red");
  text("Score :"+score,330,20);
  
  if(gameState == "serve")
  {
    textSize(25);
    text("Welcome! Press Enter to start.",30,200);
  
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  gameState="play";
  }
  }
  if(gameState == "play")
  {
    createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
  
 paddle.x=World.mouseX;
 if (ball.isTouching(bottomEdge)||(score==16)){
   gameState="end";
 }
}
if(gameState == "end")
  {
    ball.velocityX=0;
    ball.velocityY=0;
    textSize(25);
    text("You Won!",150,200);
  }

  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  } 
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  drawSprites();
}

var fixedRect, movingRect;
var o1,o2,o3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-3;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=3;
  
  // o1 = createSprite (100,100,50,50);
  // o1.shapeColor="green"
  // o2 = createSprite (200,100,50,50);
  // o2.shapeColor="green"
  // o3 = createSprite (300,100,50,50);
  // o3.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(isTouching(movingRect,o1)){
  //   movingRect.shapeColor = "blue";
  //   o1.shapeColor = "blue";
  // }
  // else {
  //   movingRect.shapeColor = "green";
  //   o1.shapeColor = "green";
  // }

  bounceOff(movingRect,fixedRect);

  drawSprites();
}


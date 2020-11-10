var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";


  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";


  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  gameObject2.x = World.mouseX;
  gameObject2.y = World.mouseY;

  if(isTouching(gameObject2 ,gameObject3)){
    gameObject2.shapeColor = "red";
    gameObject3.shapeColor = "red";
  } 
  else{
    gameObject2.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  bounceOff(movingRect, fixedRect);
  drawSprites();
}



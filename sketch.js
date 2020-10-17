var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(100, 200, 50, 50);

  movingRect.velocityX=-10;
  fixedRect.velocityX=10;
}

function draw() {
  background(0);  
  drawSprites();

  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
     movingRect.velocityX = movingRect.velocityX * (-1); fixedRect.velocityX = fixedRect.velocityX * (-1); 
  } if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
  { movingRect.velocityY = movingRect.velocityY * (-1); 
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  
  }
}


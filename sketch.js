var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80)
  fixedRect.shapeColor="aqua"
  movingRect.shapeColor="aqua"
  rect1 = createSprite(200,100,50,80);
  rect2 = createSprite(200,800,80,30);
  rect1.shapeColor="yellow"
  rect2.shapeColor="green"
  rect1.velocityY=5
  rect2.velocityY=-5
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(rect2.x - rect1.x < rect2.width/2+rect1.width/2 &&
    rect1.x- rect2.x < rect1.width/2+rect2.width/2 ){
    rect1.velocityX=rect1.velocityX*(-1)
    rect2.velocityX=rect2.velocityX*(-1)
  }
  else if( rect2.y - rect1.y < rect2.height/2+rect1.height/2 &&
    rect1.y - rect2.y < rect2.height/2+rect1.height/2) {
      rect1.velocityY=rect1.velocityY*(-1)
      rect2.velocityY=rect2.velocityY*(-1)
  }

  // 25 mr 
  //25 fr
  //50
  console.log(movingRect.x - fixedRect.x)
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red"
  movingRect.shapeColor="red"

  }else{
    fixedRect.shapeColor="aqua"
  movingRect.shapeColor="aqua"
  }
  drawSprites();
}
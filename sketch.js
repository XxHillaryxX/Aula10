var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20)
  box.shapeColor="white"
}

function draw() 
{
  background("black");
  if (keyDown ("up")){
    box.velocityY=-2;
  }
  drawSprites();
}





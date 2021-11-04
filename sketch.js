

var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
  box.shapeColor="blue";
}




function draw() 
{
  background("green");

if(keyIsDown("right")) {
  box.position.x+=5;
}

if(keyIsDown("left")){
  box.position.x-=5;
}

if(keyIsDown("up")){
  box.position.y-=5;
}

if(keyIsDown("down")){
  box.position.y+=5;
}

  drawSprites();
}





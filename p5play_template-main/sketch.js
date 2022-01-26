var box;
function setup() {
  createCanvas(400,400);
   box = createSprite(200, 200, 10, 10)


}

function draw() 
{
  

  if(KeyIsDown(RIGHT_ARROW))
{

box.position.x = box.position.x +5;

}
if(KeyIsDown(LEFT_ARROW))
{

box.position.x = box.position.x -5;

}
if(KeyIsDown(UP_ARROW))
{

box.position.y = box.position.y +5;

}
if(KeyIsDown(DOWN_ARROW))
{

box.position.y = box.position.y -5;

}

  drawSprites()
}





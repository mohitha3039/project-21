var carwall, thickness
var  bullet,speed,  weight

function setup() {
  createCanvas(1600,400);
  speed = random(220,320)
  weight = random(30,50)
  thickness = random (20,80)
car = createSprite (50,200,50,50)
car.velocityX = speed
car.shapeColor=color (225)
wall=createSprite(1200,200,thickness)
wall.shapeColor= color (80,80,80)
carwall =  createSprite
}

function draw() {
  background(0);  
  if (wall.x-car.x<(car.width+wall.width)/2)
 
   car.velocityX=1
   var deformation=0.5 * weight * speed * speed/22509
   if (deformation>180)
 

 {
  car.shapeColor=color(255,0,0)
 }

 if (deformation<180  &&  deformation>100)
 {
car.shapeColor=color(230,230,0)
 }
if(deformation<100)
{
  car.shapeColor=color(0,255,0)
}

  drawSprites();
  
}
function hasCollided (lbullet,lwall)
{
  bulletRightEdge =lbullet.X + lbullet.width 
  wallLeftEdge = lwall.X 
  if (bulletRightEdge>=wallLeftEdge) 
{
  return true
}
return false 
}
if (hasCollided ( bullet,wall ))

  bullet.velocityX = 0
  var damage=0.5 , weight ,speed , speed,thickness,thickness,thickness
  
 
  {
     wall.shapeColor=color(255,0,0)
  }
  if (damage <10)
  {
    wall.shapeColor=color(0,255,0)
  }












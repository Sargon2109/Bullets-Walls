var wall, thickness;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(223, 321);
  speed=random(30,52)
  weight=random(400,1500)
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall=createSprite(1200, 200, thicknness, height/2);
  wall.shapecolor = color (80, 80, 80);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  drawSprites();
}

function hasCollided (bullet, wall) {
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}

if (hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weigt * speed * speed/(thickness * thickness * thickness);

  if (damage>10) {
    wall.shapecolor = color (255, 0, 0);
  }

  if (damage<10){
    wall.shapecolor = color (0, 255, 0)
  }
}


var bullet,wall;


var speed, weight; 
var thickness

function setup() {
  createCanvas(1600, 400);
thickness = random(22,83);

	speed=random(223,321)
	weight=random(30,52)


	bullet=createSprite(50, 200, 50,5);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(230);
}


function draw() {
  background(0);
if (collide(bullet,wall)){
	bullet.velocityX = 0;
var d = 0.5*weight*speed*speed/Math.pow(thickness,3);
if (d>10)
wall.shapeColor = "red";
if(d<10)
wall.shapeColor = "green";
}
 drawSprites();
}
function collide(lbullet, lwall){
	bulletREdge = lbullet.x+lbullet.width;
	wallleftEdge = lwall.x;
	if (bulletREdge>= wallleftEdge){
		return true;
	}
	return false;
}



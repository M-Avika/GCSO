var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255); 
  
  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var Deformation=0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(Deformation<180 && Deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(Deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
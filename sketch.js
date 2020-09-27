var speed,weight;
var wall
var thickness
var deformation;
var bullet1,bullet2,bullet3,bullet4;

function setup() {
  wall=createSprite(1200,200,thickness,400)
  
  createCanvas(1600,400);

 bullet1=createSprite(20,50,30,15)
 bullet2=createSprite(20,150,30,15)
 bullet3=createSprite(20,250,30,15)
 bullet4=createSprite(20,350,30,15)
  speed=random(223,321)
  weight=random(30,52)
 thickness=random(22,83)
  bullet1.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  bullet4.velocityX=speed;
 
}

function draw() {
  background(0);  
  drawSprites();
  hasCollided();
  wall.shapeColor=color(80,80,80)
wall.debug
  if(wall.x-bullet1.x < (bullet1.width+wall.width)/2){
  
  bullet1.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180){

  bullet1.shapeColor=color(255,0,0);
  }
if(deformation<180 && deformation>100){

  bullet1 .shapeColor=color(230,230,0)
}
if(deformation<100){

  bullet1.shapeColor=color(0,255,0)

}
  }

  if(wall.x-bullet2.x < (bullet2.width+wall.width)/2){
  
    bullet2.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
  
    bullet2.shapeColor=color(255,0,0);
    }
  if(deformation<180 && deformation>100){
  
    bullet2 .shapeColor=color(230,230,0)
  }
  if(deformation<100){
  
    bullet2.shapeColor=color(0,255,0)
  
  }
    }

    if(wall.x-bullet3.x < (bullet3.width+wall.width)/2){
  
      bullet3.velocityX=0;
      var deformation=0.5 * weight * speed * speed/22509;
      if(deformation>180){
    
      bullet3.shapeColor=color(255,0,0);
      }
    if(deformation<180 && deformation>100){
    
      bullet3 .shapeColor=color(230,230,0)
    }
    if(deformation<100){
    
      bullet3.shapeColor=color(0,255,0)
    
    }
      }

      if(wall.x-bullet4.x < (bullet4.width+wall.width)/2){
  
        bullet4.velocityX=0;
        var deformation=0.5 * weight * speed * speed/22509;
        if(deformation>180){
      
        bullet4.shapeColor=color(255,0,0);
        }
      if(deformation<180 && deformation>100){
      
        bullet4 .shapeColor=color(230,230,0)
      }
      if(deformation<100){
      
        bullet4.shapeColor=color(0,255,0)
      
      }
        }

        if(hasCollided(bullet1,wall))
        {
          bullet1.velocityX=0;
          var damage=0.5 * weight *  speed * speed/(thickness*thickness*thickness)

          if(damage>10)
          {
            wall.shapeColor=color(255,0,0);
          }
          if (damage<10)
          {
            wall.shapeColor=color(0,255,0);
          }
        }
}

function hasCollided(lbullet1,lwall)
{
  bullet1RightEdge=lbullet1.x+lbullet1.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}
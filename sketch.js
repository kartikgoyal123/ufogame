
var ufo,ufoImage,obstaceImage,obstacleGroup;


function preload(){

   ufoImage = loadImage("ufo.png");  
   obstaceImage = loadImage("stone.png");
}


function setup(){
 createCanvas(1300,600);
 ufo = createSprite(650,300);
 ufo.addImage(ufoImage);
 ufo.scale = 0.5;
 
 obstaclesGroup = createGroup();
}

function draw(){
   background(10);
   if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(10,0);
}


  camera.position.x = 1300/2;
  camera.position.y = ufo.y-1;

  spawnObstacles();
  
  if(obstaclesGroup.isTouching(ufo)){
    camera.velocityX=0;
    obstaclesGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityYEach(0); 
}
  
  drawSprites();

}

function changePosition(x,y){
    ufo.x = ufo.x + x;
    ufo.y = ufo.y + y;
}

function spawnObstacles(){
    if (frameCount % 50 === 0){
      var obstacle = createSprite(400,0,10,40);
      obstacle.x = Math.round(random(0,1300));
      obstacle.velocityY = 6; 
      obstacle.addImage(obstaceImage);
      obstacle.scale = 0.3;
      obstacle.lifetime = 210;
      obstaclesGroup.add(obstacle);
    }
   }
   
var ship,shipImg1;
var sea,seaImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addAnimation("sea.png");
  sea.scale = 0.5;

  ship = createSprite(200,200);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ship.scale = 0.3
}

function draw() {
  background("blue");
  ship.velocityX =-2;
  ship.velocityX =2;

    drawSprites();
    sea.velocityX = 2;
    sea.addImage(seaImg);
    if(sea.x >  400){
      sea.x = 200;

      drawSprites();
    }
 
}

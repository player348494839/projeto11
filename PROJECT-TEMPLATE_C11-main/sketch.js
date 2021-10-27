var ship,shipImg1;
var sea,seaImg;
ship.velocityX =-2;
ship.velocityX =2;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png");
  
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();
    sea.addImage(seaImg);
    if(sea.x < 0){
      sea.x = sea.width/2;
    }
 
}

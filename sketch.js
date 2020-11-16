
var Zenia,torpus,wall1,wall2;

function setup() {

  createCanvas(400,400);

  Zenia=createSprite(50, 350, 20, 20);
  Zenia.shapeColor="pink";

  torpus=createSprite(50,200 , 20, 20);
  torpus.shapeColor="orange";

  

  wall1=createSprite(380,350,20,70);
  wall1.shapeColor="grey";

  wall2=createSprite(240,200,20,70);
  wall2.shapeColor="grey";

  // wall3=createSprite(380,100,20,70);
  // wall3.shapeColor="grey";
}

function draw() {

  background("black");

  //console.log(moving_rect.x);

  Zenia.velocityX=4
  torpus.velocityX=4

  if (Zenia.x-wall1.y > wall1.width/2 + Zenia.width/2){
    wall1.shapeColor="red";
    Zenia.velocityX=0;
  }

  if (torpus.x-wall2.y > wall2.width/2 + torpus.width/2){
    wall2.shapeColor="green";
    torpus.velocityX=0;
  }

  

  drawSprites();

}
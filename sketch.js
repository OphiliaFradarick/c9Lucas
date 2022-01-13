var box;

function setup(){
 createCanvas(600, 400);

 box = createSprite(300, 200, 40, 100)
 box.shapeColor = "lightgreen";
 box.scale = 0.5;

}

function draw(){

  background("black");

  drawSprites();

}
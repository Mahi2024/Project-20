var bg, tom, tom1, tom2;
var jerry, jerry1, jerry2;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tom1 = loadImage("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png", "images/cat3.png");
    jerry1 = loadImage("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addImage(tom1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addImage(jerry1);
    jerry.scale = 0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",tom2);
      tom.changeAnimation("tomRunning");
  }


}

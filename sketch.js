var monkey 
var bgImage 
var monkey
var bnanasGroup , bnanaImage , bnana
var obstacleGroup , obstacleImage , obstacle
var score=0
var PLAY = 1
var END = 0 
var gameState = PLAY







function preload() {
  bgImage = loadImage("jungle4.jpg") 
  monkeyAnimation= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bnanaImage = loadImage("Bananas.png")
  obstacleImage = loadImage("download.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 bg = createSprite(width/2,height/2)
 bg.addImage(bgImage)
 bg.scale=0.8
 bg.velocityX=-3

 bnanasGroup = new Group()
 obstacleGroup = new Group()

  

 monkey = createSprite(70,height-70)
 monkey.addAnimation("m1",monkeyAnimation)
 monkey.scale=0.4

 invisibleGround = createSprite(40,height-10,width,2)
 invisibleGround.visible= false
 
 


 
 

}

function draw() {
  background("blue");  
  drawSprites();

  monkey.collide(invisibleGround)
  

  
  
 if (gameState===PLAY){

  if(keyDown("space")) {
    monkey.velocityY = -19
    }

   
   
    monkey.velocityY = monkey.velocityY + 0.7

    if(bg.x < 0) {
      bg.x=bg.width/4
    }

    spawnBnanas()
   spawnObstacles()

   if (obstacleGroup.isTouching(monkey)) {
    gameState=END 
   } 
   } 
   else if (gameState===END) {
     bg.velocityX = 0
     obstacleGroup.setVelocityXEach(0)
     bnanasGroup.setVelocityXEach(0)

   }


  

  
 

  
  
}



function spawnBnanas() {
  if (frameCount % 90 === 0) {
    var bnana = createSprite(width-80,height-40);
    bnana.y=random(30,200)
    bnana.addImage(bnanaImage);
    bnana.scale = 0.03;
    bnana.velocityX = -3;

    bnanasGroup.add(bnana);
}
}



  function spawnObstacles() {
  if (frameCount % 200 === 0) {
  var obstacle = createSprite( width-50, height-20)
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.8;
    obstacle.velocityX = -3;

    obstacleGroup.add(obstacle)


}
  
  }


var path,pathimage;
var boy,boyimage;
var invisibleground1,invisibleground2;
var energyDrinkImage,energyDrink;
var bombImage,bomb;
var coinImage,coin;


function preload()
{
  pathimage=loadImage("path.png");
  boyimage=loadAnimation("Runner-1.png","Runner-2.png");
  bombImage=loadImage("bomb.png");
  coinImage=loadImage("coin.png");
  energyDrinkImage=loadImage("energyDrink.png");
}

function setup()
{
  createCanvas(400,400)
  path=createSprite(200,200,50,50);
   path.addImage(pathimage);
   path.scale=1.0;
   path.velocityY=4;
  
   boy=createSprite(250,350,50,30);
   boy.addAnimation("boy",boyimage); 
   boy.scale=0.04;
   
   bomb = createSprite(200,200,20,10);
   bomb.addImage(bombImage);
   bomb.scale=0.08;

  coin = createSprite(100,100,20,10);
  coin.addImage(coinImage);
  coin.scale=0.3;

 energyDrink = createSprite(200,100,20,10);
 energyDrink.addImage(energyDrinkImage);
 energyDrink.scale=0.07
   

  invisibleground1 = createSprite(80,400,20,400);
  invisibleground1.visible=false;
  
  invisibleground2 = createSprite(330,400,20,400);
  invisibleground2.visible=false;
  
       
}

function draw() 
{

  background("white")
  boy.x=World.mouseX; 
  if(path.y>400)
  {
    path.y=height/2;
  }
  
  boy.collide(invisibleground1);
  boy.collide(invisibleground2);

  drawSprites();
}
  
  



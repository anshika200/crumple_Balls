
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;
var paper;
var bgImg;

function preload (){
	bgImg=loadImage("background.jpg")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin1 (1200,500);
    paper=new Paper (200,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

 if( keyDown ("up")){
	 paper.velocityX=6
	 paper.velocityY=-7
 }

 if (paper.x >700){
	paper.velocityX=0
	paper.velocityY=0
 }

  groundObject.display();
  dustbinObj.display();
  paper.display();

}


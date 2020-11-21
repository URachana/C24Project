const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
const Render = Matter.render;
var myEngine,myWorld;
var myRender;
var ground;
var chit;
var wall1, wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	myEngine= Engine.create();
	myWorld = myEngine.world;

	

	//Create a Ground
	ground= new createGround(width/2,height-10,width,40);
	
	wall1 = new createWall(width-200,height-40,200,20);
	wall2 = new createWall(width-290,height-80,20,100);
	wall3 = new createWall(width-110,height-80,20,100);

	chit = new crumpledPaper(50,height-100,10);
	console.log(ground);

	Engine.run(myEngine);
}


function draw() {
  background(15,100,180);
  //Engine.update(myEngine);

  rectMode(CENTER);
 

  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();
  chit.display();
  
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(chit.body,chit.body.position,{x:85, y:-85});
	}
}


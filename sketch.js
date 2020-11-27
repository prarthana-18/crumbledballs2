
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var engine,world,dustbin,paper;	
}

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	dustbin1=new dustbin(720,390,100,10);
	paper1=new paper(100,300,10);
	ground=Bodies.rectangle(width/2,400,width,10 ,{
		isStatic:true
	});
		
	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  paper1.display();

  
  drawSprites();
 
}
function keyPressed(){
if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{
		x:12 ,
		y: -13

	});
}

}





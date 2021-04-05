
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;




function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	paper=new Paper(100,300,10);
	dustbin= new Dustbin(720, 390, 100, 10)
	ground= Bodies.rectangle(width/2,400,width,10,{isStatic:true});
World.add(world,ground);
}


function draw() {
	background("black");
	rectMode(CENTER);
	background(0);

	dustbin.display();
	paper.display();
	
	
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode==UP_ARROW){
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:12,y:-13});
}

}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world;
var ball1 , ball2 , ball3 , ball4 , ball5;
var bg_Img;
var chain;
var roof;

function preload(){
	bg_Img = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,150,500,20);

	ball1 = new Ball(600,350,50);
	ball2 = new Ball(500,350,50);
	ball3 = new Ball(700,350,50);
	ball4 = new Ball(400,350,50);
	ball5 = new Ball(800,350,50);

	chain1 = new Chain(ball1.body,150,-50*2,0);
	chain2 = new Chain(ball2.body,500,-50*2,0);
	chain3 = new Chain(ball3.body,700,-50*2,0);
	chain4 = new Chain(ball4.body,400,-50*2,0);
	chain5 = new Chain(ball5.body,800,-50*2,0);



	Engine.run(engine);
  
}


function draw() {
  background(bg_Img);
  rectMode(CENTER);

	roof.display();
	
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
  
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:20,y: -20});
	}
}




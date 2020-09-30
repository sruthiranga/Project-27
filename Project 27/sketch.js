
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	//Create the Bodies Here.

	bobObject1 = new bob(200, 200);
	bobObject2 = new bob(350, 200);
	bobObject3 = new bob(500, 200);
	bobObject4 = new bob(650, 200);
	bobObject5 = new bob(800, 200);


	roofObject = new roof(400, 100, 400, 20);

	rope1 = new string(bobObject1.body, roofObject.body, -180, 0);
	rope2 = new string(bobObject2.body, roofObject.body, -120, 0);
	rope3 = new string(bobObject3.body, roofObject.body, -60, 0);
	rope4 = new string(bobObject4.body, roofObject.body, 0, 0);
	rope5 = new string(bobObject5.body, roofObject.body, 60, 0);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}




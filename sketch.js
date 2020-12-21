
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,tree,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;

function preload()
{
	
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	boy = new Boy()
	ground = new Ground()
	tree = new Tree()
	m1 = new Mango(1400,300)
	m2 = new Mango(1300,240)
	m3 = new Mango(1367,260)
	m4 = new Mango(1240,278)
	m5 = new Mango(1180,260)
	m6 = new Mango(1340,160)
	m7 = new Mango(1269,160)
	m8 = new Mango(1456,219)
	m9 = new Mango(1470,280)
	m10 = new Mango(1390,190)
	stone = new Stone(100,470,40)
	rope = new Rope(stone.body,{ x:100,y:470})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  boy.display();
  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  rope.display();
  stone.display();

  
  
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

	rope.fly();
}



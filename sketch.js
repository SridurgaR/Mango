
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var chain;
var boy, boyImage;


function preload()
{
	boyImage = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//boy = createSprite(350,850,10,10);
	//boy.addImage(boyImage);
	ground = new Ground (width/2,580,1300,15);
	console.log(ground);
	tree = new Tree (850,300,600,600);
	rock = new Stone (340,550,10,10);
	mango1 = new Mango (865,200,15,15);
	mango2 = new Mango (890,260,15,15);
	//mango3 = new Mango ()
	
	boy = Bodies.rectangle(350,550,10,10);
	World.add(world,boy);

console.log(rock);
	var options = {
		bodyA : boy,
		bodyB : rock.body, // "body" will give just the body of the rock
		length : 10,
		stiffness : 1
	}
	chain = Constraint.create(options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  rock.display();
  mango1.display();
  mango2.display();


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	rock.fly();
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var playerBaseobj,playerobj , computerBaseobj , computerobj


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object


  playerBaseobj = new playerBase( 300 , windowHeight/2, 180,150)

  playerobj = new player(285 , playerBaseobj.body.position.y - 150 , 50, 150)
  
  computerBaseobj = new computerBase( width-300 , windowHeight/2, 180,150)
 
  computerobj = new computer(285 , computerBaseobj.body.position.y - 150 , 50, 150)



 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);



  playerBaseobj.display()

  computerBaseobj.display()

  playerobj.display()

  computerobj.display()





}

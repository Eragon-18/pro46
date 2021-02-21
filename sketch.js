const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var  archer, bow, arrow, arrowImage,target1, target2, target3, target4, target5;
var ground, ground2;
var engine, world;
var obstacle1, obstacle2;

function preload() {
  arrowImage = loadImage("arrow.png");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  archer = createSprite(250, 300, 50, 50);
  ground = new Ground(600,580,1500,10);
  ground2 = new Ground(600,20,1500,10);

  target1 = new Target(1000,120,40,40);
  target2 = new Target(1000,220,40,40);
  target3 = new Target(1000,320,40,40);
  target4 = new Target(1000,420,40,40);
  target5 = new Target(1000,520,40,40);

  obstacle1 = new Obstacle(850,160,35,35);
  obstacle2 = new Obstacle(850,270,35,35);

  arrow = new Arrow(450,300,50,5);
  arrowImage.scale = 0.1;
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  target1.display();
  target2.display();
  target3.display();
  target4.display();
  target5.display();

  obstacle1.display();
  obstacle2.display();
  arrow.display();
  

  drawSprites();
}
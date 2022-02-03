const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world;
var ball, ground, wedge, poly;
var angle = 60;
var boxes = [];

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic: true,
  }

  ground = Bodies.rectangle(170, 350, 400, 20, option);
  fill("lightblue")
  World.add(world, ground);
  box1 = new Box(200, 100, 10, 10);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function mousePressed() {
  boxes.push(
    new Box(mouseX, mouseY, 50, 50)
    )
}

function draw() {
  background("hotpink");
  rect(ground.position.x, ground.position.y, 468, 10);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}

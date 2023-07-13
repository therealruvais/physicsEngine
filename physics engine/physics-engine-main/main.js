const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

let ball;
let ball2;
let ground;
let ground2;
let ground3;
let ground4;

function setup() {
  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

  ball_options = {
    restitution: 3,
    frictionAir: 0.1,
  };

  ball = Bodies.circle(200, 200, 40, ball_options);
  World.add(world, ball);
  ball2 = Bodies.circle(300, 300, 40, ball_options);
  World.add(world, ball2);

  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(250, 450, 500, 20, ground_options);
  World.add(world, ground);
  ground2 = Bodies.rectangle(250, 40, 500, 20, ground_options);
  World.add(world, ground2);
  ground3 = Bodies.rectangle(25, 250, 20, 500, ground_options);
  World.add(world, ground3);
  ground4 = Bodies.rectangle(475, 250, 20, 500, ground_options);
  World.add(world, ground4);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("black");
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 40);
  ellipse(ball2.position.x, ball2.position.y, 40);
  rect(ground.position.x, ground.position.y, 500, 20);
  rect(ground2.position.x, ground2.position.y, 500, 20);
  rect(ground3.position.x, ground3.position.y, 20, 500);
  rect(ground4.position.x, ground4.position.y, 20, 500);

  fill("green");
}

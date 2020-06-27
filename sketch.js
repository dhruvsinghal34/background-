const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var r,b,g;
function setup() {
  createCanvas(700,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background("white")
  let r=("red");
  let g=("green");
  let b=("blue");

  let a = map(mouseX, 0, 700, 30, width);
  fill ("yellow");
  ellipse(a,200,20,20);
  if(a>=130){
    background("red");
    ellipse(a,200,20,20);
  }
  if(a>=300){
    background("green");
    ellipse(a,200,20,20);
  }
  if(a>=500){
    background("blue");
    ellipse(a,200,20,20);
  }
}
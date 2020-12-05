const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var particles=[];
var divisions=[];
var plinkos=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground1=new Ground(240,800,480,20);
  for (var k=0;k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j=40;j<=width;j=j+50){
   plinkos.push(new Plinko(j,175))
  }
  for (var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,225))
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,125))
  }
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
}

function draw() {
  background(0,0,0); 
  ground1.display(); 
  Engine.update(engine);
  for( var i=0;i<divisions.length;i=i+1){
    divisions[i].display();
  }
  for( var j=0;j<plinkos.length;j=j+1){
    plinkos[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2-10),10,10));
  }
  for(var i=0;i<particles.length;i=i+1){
    particles[i].display();
  }
}
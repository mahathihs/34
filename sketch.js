const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var bgImg,monsterImg1,monsterImg2;

function preload() {
//preload the images here
bgImg=loadImage("images/GamingBackground.png");
monster1=loadImage("images/Monster-01.png");
monster2=loadImage("images/Monster-02.png");
}

function setup() {
  createCanvas(2000, 900);

  engine=Engine.create();
  world= engine.world;

  Engine.update(engine);

  ground1=new Ground(350,335,1500,20);
  roof=new Ground(200,50,50,50);
  hero1=new Hero(450,400,450);
  monster=new Monster(1550,450,400,400);

  hero1Diameter=200;
  flyrope=new Fly(hero1.body,roof.body,hero1Diameter,0);

  block1=new Block(800,600,80,80);
  block3=new Block(880,600,80,80);
  block5=new Block(960,600,80,80);
  block7=new Block(1020,600,80,80);
  block9=new Block(1100,600,80,80);
  block10=new Block(800,520,80,80);
  block11=new Block(880,520,80,80);
  block12=new Block(960,520,80,80);
  block13=new Block(1020,520,80,80);
  block14=new Block(1100,520,80,80);
  block15=new Block(800,440,80,80);
  block16=new Block(880,440,80,80);
  block17=new Block(960,440,80,80);
  block18=new Block(1020,440,80,80);
  block19=new Block(1100,440,80,80);
  block20=new Block(880,360,80,80);
  block21=new Block(1020,360,80,80);
  block22=new Block(955,280,65,65);
}

function draw() {
  background(bgImg);

  ground1.display();
  hero1.display();
  roof.display();
  flyrope.display();
  monster.display();

  block1.display();
  block3.display();
  block5.display();
  block7.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX , y:mouseY});
};
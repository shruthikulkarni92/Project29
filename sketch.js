const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,block,slingshot;
var polygonImg,platform;
var block8,block9,block10,block11,block12,block13,block14,block15,block16


function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(390,300,250,10);
    platform2 = new Ground(700,200,200,10)
    ball=Bodies.circle(40,230,20)
    World.add(world,ball)
    slingshot= new SlingShot(this.ball,{x:70,y:200})

    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);

    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);

    block16=new Block(390,155,30,40);
    
    block21=new Block(640,175,30,40);
    block22=new Block(670,175,30,40);
    block23=new Block(700,175,30,40);
    block24=new Block(730,175,30,40);
    block25=new Block(760,175,30,40);

    block26=new Block(670,135,30,40);
    block27=new Block(700,135,30,40);
    block28=new Block(730,135,30,40);

    block29=new Block(700,95,30,40);

    block1=new Block(300,275,30,40);
    block2=new Block(330,275,30,40);
    block3=new Block(360,275,30,40);
    block4=new Block(390,275,30,40);
    block5=new Block(420,275,30,40);

    block6=new Block(450,275,30,40);
    block7=new Block(480,275,30,40);
    
}

function draw(){
    background("black");
    Engine.update(engine);

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    
    platform1.display();
    platform2.display();
    image(polygonImg,ball.position.x,ball.position.y,40,40);
    slingshot.display();
}
function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY })
  }
  
  function mouseReleased() {
    slingshot.fly();
  }

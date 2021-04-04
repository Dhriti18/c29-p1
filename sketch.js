const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
base1=new Stand(714,234,240,10);
base=new Stand(687,240,200,10);
  
rect1=new Block(609,210,30,40);

rect2=new Block(639,210,30,40);
rect3=new Block(669,210,30,40);
rect4=new Block(699,210,30,40);

rect5=new Block(729,210,30,40);
rect6=new Block(759,210,30,40);


rect7=new Block(639,198,30,40);
rect8=new Block(669,198,30,40);

rect9=new Block(699,198,30,40);
rect10=new Block(729,198,30,40);

rect11=new Block(669,124,30,40);
rect12=new Block(699,124,30,40);
rect13=new Block(684,84,30,40);

//hexagon1=Matter.Bodies.polygon(140, 130, 6, 80, {isStatic:false});
shape=new Polygon(139,130,50,50);

rope1=new Slingshot(shape.body,{x:137,y:128});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 base.display();
 fill("skyblue");
 rect1.display();
 rect2.display();
 rect3.display();
 rect4.display();
 rect5.display();
 rect6.display();
 fill("turquoise")
 rect7.display();
 rect8.display();
 rect9.display();
 rect10.display();
 fill("pink");
rect11.display();
rect12.display();
fill("grey");
rect13.display();

shape.display();
rope1.display();

  text ("X"+mouseX+"Y"+mouseY,mouseX,mouseY);

}

   function mouseDragged(){
    Matter.Body.setPosition(shape.body, {x: mouseX , y: mouseY});}



function mouseReleased(){
    rope1.fly();
}

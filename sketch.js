const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;
var bg_img, roofObject, rope1, rope2, rope3;


function preload(){
   bg_img = loadImage('images/bg.jpg');
}

function setup(){
   createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    monkey = new Monkey();
    
    roofObject= new roof(300,70,300,200);
    bob1 = new bob(380,275);
    bob2 = new bob(420,275);
    bob3 = new bob(460,275);
    bob4 = new bob(500,275);
    bob5 = new bob(540,275);
    rope1= new rope(bob1.body,roofObject.body,-100,0);
    rope2= new rope(bob2.body,roofObject.body,-50,0);
    rope3= new rope(bob3.body,roofObject.body,0,0);
    rope4= new rope(bob4.body,roofObject.body,50,0);
    rope5= new rope(bob5.body,roofObject.body,100,0);
ground=new ground();

   

    
   
         
        
}

function draw(){
   if(bg_img)
  background(bg_img);

    Engine.update(engine);
    monkey.display();

    roofObject.display();
    rope1.display();
    rope2.display();
    rope3.display();
    // rope4.display();
    // rope5.display();

    //  bob1.display();
    //  bob2.display();
     bob3.display();
     bob4.display();
     bob5.display();
     ground.display();

//     if(keyDown("space") ) {
//       monkey.velocityY = -12;
//     }
//     if(monkey.isTouching()){
//       gameState = END;
//   }
  

// }

 function keyPressed() {
   if (keyCode === LEFT_ARROW) {
  
     Matter.Body.setVelocity(monkey.body,
               {x: 0,y: -15});
 }

 }
}

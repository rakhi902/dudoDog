const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var boundary1,boundary2,boundary3,boundary4,boundary5,boundary6,boundary7,boundary8,boundary9,boundary10,boundary11,boundary12,boundary13,boundary14;
var boundary15,boundary16,boundary17,boundary18,boundary19,boundary20,boundary21,boundary22,boundary23,boundary24,boundary25;
var bone1,bone2,bone3,bone4,bone5,bone6,bone7,bone8,bone9,bone10,bone11,bone12,boneImage,boneVImage;
var bone13,bone14,bone15,bone16,bone17,bone18,bone19,bone20,bone21,bone22,bone23,bone24
var bone25,bone26,bone27,bone28,bone29,bone30,bone31,bone32,bone33,bone34,bone35,bone36;
var bone37,bone38,bone39,bone40,bone41,bone42,bone43,bone44,bone45,bone46,bone47,bone48;
var edges
var form;

var dog, dogImage;

var score = 0;

var engine, world;
function preload(){
 boneImage= loadImage("Bone.png")
 boneVImage= loadImage("BoneV.png")
 dogImage = loadImage("dog1.png")
}
function setup() {
  createCanvas(windowWidth-350,600);

  engine = Engine.create()
  world = engine.world;
  
   form = new Heading();

   //creating boundary objects
   boundary1 = new Boundary(750,100,1000,10);
   boundary2 = new Boundary(750,500,1000,10);
   boundary3 = new Boundary(250,270,10,350);
   boundary4 = new Boundary(360,300,10,250);
   boundary5 = new Boundary(540,300,10,250);
   boundary6 = new Boundary(450,300,40,10);
   boundary7 = new Boundary(700,200,200,10);
   boundary8 = new Boundary(700,400,200,10);
   boundary9 = new Boundary(1250,300,10,410);
   boundary10 = new Boundary(1170,300,10,280);
   boundary11 = new Boundary(1100,260,40,10);
   boundary12 = new Boundary(1100,350,40,10);
   boundary13 = new Boundary(700,260,130,10);
   boundary14 = new Boundary(700,340,130,10);
   boundary15 = new Boundary(640,300,10,80);
   boundary16 = new Boundary(760,270,10,20);
   boundary17 = new Boundary(760,330,10,20);
   boundary18 = new Boundary(990,200,80,10);
   boundary19 = new Boundary(970,340,10,150);
   boundary20 = new Boundary(880,260,60,10);
   boundary21 = new Boundary(880,350,10,60);
   


   // creating food objects
   bone1= new Bone(300,130,50,50)
   bone2= new Bone(380,130,50,50)
   bone3= new Bone(460,130,50,50)
   bone4= new Bone(540,130,50,50)
   bone5= new Bone(620,130,50,50)
   bone6= new Bone(700,130,50,50)
   bone7= new Bone(780,130,50,50)
   bone8= new Bone(860,130,50,50)
   bone9= new Bone(940,130,50,50)
   bone10= new Bone(1020,130,50,50)
   bone11= new Bone(1100,130,50,50)
   bone12= new Bone(1180,130,50,50)
   bone13= new Bone(300,460,50,50)
   bone14= new Bone(380,460,50,50)
   bone15= new Bone(460,460,50,50)
   bone16= new Bone(540,460,50,50)
   bone17= new Bone(620,460,50,50)
   bone18= new Bone(700,460,50,50)
   bone19= new Bone(780,460,50,50)
   bone20= new Bone(860,460,50,50)
   bone21= new Bone(940,460,50,50)
   bone22= new Bone(1020,460,50,50)
   bone23= new Bone(1100,460,50,50)
   bone24= new Bone(1180,460,50,50)
   bone25= new Bone(300,190,50,50)
   bone26= new Bone(300,280,50,50)
   bone27= new Bone(300,370,50,50)
   bone28= new Bone(1210,190,50,50)
   bone29= new Bone(1210,280,50,50)
   bone30= new Bone(1210,370,50,50)
   bone31= new Bone(400,190,50,50)
   bone32= new Bone(400,280,50,50)
   bone33= new Bone(400,370,50,50)
   bone34= new Bone(500,190,50,50)
   bone35= new Bone(500,280,50,50)
   bone36= new Bone(500,370,50,50)
   bone37= new Bone(580,190,50,50)
   bone38= new Bone(580,280,50,50)
   bone39= new Bone(580,370,50,50)
   bone40= new Bone(820,190,50,50)
   bone41= new Bone(820,280,50,50)
   bone42= new Bone(820,370,50,50)
   bone43= new Bone(930,190,50,50)
   bone44= new Bone(930,280,50,50)
   bone45= new Bone(930,370,50,50)
   bone46= new Bone(1060,190,50,50)
   bone47= new Bone(1060,280,50,50)
   bone48= new Bone(1060,370,50,50)

   //creating player object
   dog= new Dog(230,470,50,50)
 
}


function draw() {
  background(80);

  //displaying the score
  fill("yellow")
  textSize(30)
  text("Score: "+score,windowWidth-550,50)

  Engine.update(engine)

  //displaying boundaries
 boundary1.display();
 boundary2.display();
 boundary3.display();
 boundary4.display();
 boundary5.display();
 boundary6.display();
 boundary7.display();
 boundary8.display();
 boundary9.display();
 boundary10.display();
 boundary11.display();
 boundary12.display();
 boundary13.display();
 boundary14.display();
 boundary15.display();
 boundary16.display();
 boundary17.display();
 boundary18.display();
 boundary19.display();
 boundary20.display();
 boundary21.display();

//display player object
 dog.display()

 //displaying bone objects
 bone1.display();
 bone1.score();

 bone2.display();
 bone2.score();

 bone3.display();
 bone3.score();

 bone4.display();
 bone4.score();

 bone5.display();
 bone5.score();

 bone6.display();
 bone6.score();

 bone7.display();
 bone7.score();

 bone8.display();
 bone8.score();

 bone9.display();
 bone9.score();

 bone10.display();
 bone10.score();

 bone11.display();
 bone11.score();

 bone12.display();
 bone12.score();

 bone13.display();
 bone13.score();

 bone14.display();
 bone14.score();

 bone15.display();
 bone15.score();

 bone16.display();
 bone16.score();

 bone17.display();
 bone17.score();

 bone18.display();
 bone18.score();

 bone19.display();
 bone19.score();

 bone20.display();
 bone2.score();

 bone21.display();
 bone21.score();

 bone22.display();
 bone22.score();

 bone23.display();
 bone23.score();

 bone24.display();
 bone24.score();

 bone25.display();
 bone25.score();

 bone26.display();
 bone26.score();

 bone27.display();
 bone27.score();

 bone28.display();
 bone28.score();

 bone29.display();
 bone29.score();

 bone30.display();
 bone30.score();

 bone31.display();
 bone31.score();

 bone32.display();
 bone32.score();

 bone33.display();
 bone33.score();

 bone34.display();
 bone34.score();

 bone35.display();
 bone35.score();

 bone36.display();
 bone36.score();

 bone37.display();
 bone37.score();

 bone38.display();
 bone38.score();

 bone39.display();
 bone39.score();

 bone40.display();
 bone40.score();

 bone41.display();
 bone41.score();

 bone42.display();
 bone42.score();

 bone43.display();
 bone43.score();

 bone44.display();
 bone44.score();

 bone45.display();
 bone45.score();

 bone46.display();
 bone46.score();

 bone47.display();
 bone47.score();
 
 bone48.display();
 bone48.score();


  form.display();

  
  
}

function keyPressed(){
   //giving controls to player to move in different directions
   if(keyCode ==39){
    dog.body.position.x+=5
     console.log("right key pressed")
  }
  if(keyCode ==37){
    console.log("left key pressed")
    dog.body.position.x-=5
  }
  if(keyCode ==38){
    dog.body.position.y-=5
    console.log("up key pressed")
  }
  if(keyCode ==40){
    dog.body.position.y+=5
    console.log("down key pressed")
  }
}

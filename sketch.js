//Global variables for images
var bg, sunR, sunL, s_pan, fan_anim,fan_img,display, g_house_img;

//Global variables for Sprites
var g_house, pan1,pan2,fan,fan2;

//Creating a ray group
var rayGroup;

//Creating temprature and voltage variables
var temp = 10
var panel1_voltage =0;
var panel2_voltage = 0;
var power_gen = 0;




function preload()
{
  sunR = loadImage("sunrays.png");
  sunL = loadImage("sunrays1.png");
  bg = loadImage("bgimage.png")
  s_pan = loadImage("s_panel.png");
  fan_anim = loadAnimation("fan01.png","fan02.png","fan03.png","fan04.png","fan05.png");
  fan_img = loadImage("fan01.png");
  display = loadImage("disp.png");
  g_house_img = loadImage("greenhouse.png")
}

function setup() 
{
  createCanvas(800, 500);
  
  g_house = createSprite(380,300,100,100);
  g_house.addImage(g_house_img);
  g_house.scale = 0.75;
  g_house.debug = true;
  g_house.setCollider("circle",-10,0,185)

  pan1 = createSprite(100,height-50,80,80);
  pan1.addImage(s_pan);
  pan1.scale = 0.75;

  pan2 = createSprite(width-150,height-50,80,80);
  pan2.addImage(s_pan);
  pan2.scale = 0.75;

  
  fan = createSprite(280,300,20,20);
  fan.addImage(fan_img);
  fan.scale = 0.3;
  fan.addAnimation('run',fan_anim);
  
  fan2 = createSprite(450,300,20,20);
  fan2.addImage(fan_img);
  fan2.scale = 0.3;
  fan2.addAnimation('run',fan_anim);
  textSize(15);

  raysGroup = createGroup()
  
}

function draw() 
{
  background(220);
  
  image(bg,0,0,width,height);
  image(display,600,10,200,60)
  power_gen = panel1_voltage + panel2_voltage
  
  push();
  noStroke();
  fill(255,255,0)
  text("Voltage : ",620,37)
  text(power_gen,680,37)

  text("Temprature : ",620,56)
  text(temp,710,56);
  pop();
  
  makeRay();
  
  //Calculate Wattage
  
  
  
  
  // Write conditions to start the first fan will be temp should be more than 30 and power_gen > =4.
  //And the second fan will start when temp >= 30 and power_gen >= 4.
  
  
  
  
  
  drawSprites();  
}

function makeRay()
{
  
   if (frameCount % 60 === 0) 
   {
    var x = Math.round(random(10,350));
    rayL = createSprite(x,50,10,10);
    var xr = Math.round(random(350,750));
    rayR = createSprite(xr,50,10,10);
    rayL.addImage(sunL);
    rayR.addImage(sunR);
    rayL.scale = 0.08;
    rayR.scale = 0.08;
    vx = random(-1,1);
    raysGroup.add(rayL);
    raysGroup.add(rayR);
    raysGroup.setVelocityYEach(2)
    raysGroup.setVelocityXEach(vx)
    raysGroup.setLifetimeEach(134)
     
     //Add collision functions and callback functions
     
     
     
     
   }
  
}
//Create function for charge1, charge2 & temp_rise








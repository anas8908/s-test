var logo,logoImg,text;
var login,loginImg,login2;
var student,StudentIMG;
var teacher,teacherImg;
var background1,bgIMG;
var hw,hwIMG,tit,titIMG,exam,examIMG,time,timeIMG;



function preload() {
    logoImg = loadImage("200x200bb.png")
    loginImg = loadImage("login-button-png-5.png")
   StudentIMG = loadImage("student-png-pollpath-27.png")
   teacherImg = loadImage("teacher.png")
   hwIMG = loadImage("hw.png")
   titIMG = loadImage("tit.png")
   examIMG = loadImage("exam por.png")
   timeIMG = loadImage("tm.png")
  
}
function setup() {
    createCanvas(displayWidth,displayHeight);
    

    logo = createSprite(displayWidth - 600, displayHeight-525);
    logo.addAnimation("logo",logoImg);
    logo.scale = 0.5

    login = createSprite(displayWidth - 950, displayHeight-295,50,50);
    login.addAnimation("login",loginImg);
    login.scale = 0.2

    student = createSprite(displayWidth - 800, displayHeight-350,50,50)
    student.addAnimation("student",StudentIMG);
    student.scale = 0.15

    login2 = createSprite(displayWidth - 335, displayHeight-295);
    login2.addAnimation("login",loginImg);
    login2.scale = 0.2

    teacher = createSprite(displayWidth - 200, displayHeight-325,50,50);
    teacher.addAnimation("teacher",teacherImg);
    teacher.scale = 0.25;

    background1 = createSprite(displayWidth,displayHeight,10000,10000);
    background1.shapeColor = rgb(173,216,230);
    background1.visible = false;

    hw = createSprite(displayWidth - 1075,displayHeight - 200);
    hw.addAnimation("hw",hwIMG);
    hw.visible = false;
    hw.scale = 0.6;

    tit = createSprite(displayWidth - 975,displayHeight - 250)
    tit.addAnimation("tit",titIMG)
    tit.scale = 0.8;
    tit.visible = false;

    exam = createSprite(displayWidth - 175,displayHeight - 250);
    exam.addAnimation("exam",examIMG)
    exam.scale = 0.8;
    exam.visible = false;

    time = createSprite(displayWidth - 1000,displayHeight - 250);
    time.addAnimation("time",timeIMG)
    time.scale = 0.55;
    time.visible = false;
   
   

    

    
    

    //text("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650);

    //tex("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650)


}

function draw() {
    background(173,216,230);

    
    text("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 700, displayHeight-600);
   
    text("Students login here",displayWidth - 1000, displayHeight-400);

    text("Teachers login here",displayWidth - 400, displayHeight-375);

    text("SCHOOL DIARY",displayWidth/2, displayHeight-450)

    

   
   

    if(mousePressedOver(login)) {
      background("white")
      
      background1.visible = true;

          
         

      this.input = createInput("Username");
        this.input1 = createInput("Password");
        
      this.button = createButton('Login');
      this.greeting = createElement('h2');
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input.visible = false;
  
      this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 50);
  
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{

        hw.visible = true;
        tit.visible = true;
        exam.visible = true;
        
        
        this.value = this.input.value();
        this.greeting.html("Hello " + this.value)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);

        
        this.input.hide();
        this.input1.hide();

      
      

      
    });
      
      }

      if(mousePressedOver(login2)) {
        background("white")
        background1.visible = true;

        

        this.input = createInput("Username");
        this.input1 = createInput("Password");
        
      this.button = createButton('Login');
      this.greeting = createElement('h2');
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input.visible = false;
  
      this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 50);
  
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{

        exam.visible = true;
        time.visible = true;
        
        
        this.value = this.input.value();
        this.greeting.html("Hello " + this.value)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.input.hide();
        this.input1.hide();
        
        

        
      });


}

drawSprites();
}
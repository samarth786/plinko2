const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];

var pliko = [];
var divisionHeight = 300;
var score = 0;
var patricle;
var gameState;
var count = 0;
function preload() {
}

function setup(){
createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

gameState = "play";
    ground = new Ground(240,800,480,20);
    p();
    
    r(); 
po();
pou();
pouk();

mousePressed();
}    



function mousePressed(){
  if(gameState!== "end" ){
 count = count +1;
  patricle = new par(mouseX,10, 7.5); 

   
    }


}

function draw(){
    background(0);
   
    Engine.update(engine); 
    ground.display();   
  

  

  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
   
  }
  for(var i=0; i<pliko.length; i++){
    pliko[i].display();
   
  }
 

textSize(18);   
  text("Score " + score, 380, 30);


if(patricle!== null){
 
  patricle.display(); 
  if(patricle.body.position.y>760){

    if(patricle.body.position.x < 160){
 score = score+200;
 patricle = null;

      if(count>= 6){
gameState = "end";
textSize(20);
text("Game Over ", 300, 400);     
}
    }
  }
}


if(patricle!== null){
 
  patricle.display(); 
  if(patricle.body.position.y>760){

    if(patricle.body.position.x > 320){
 score = score+200;
 patricle = null;

      if(count>= 6){
gameState = "end";
text("Game Over ", 200, 400);        }
    }
  }
}

if(patricle!== null){
 
  patricle.display(); 
  if(patricle.body.position.y>760){

    if(patricle.body.position.x > 160 && patricle.body.position.x<320){
 score = score+500;
 patricle = null;

      if(count>= 6){
gameState = "end";
text("Game Over ", 200, 400);        }
    }
  }
}
if(count>= 6){
  gameState = "end";
  textSize(20);
  text("Game Over ", 200, 400);        }

 
}


function r(){
    for( var i =0; i<=480 ; i = i+80 ) {
        divisions.push(new Groud(i, 800-divisionHeight/2, 10, divisionHeight));
    
      
        }

}

function p(){
   
    for( var j =15; j<=480 ; j = j + 50 ) {
        pliko.push(new plinko(j,75 ));
      //  pliko[0].display();
     
        }
}


function po(){
   
  for( var j =40; j<=480 ; j = j + 50 ) {
      pliko.push(new plinko(j,175 ));
    //  pliko[0].display();
   
      }

      for(var j=0; j<pliko.length; j++){
        pliko[j].display();
       
      }
      
}

function pou(){
   
  for( var j =15; j<=480 ; j = j + 50 ) {
      pliko.push(new plinko(j,275 ));
    //  pliko[0].display();
   
      }

      for(var j=0; j<pliko.length; j++){
        pliko[j].display();
       
      }
      
}
function pouk(){
   
  for( var j =40; j<=480 ; j = j + 50 ) {
      pliko.push(new plinko(j,375 ));
    //  pliko[0].display();
   
      }

      for(var j=0; j<pliko.length; j++){
        pliko[j].display();
       
      }
      
}

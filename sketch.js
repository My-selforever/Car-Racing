var database;
var game,form,player;
var everyone;
var count = 0,state = 0;
var car1,car2,car3,car4;
var c,a,r,car, track;
var cars;
var d = 10;
 
function preload()
{
  c = loadImage("Images/car1.png");
  a = loadImage("Images/car2.png");
  r = loadImage("Images/car3.png");
  car = loadImage("Images/car4.png");
  track = loadImage("Images/track.jpg");
}

function setup()
 {
     createCanvas(displayWidth,displayHeight)
    database = firebase.database();
    game = new GameStates();
    game.readState()
    game.check();
} 

function draw(){
    background(rgb(60,38,22));
    if (count===4)
    {
        game.updateState(1);
    }
if (state===1)
{
  game.gamePlay();
}

if (state===2)
{
    game.EndGame();
}
}


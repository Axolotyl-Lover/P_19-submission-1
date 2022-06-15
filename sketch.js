var PLAY = 1
var END = 0
var gamestate = PLAY

var human_running
var cat_running

var GameOver



function preload(){
cat_running = loadAnimation("run cat.jpeg")
human_running =loadAnimation("run man.png")
scene = loadImage("Road.jpeg")
}

function setup() {
createCanvas(600,200)
cat = createSprite(400,110,40,20)
cat.addAnimation("running",cat_running)
scene = createSprite(0,0,400,400);
scene.addImage("Road.jpeg");
scene.scale = 2.5
}

function draw() {
background(180);
drawSprites();
}


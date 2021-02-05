var bg1, bg2, bg3;
var player;
var layout, monster;

function preload(){

  bg1 = loadImage("images/Spawn2.jpg");
  bg2 = loadImage("images/map2.jpg");
  bg3 = loadImage("images/map1.png");


}


function setup() {
  createCanvas(1300, 700);

  player = new Player(width/2, height/2);

  layout = new Layout();
  layout.bg1();
}


function draw() {
  background(255,255,255);  

  monster = new Monster();

  imageMode(CENTER);
  image(bg1, width/2+300, height/2, 2500, 2200);

  
  //console.log(player.x);
  //console.log(player.y);


  

  drawSprites();

  player.move();

  if(mousePressedOver(player.weapon)){
    player.ownership = true
  }

  if(player.ownership === true){
    player.pickWeapon();
  }
  
}


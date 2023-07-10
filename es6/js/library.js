// var a = 10;
// var b = 20;
// var c = 30;
// export {a, b};
// export default c;


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = 'dinosaur.png';

var dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2,this.x,this.y, this.width, this.height);
  }
}

var img1 = new Image();
img1.src = 'cactus.png';


class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1,this.x-24,this.y);
  }
}

var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactuses = [];
var jumpTimer = 0;
var animation;

function frameRun(){
  animation = requestAnimationFrame(frameRun)
  timer ++;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(timer % 120 === 0){
    var cactus = new Cactus();
    cactuses.push(cactus);

  }
  cactuses.forEach((a, i, o)=>{
    if(a.x < 0){
      o.splice(i,1)
    }
    a.x -= 2;

    coll(dino, a);

    a.draw();
  })

  if(jumping == true){
    dino.y -= 4;
    jumpTimer++;
  }

  if(jumping == false){
    if(dino.y < 200) {
      dino.y += 4;
    }
    
  }

  if(jumpTimer > 40){
    jumping = false;
    jumpTimer = 0;
  }

  dino.draw();
}


frameRun();


function coll(dino, cactus){
  var xxx = cactus.x - (dino.x + dino.width);
  var yyy = cactus.y - (dino.y + dino.height);
  if(xxx < 0 && yyy < 0){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cancelAnimationFrame(animation);
  }
}

var jumping = false;
document.addEventListener('keydown', function(e){
  if (e.code === 'Space'){
    jumping = true;
  }
})
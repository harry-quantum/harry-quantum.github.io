const ARROW_MAP = {
  37: "left",
  40: "up",
  39: "right",
  38: "down",
};

function clear() {
  ctx.fillStyle = "#2288dd";
  ctx.fillRect(0, 0, width, height);
  // ctx.clearRect(0, 0, width, height); // just clear the whole game area
}

function draw() {
  ctx.fillStyle = "#ff88dd";
  ctx.fillRect(x, y, size, size);
}

function update() {
  x += speed.x;
  y += speed.y;
}

function checkCollision() {
  if (x <=0 || x+size >= width ) {
    speed.x = -speed.x
  }
  if (y <=0 || y+size >= height ) {
    speed.y = -speed.y
  }
}

const maxLoop = 600;

// the entry point of the game
function start() {

  // clear(); // clear everything on the canvaas, including background
  draw();
  update();
  checkCollision();

  count += 1;
//  console.log('count', count)

  // if (count < maxLoop) {
    requestAnimationFrame(start);
  // } else {
  //   console.log("Run " + maxLoop + " loops took " + (performance.now() - t0) + " milliseconds.")
  // }

}

const handleKeydown = (e) => {
  switch (e.keyCode) {
    case 37: // left
      speed.x -= 1;
      break;

    case 38: // down
      speed.y -= 1;
      break;

    case 39: // right
      speed.x += 1;
      break;

    case 40: // up
      speed.y += 1;
      break;

    case 32: // space
      speed.x = 0;
      speed.y = 0;
      let t1 = performance.now()
      console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
      break;


    case 27: // esc
    default:
    }
};

const width = 800;
const height = 1000; 

const canvas = document.querySelector("canvas");
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext("2d");

const size = 10;
const xSign = Math.random() > 0.5 ? 1 : -1;
const ySign = Math.random() > 0.5 ? 1 : -1;

let x = Math.random()*width;
let y = Math.random()*width;
let speed = {
  x : 5 * Math.random() * xSign,
  y : 60 * Math.random() * ySign,
};



document.addEventListener("keydown", handleKeydown); //

clear();

let t0 = performance.now();
let count = 0;

start();

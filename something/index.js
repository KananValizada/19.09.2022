var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if (x + dx > canvas.width - 5 || x + dx < 5) {
    dx = -dx;
  }

  if (y + dy > canvas.height - 5 || y + dy < 5) {
    dy = -dy;
  }
}

setInterval(draw, 10);

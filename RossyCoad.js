let n = 23;
let startX = 0;
let xstep = 40;

let gameOver = false;

let car1 = 0;
let car2 = 0
let car3 = 0
let car4 = 0

let chickenX = 450;
let chickenY = 660;
let chickenSize = 40;

function setup() {
  createCanvas(900, 700);
}
function checkCollision(carX, carY, carW, carH) {
  return (
    chickenX + chickenSize / 2 > carX &&
    chickenX - chickenSize / 2 < carX + carW &&
    chickenY + chickenSize / 2 > carY &&
    chickenY - chickenSize / 2 < carY + carH
  );
}
function draw() {
  if (gameOver) {
    background(1);
    fill("#ffffff");
    textSize(100);
    text("You Lost", 240, 380);
    return;
  }
  if (chickenY<50) {
    background(1)
    fill("#ffffff");
    textSize(100);
    text("You Win", 240, 380);
    return;
  }
  background("lightgreen");
  car1 = car1 + 30;
  if (car1 >= 900) car1 = 0;

  car2 = car2 + 9;
  if (car2 >= 900) car2 = 0;

  car3 = car3 + 6;
  if (car3 >= 900) car3 = 0;

  car4 = car4 + 8;
  if (car4 >= 900) car4 = 0;
 

  fill("gray");
  rect(0, 100, 900, 70);
  rect(0, 250, 900, 70);
  rect(0, 400, 900, 70);
  rect(0, 550, 900, 70);
  fill("white");
  for (let i = 0; i < n; i++) {
    let x = startX + xstep * i;
    rect(x, 130, 20, 10);
    rect(x, 280, 20, 10);
    rect(x, 430, 20, 10);
    rect(x, 580, 20, 10);

  drawCar(car1, 100);
  drawCar(car2, 250);
  drawCar(car3, 400);
  drawCar(car4, 550);
  }

  if (
    checkCollision(car1, 110, 100, 40) ||
    checkCollision(car2, 260, 100, 40) ||
    checkCollision(car3, 410, 100, 40) ||
    checkCollision(car4, 560, 100, 40)
  ) {
    gameOver = true;
  }

  chickenX = constrain(chickenX, 20, width - 20);
  chickenY = constrain(chickenY, 20, height - 20);

  fill("yellow");
  circle(chickenX, chickenY, 40);
}

function drawCar(x,y) {
  fill("orange");
  rect(x, y, 100, 20);
  fill("lightblue");
  rect(x + 10,y + 10, 60, 20);
  fill(10);
  circle(x + 15, y + 50, 25);
  circle(x + 70, y + 50, 25);
}

function keyPressed() {
 
  if (keyCode == 37) {
    chickenX = chickenX - 40;
  }

  if (keyCode == 39) {
    chickenX = chickenX + 40;
  }

  if (keyCode == 38) {
    chickenY = chickenY - 40;
  }

  if (keyCode == 40) {
    chickenY = chickenY + 40;
  }
}

let n = 23;
let startX = 0;
let xstep = 40;

let chickenSize = 40;

let gameOver = false;

let car1 = 0;
let car2 = 0;
let car3 = 0;
let car4 = 0;

let chickenX = 450;
let chickenY = 660;

function drawLane(y) {
  fill("gray");
  rect(0, y, 900, 70);
  fill("white");
  for (let i = 0; i < n; i++) {
    let x = startX + xstep * i;
    rect(x, y + 30, 20, 10);
  }
} 

function drawCar(x, y) {
  fill("orange");
  rect(x, y, 100, 20);
  fill("lightblue");
  rect(x + 10, y - 20, 60, 20);
  fill(10);
  circle(x + 15, y + 20, 25);
  circle(x + 70, y + 20, 25);
}

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
  
  drawLane(100);
  drawLane(250);
  drawLane(400);
  drawLane(550);

  drawCar(car1, 130);
  drawCar(car2, 280);
  drawCar(car3, 430);
  drawCar(car4, 580);

  if (
    checkCollision(car1, 130, 100, 40) ||
    checkCollision(car2, 280, 100, 40) ||
    checkCollision(car3, 430, 100, 40) ||
    checkCollision(car4, 580, 100, 40)
  ) {
    gameOver = true;
  }

  chickenX = constrain(chickenX, 20, width - 20);
  chickenY = constrain(chickenY, 20, height - 20);

  fill("yellow");
  circle(chickenX, chickenY, 40);
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

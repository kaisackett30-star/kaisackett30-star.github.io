let n = 23;
let startX = 0;
let xstep = 40;

let chickenSize = 40;

let gameOver = false;

let car1 = 0;

let carmiddle2 = 0;
let cartop2 = 10;
let wheel3 = 15;
let wheel4 = 70;

let carmiddle3 = 0;
let cartop3 = 10;
let wheel5 = 15;
let wheel6 = 70;

let carmiddle4 = 0;
let cartop4 = 10;
let wheel7 = 15;
let wheel8 = 70;

let chickenX = 450;
let chickenY = 660;
function setup() {
  createCanvas(900, 700);
  frameRate(4);
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

  carmiddle2 = carmiddle2 + 9;
  if (carmiddle2 >= 900) carmiddle2 = 0;
  cartop2 = cartop2 + 9;
  if (cartop2 >= 900) cartop2 = 0;
  wheel3 = wheel3 + 9;
  if (wheel3 >= 900) wheel3 = 0;
  wheel4 = wheel4 + 9;
  if (wheel4 >= 900) wheel4 = 0;

  carmiddle3 = carmiddle3 + 6;
  if (carmiddle3 >= 900) carmiddle3 = 0;
  cartop3 = cartop3 + 6;
  if (cartop3 >= 900) cartop3 = 0;
  wheel5 = wheel5 + 6;
  if (wheel5 >= 900) wheel5 = 0;
  wheel6 = wheel6 + 6;
  if (wheel6 >= 900) wheel6 = 0;

  carmiddle4 = carmiddle4 + 8;
  if (carmiddle4 >= 900) carmiddle4 = 0;
  cartop4 = cartop4 + 8;
  if (cartop4 >= 900) cartop4 = 0;
  wheel7 = wheel7 + 8;
  if (wheel7 >= 900) wheel7 = 0;
  wheel8 = wheel8 + 8;
  if (wheel8 >= 900) wheel8 = 0;
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
  }

  fill("orange");
  rect(car1, 130, 100, 20);
  fill("lightblue");
  rect(car1+10, 110, 60, 20);
  fill(10);
  circle(car1+15, 150, 25);
  circle(car1+70, 150, 25);

  fill("orange");
  rect(carmiddle2, 280, 100, 20);
  fill("lightblue");
  rect(cartop2, 260, 60, 20);
  fill(10);
  circle(wheel3, 300, 25);
  circle(wheel4, 300, 25);

  fill("orange");
  rect(carmiddle3, 430, 100, 20);
  fill("lightblue");
  rect(cartop3, 410, 60, 20);
  fill(10);
  circle(wheel5, 450, 25);
  circle(wheel6, 450, 25);

  fill("orange");
  rect(carmiddle4, 580, 100, 20);
  fill("lightblue");
  rect(cartop4, 560, 60, 20);
  fill(10);
  circle(wheel7, 600, 25);
  circle(wheel8, 600, 25);

  

  if (
    checkCollision(car1, 110, 100, 40) ||
    checkCollision(carmiddle2, 260, 100, 40) ||
    checkCollision(carmiddle3, 410, 100, 40) ||
    checkCollision(carmiddle4, 560, 100, 40)
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

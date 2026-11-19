let n = 15
let ellipseY = 200
let startX = 20
let xstep = 39

function setup() {
  createCanvas(600, 600);


}



function draw() {
  
  
  background(0);
  let s = 35;
  fill(69, 39, 8);
  rect(200, 500, 200);
  triangle(200, 500, 300, 400, 400, 500);
  fill(181, 134, 69);
  rect(285, 544, 30, 55);
  fill(151, 114, 69);
  circle(292, 573, 8);
  fill(255, 204, 0);
  rect(335, 544, s);
  rect(225, 544, s);
  fill(151, 114, 69);
  for (let i = 0; i < n; i++) {
    let x = startX + xstep * i;
  rect(x, 560, 15, 40);
  }
  rect(10,568,578,10)
  fill(175);
  rect(350,190,80,5)
  rect(350,204,80,5)
  triangle(420,185,420,200,450,192)
  triangle(420,200,420,215,450,207)
  fill(255)
  
  if (keyIsDown(LEFT_ARROW)) {
    ellipseY = ellipseY + 50;
  if (ellipseY >= 420)
    ellipseY = 200
  }

  if (mouseX > 400 && mouseY < 200) {
    fill(151, 114, 69);
  }
  ellipse(335, ellipseY, 10, 25);
  
  fill(175)
  ellipse(300, 170, 20, 50);
  ellipse(300, 230, 20, 50);
  ellipse(300, 200, 140, 30);
  fill(1);
  circle(260, 200, 10);
  fill(255, 204, 0);
  triangle(240,195,240,205,210,200)
  
}

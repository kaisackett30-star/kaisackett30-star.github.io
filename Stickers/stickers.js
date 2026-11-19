let alien1 = {
  x: 150,
  y: 200,
  paint: "forestgreen"
};

let alien2 = {
  x: 300,
  y: 200,
  paint: "red"
};

let alien3 = {
  x: 450,
  y: 200,
  paint: "blue"
};

function setup() {
  createCanvas(600, 600);
}

function alien(sticker) {
  fill(sticker.paint);

  // head
  circle(sticker.x, sticker.y, 100);

  // eyes
  fill("black");
  circle(sticker.x - 15, sticker.y - 10, 10);
  circle(sticker.x + 15, sticker.y - 10, 10);
}

function draw() {
  background(220);

  alien(alien1);
  alien(alien2);
  alien(alien3);
}
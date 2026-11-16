function drawRacer(x,y) {
    rect(x, y, 32, 12);
    circle(x + 8, y + 12, 10);
}

function setup() {
    createCanvas(900, 700);
    drawRacer(40,50);
    drawRacer(100,110);
}
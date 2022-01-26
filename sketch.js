function setup() {
  createCanvas(windowWidth, windowHeight);
  tempx = windowWidth/2;
  tempy = windowHeight/2;
}

// let tempx = windowWidth/2;
// let tempy = windowHeight/2;
// let speed = 4;

function draw() {
  background(255, 204, 229);
  circle(tempx, tempy, random(1,50));
  tempx = tempx+4;

}

function mouseClicked() {
  tempx = mouseX;
  tempy = mouseY;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  window.alert('Click anywhere to start growing a shape. Default is a circle, but you can change the shape by clicking 1 for circle, 2 for square, and 3 for triangle on your keyboard. You can also increase the rate of your shape growing with the up arrow key or decrease the rate with the down arrow key.');
  tempx = windowWidth/2;
  tempy = windowHeight/2;
  background(0);
  counter = 1;
  increment = 0.5;
  clickCounter = 0;
  tempShape = 'circle';
  shape = 'none';
}

function draw() {
    strokeWeight(.5);
    stroke(250);
    fill(random(255), random(255), random(255), random(255))
    if (shape == 'circle') {
        circle(tempx, tempy, counter);
    }
    else if (shape == 'square') {
        rect(tempx, tempy, counter);
    }
    else if (shape == 'triangle') {
        triangle(tempx, tempy, tempx+(counter/2), tempy+counter, tempx+counter, tempy);
    }
    else if (shape == 'none') {
        ;
    }
    counter = counter + increment;
}

function mouseClicked() {
//  clickCounter++;
//  if (clickCounter == 2 || clickCounter % 2 == 0) {
//    tempx = -1000;
//    tempy = -1000;
//    shape = 'none';
//  }
//  else {
    tempx = mouseX;
    tempy = mouseY;
    shape = tempShape;
    counter = 0;
//  }
}

function keyPressed() {
    if (key === '1') {
        tempShape = 'circle';
    }
    else if (key === '2') {
        tempShape = 'square';
    }
    else if (key === '3') {
        tempShape = 'triangle';
    }
    else if (keyCode == UP_ARROW) {
        increment = increment + 0.1;
    }
    else if (keyCode == DOWN_ARROW && increment >= 0.1) {
        increment = increment - 0.1;
    }
}
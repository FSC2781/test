function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent(thegame);
}

function draw() {
  background(220);
  push();
    noStroke();
    ellipse(mouseY, mouseX, 50);
    stroke(0, 0, 0);
    ellipse(mouseX, mouseY, 50);
    ellipse(mouseX+random(-10,10), mouseY+random(-10,10), 20)
  pop();
}

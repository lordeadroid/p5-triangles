function setup() {
  createCanvas(1900, 940, WEBGL);
}

let x = 50;
let y = 50;

function draw() {
  if (frameCount % 15 === 0) {
    const R = random(255);
    const G = random(255);
    const B = random(255);
    fill(R, G, B);
  }

  if (frameCount % 60) {
    xTrans = -0.01;
  }
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  x += 0.2;
  y += 0.2;
  translate(x, y);

  triangle(-100, 125, 40, -150, 180, 125);
}

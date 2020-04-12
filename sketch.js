let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(createVector(random(0, width), random(0, height)), createVector(random(0, 1000), random(0, 1000), random(0, 1000))));
  }
}

function draw() {
  background(50);

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

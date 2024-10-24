let mImg;

function preload() {
  mImg = loadImage("../assets/secret_01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  image(mImg, 0, 0);

  mImg.loadPixels();

  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    mImg.pixels[idx + 1] = 0;
    mImg.pixels[idx + 2] = 0;
  }
  mImg.updatePixels();

  image(mImg, 0, 0);
}

function draw() {}

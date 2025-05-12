let imgPaths = [];
let imgs = [];
let selectedCount = 2;

function preload() {
  for (let i = 1; i <= 10; i++) { // adjust to your number of images
    imgPaths.push(`images/img${i}.jpg`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  loadImages();

  let selector = select('#imgCount');
  selector.changed(() => {
    selectedCount = int(selector.value());
    shuffleAndDisplay();
  });
}

function loadImages() {
  imgs = imgPaths.map(path => loadImage(path));
}

function shuffleAndDisplay() {
  clear();
  background(255);
  let shuffled = shuffle([...imgs]); // non-destructive shuffle
  let w = width / selectedCount;

  for (let i = 0; i < selectedCount; i++) {
    image(shuffled[i], i * w, 0, w, height);
  }
}

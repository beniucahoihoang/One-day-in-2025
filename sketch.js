let imgs = [];
let selectedCount = 2;

function preload() {
  for (let i = 1; i <= 10; i++) {
    imgs.push(loadImage(`images/img${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // draw only when needed
  loadImages();

  let selector = select('#imgCount');
  selector.changed(() => {
    selectedCount = int(selector.value());
    shuffleAndDisplay();
  });

  select('#shuffleBtn').mousePressed(() => {
    shuffleAndDisplay();
  });

  shuffleAndDisplay(); // show once at start
}

function loadImages() {
  imgs = imgPaths.map(path => loadImage(path));
}

function shuffleAndDisplay() {
  clear();
  background(255);
  let shuffled = shuffle([...imgs]); // shuffle copy
  let w = width / selectedCount;

  for (let i = 0; i < selectedCount; i++) {
    image(shuffled[i], i * w, 0, w, height);
  }
}

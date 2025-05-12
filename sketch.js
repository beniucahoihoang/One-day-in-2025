let imgs = [];
let selectedCount = 2;

function preload() {
  for (let i = 1; i <= 10; i++) {
    imgs.push(loadImage(`images/img${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  let selector = select('#imgCount');
  selector.changed(() => {
    selectedCount = int(selector.value());
    shuffleAndDisplay();
  });

  select('#shuffleBtn').mousePressed(() => {
    shuffleAndDisplay();
  });

  shuffleAndDisplay();
}

function shuffleAndDisplay() {
  clear();
  background(255);
  
  let shuffled = shuffle([...imgs]);
  let w = width / selectedCount;

  for (let i = 0; i < selectedCount; i++) {
    let img = shuffled[i];

    // Get a resized copy with correct aspect ratio
    let aspect = img.width / img.height;
    let h = w / aspect;

    // If image size is invalid (zero), fallback to square
    if (!aspect || !isFinite(aspect)) {
      h = width / selectedCount;
    }

    let y = (height - h) / 2;
    image(img, i * w, y, w, h);
  }
}

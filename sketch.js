let imgs = [];
let selectedCount = 2;

function preload() {
  for (let path of imagePaths) {
    let img = loadImage(path, (img) => {
      img.resize(200, 0); // Set a consistent width, auto height
    });
    imgs.push(img);
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

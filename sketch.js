let imgPaths = [];
let imgs = [];
let selectedCount = 2;
let canvas;

function preload() {
  for (let i = 1; i <= 100; i++) {
    imgPaths.push(`images/img${i}.jpg`);
  }
}

function setup() {
  canvas = createCanvas(0, 0);
  canvas.parent('canvasContainer');
  noLoop();

  loadImages();

  let selector = select('#imgCount');
  selector.changed(() => {
    selectedCount = int(selector.value());
    shuffleAndDisplay();
  });

  select('#shuffleBtn').mousePressed(() => {
    shuffleAndDisplay();
  });
}

function loadImages() {
  imgs = [];
  let loaded = 0;

  for (let i = 0; i < imgPaths.length; i++) {
    loadImage(imgPaths[i], img => {
      imgs[i] = img;
      loaded++;
      if (loaded === imgPaths.length) {
        shuffleAndDisplay();
      }
    }, err => {
      console.error(`Failed to load image: ${imgPaths[i]}`, err);
    });
  }
}

function shuffleAndDisplay() {
  const containerHeight = window.innerHeight - 60; // height minus controls
  const imgHeight = containerHeight;
  const imgWidth = imgHeight * (4 / 3); // 4:3 aspect ratio
  const totalWidth = imgWidth * selectedCount;

  resizeCanvas(totalWidth, imgHeight);
  clear();
  background(255);

  const shuffled = shuffle([...imgs]);
  const selectedImages = shuffled.slice(0, selectedCount);

  for (let i = 0; i < selectedCount; i++) {
    image(selectedImages[i], i * imgWidth, 0, imgWidth, imgHeight);
  }

  document.getElementById('canvasContainer').scrollLeft = 0;
}

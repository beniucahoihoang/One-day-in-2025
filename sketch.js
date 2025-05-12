let imgPaths = [];
let imgs = [];
let selectedCount = 2;

function preload() {
  // Assuming you have 50 images
  for (let i = 1; i <= 50; i++) { // Update the range for 50 images
    imgPaths.push(`images/img${i}.jpg`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Only draw when needed
  loadImages();

  let selector = select('#imgCount');
  selector.changed(() => {
    selectedCount = int(selector.value());
    shuffleAndDisplay();
  });

  select('#shuffleBtn').mousePressed(() => {
    shuffleAndDisplay();
  });

  shuffleAndDisplay(); // Show once at start
}

function loadImages() {
  imgs = imgPaths.map(path => loadImage(path)); // Preload all the images
}

function shuffleAndDisplay() {
  clear();
  background(255);

  // Shuffle the images array to ensure randomness
  let shuffled = shuffle([...imgs]); // shuffle a copy to avoid modifying the original array

  // Slice the shuffled array to get the number of images we want to display
  let selectedImages = shuffled.slice(0, selectedCount);

  let w = width / selectedCount;

  // Display the selected images
  for (let i = 0; i < selectedCount; i++) {
    image(selectedImages[i], i * w, 0, w, height);
  }
}
